import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userEmail, points } = await req.json();

    if (!userEmail || !points || points <= 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true, rewardPoints: true, totalEarn: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const cashValue = points / 100; // 100 points = $1

    // Add points and update totalEarn and mainBalance
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.user.update({
        where: { id: user.id },
        data: {
          rewardPoints: { increment: points },
          totalEarn: { increment: cashValue },
          mainBalance: { increment: cashValue },
        },
      });

      // Log in reward ledger
      await tx.rewardLedger.create({
        data: {
          userId: user.id,
          type: "earned",
          points: points,
          description: `Test reward addition: ${points} points`,
        },
      });

      // Create transaction record
      await tx.transaction.create({
        data: {
          userId: user.id,
          type: "Reward Addition",
          amount: points,
          description: `Test addition of ${points} reward points`,
          status: "Success",
        },
      });
    });

    return NextResponse.json({
      success: true,
      message: `Added ${points} points to ${userEmail}`,
    });
  } catch (error) {
    console.error("Error adding reward:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
