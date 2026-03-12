import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { AppError } from "@/lib/errorHandler";
import logger from "@/lib/logger";

export class RewardService {
  static async getUserRewards(userEmail: string) {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true, rewardPoints: true },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const ledger = await prisma.rewardLedger.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return {
      rewardPoints: user.rewardPoints,
      ledger,
    };
  }

  static async redeemRewards(userEmail: string, pointsToRedeem: number) {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true, rewardPoints: true, mainBalance: true },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    if (user.rewardPoints < pointsToRedeem) {
      throw new AppError("Insufficient reward points", 400);
    }

    if (pointsToRedeem < 100) {
      throw new AppError("Minimum redemption is 100 points", 400);
    }

    const cashValue = (pointsToRedeem / 100) * 50; // 100 points = $50

    // Perform redemption in transaction
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Deduct points
      await tx.user.update({
        where: { id: user.id },
        data: { rewardPoints: { decrement: pointsToRedeem } },
      });

      // Add to main balance and total earn
      await tx.user.update({
        where: { id: user.id },
        data: {
          mainBalance: { increment: cashValue },
          totalEarn: { increment: cashValue },
        },
      });

      // Log redemption
      await tx.rewardLedger.create({
        data: {
          userId: user.id,
          type: "redeemed",
          points: -pointsToRedeem,
          description: `Redeemed ${pointsToRedeem} points for $${cashValue}`,
        },
      });

      // Create transaction record
      await tx.transaction.create({
        data: {
          userId: user.id,
          type: "Reward Redemption",
          amount: cashValue,
          description: `Redeemed ${pointsToRedeem} reward points`,
          status: "Success",
        },
      });
    });

    logger.info({
      message: "Reward redemption successful",
      userId: user.id,
      pointsRedeemed: pointsToRedeem,
      cashValue,
    });

    return {
      success: true,
      message: `Successfully redeemed ${pointsToRedeem} points for $${cashValue}`,
      cashValue,
    };
  }

  static async awardReferralReward(referredUserId: number, amount: number, type: "Deposit" | "investment", depositId?: number) {
    const referredUser = await prisma.user.findUnique({
      where: { id: referredUserId },
      select: { referredById: true },
    });

    if (!referredUser?.referredById) {
      return; // No referrer
    }

    // Prevent self-referral: check if referrer is the same as referred user
    if (referredUser.referredById === referredUserId) {
      logger.warn({
        message: "Self-referral attempt blocked",
        userId: referredUserId,
      });
      return;
    }

    // Check if referral reward already exists (should be handled by ReferralReward model now)
    const existingReferralReward = await prisma.referralReward.findFirst({
      where: {
        userId: referredUser.referredById,
        referredUserId: referredUserId,
        status: 'REDEEMED',
      },
    });

    if (existingReferralReward) {
      logger.info({
        message: "Referral reward already redeemed via ReferralReward model",
        referrerId: referredUser.referredById,
        referredUserId,
      });
      return; // Already redeemed
    }

    const pointsToAward = type === "Deposit" ? 200 : 300;

    // Stronger idempotency check: prevent multiple rewards for same deposit-user combination
    if (depositId) {
      const existingReward = await prisma.rewardLedger.findFirst({
        where: {
          userId: referredUser.referredById,
          refId: depositId,
        },
      });

      if (existingReward) {
        logger.info({
          message: "Duplicate reward prevented",
          referrerId: referredUser.referredById,
          referredUserId,
          depositId,
        });
        return; // Already awarded for this deposit
      }
    }

    const cashValue = (pointsToAward / 100) * 50; // 100 points = $50

    // Award points to referrer (for backward compatibility with existing reward system)
    await prisma.user.update({
      where: { id: referredUser.referredById },
      data: {
        rewardPoints: { increment: pointsToAward },
      },
    });

    // Log in reward ledger
    await prisma.rewardLedger.create({
      data: {
        userId: referredUser.referredById,
        type: "earned",
        points: pointsToAward,
        description: `Referral reward points for ${type} of $${amount} by referred user`,
        refId: depositId || referredUserId,
      },
    });

    logger.info({
      message: "Referral reward points awarded (cash handled by ReferralReward model)",
      referrerId: referredUser.referredById,
      referredUserId,
      pointsAwarded: pointsToAward,
      type,
      amount,
      depositId,
    });
  }
}
