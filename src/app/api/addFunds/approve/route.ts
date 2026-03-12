import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { RewardService } from "@/lib/services/rewardService";
import { NotificationService } from "@/lib/services/notificationService";

export const runtime = "nodejs";

// GET /api/addFunds/approve?transactionId=...&action=approve|reject
// Also supports depositId parameter for direct deposit approval
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const transactionId = url.searchParams.get("transactionId");
    const depositId = url.searchParams.get("depositId");
    const action = url.searchParams.get("action");

    if ((!transactionId && !depositId) || !action) {
      return NextResponse.json(
        { success: false, message: "Missing transactionId/depositId or action." },
        { status: 400 }
      );
    }

    if (!["approve", "reject"].includes(action)) {
      return NextResponse.json(
        { success: false, message: "Invalid action." },
        { status: 400 }
      );
    }

    // Validate ID
    const id = parseInt(String(transactionId || depositId));
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid transaction or deposit ID" },
        { status: 400 }
      );
    }

    // Basic admin check (email-based for now)
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      return NextResponse.json(
        { success: false, message: "Admin configuration error." },
        { status: 500 }
      );
    }

    // Find the transaction
    const transaction = await prisma.transaction.findUnique({
      where: { id: id },
      include: { user: true },
    });

    if (!transaction) {
      return NextResponse.json(
        { success: false, message: "Transaction not found." },
        { status: 404 }
      );
    }

    if (transaction.status !== "Pending") {
      return NextResponse.json(
        { success: false, message: "Transaction already processed." },
        { status: 400 }
      );
    }

    if (transaction.type !== "Deposit") {
      return NextResponse.json(
        { success: false, message: "Only deposits can be approved." },
        { status: 400 }
      );
    }

    // Determine new statuses
    const newTransactionStatus = action === "approve" ? "Success" : "Failed";
    const newDepositStatus = action === "approve" ? "Completed" : "Failed";

    // Atomic update: transaction, deposit, user balance, rewards
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update transaction status
      await tx.transaction.update({
        where: { id: id },
        data: { status: newTransactionStatus },
      });

      // Find and update deposit status
      const deposit = await tx.deposit.findFirst({
        where: {
          userId: transaction.userId,
          amount: transaction.amount,
          status: "Pending",
          createdAt: {
            gte: new Date(transaction.createdAt.getTime() - 1000), // Small tolerance
            lte: new Date(transaction.createdAt.getTime() + 1000),
          },
        },
      });

      if (deposit) {
        await tx.deposit.update({
          where: { id: deposit.id },
          data: { status: newDepositStatus },
        });
      }

      // Update user balance only on approval
      if (action === "approve") {
        await tx.user.update({
          where: { id: transaction.userId },
          data: {
            mainBalance: { increment: transaction.amount },
            totalDeposit: { increment: transaction.amount },
          },
        });

        // Auto-redeem pending referral rewards for this user
        const pendingRewards = await (tx as any).referralReward.findMany({
          where: { 
            referredUserId: transaction.userId, 
            status: 'PENDING' 
          },
        });

        if (pendingRewards.length > 0) {
          // Update all pending rewards to REDEEMED
          await (tx as any).referralReward.updateMany({
            where: { 
              referredUserId: transaction.userId, 
              status: 'PENDING' 
            },
            data: { 
              status: 'REDEEMED',
              redeemedAt: new Date()
            },
          });

          // Credit each referrer's balance
          for (const reward of pendingRewards) {
            await tx.user.update({
              where: { id: reward.userId },
              data: { 
                mainBalance: { increment: reward.amount },
                totalEarn: { increment: reward.amount }
              },
            });

            // Create transaction record for referral earnings
            await tx.transaction.create({
              data: {
                userId: reward.userId,
                type: "Referral Reward",
                amount: reward.amount,
                description: `Referral reward for user ${transaction.userId}'s deposit of $${transaction.amount}`,
                status: "Success",
              },
            });
          }
        }

      }
    }, {
      maxWait: 10000, // 10 seconds
      timeout: 10000, // 10 seconds
    });

    // Award referral reward using RewardService AFTER transaction (for backward compatibility)
    if (action === "approve") {
      const deposit = await prisma.deposit.findFirst({
        where: {
          userId: transaction.userId,
          amount: transaction.amount,
          status: "Completed",
          createdAt: {
            gte: new Date(transaction.createdAt.getTime() - 1000),
            lte: new Date(transaction.createdAt.getTime() + 1000),
          },
        },
      });
      
      if (deposit) {
        try {
          await RewardService.awardReferralReward(transaction.userId, transaction.amount, "Deposit", deposit.id);
        } catch (rewardError) {
          console.error("Failed to award reward points:", rewardError);
          // Don't fail the entire operation if reward points fail
        }
      }
    }

    // Send notification after successful processing
    try {
      if (action === "approve") {
        await NotificationService.notifyDepositApproved(transaction.userId, transaction.amount);
      } else {
        await NotificationService.notifyDepositRejected(transaction.userId, transaction.amount);
      }
    } catch (notificationError) {
      console.error("Failed to send notification:", notificationError);
      // Don't fail the entire operation if notification fails
    }

    return NextResponse.json(
      {
        success: true,
        message: `Deposit ${action === "approve" ? "approved" : "rejected"} successfully.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Approve error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process approval." },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
