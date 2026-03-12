import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// GET /api/rewards?user=email - Fetch user reward points and ledger
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("user");

    if (!userEmail) {
      return NextResponse.json({ error: "User email required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true, rewardPoints: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const ledger = await prisma.rewardLedger.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      rewardPoints: user.rewardPoints,
      ledger,
    });
  } catch (error) {
    console.error("Error fetching rewards:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST /api/rewards - Redeem reward points
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userEmail, pointsToRedeem } = body;

    if (!userEmail || !pointsToRedeem || pointsToRedeem <= 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true, rewardPoints: true, mainBalance: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.rewardPoints < pointsToRedeem) {
      return NextResponse.json({ error: "Insufficient reward points" }, { status: 400 });
    }

    // Minimum redemption: 100 points = $1
    if (pointsToRedeem < 100) {
      return NextResponse.json({ error: "Minimum redemption is 100 points" }, { status: 400 });
    }

    const cashValue = pointsToRedeem / 100; // 100 points = $1

    // Perform redemption
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Deduct points
      await tx.user.update({
        where: { id: user.id },
        data: { rewardPoints: { decrement: pointsToRedeem } },
      });

      // Add to main balance
      await tx.user.update({
        where: { id: user.id },
        data: { mainBalance: { increment: cashValue } },
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

    return NextResponse.json({
      success: true,
      message: `Successfully redeemed ${pointsToRedeem} points for $${cashValue}`,
      cashValue,
    });
  } catch (error) {
    console.error("Error redeeming rewards:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
