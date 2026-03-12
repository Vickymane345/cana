import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const userIdInt = parseInt(userId);
    if (isNaN(userIdInt)) {
      return NextResponse.json(
        { error: "Invalid User ID" },
        { status: 400 }
      );
    }

    // Get user to verify existence and get totalReferrals
    const user = await prisma.user.findUnique({
      where: { id: userIdInt },
      select: { 
        id: true, 
        totalReferrals: true 
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Get total earnings (sum of REDEEMED rewards)
    const totalEarningsResult = await prisma.referralReward.aggregate({
      _sum: { amount: true },
      where: { 
        userId: userIdInt, 
        status: 'REDEEMED' 
      },
    });

    // Get pending rewards (sum of PENDING rewards)
    const pendingRewardsResult = await prisma.referralReward.aggregate({
      _sum: { amount: true },
      where: { 
        userId: userIdInt, 
        status: 'PENDING' 
      },
    });

    const totalEarnings = totalEarningsResult._sum.amount || 0;
    const pendingRewards = pendingRewardsResult._sum.amount || 0;

    return NextResponse.json({
      totalReferrals: user.totalReferrals,
      totalEarnings: totalEarnings,
      pendingRewards: pendingRewards,
      success: true
    });
  } catch (error) {
    console.error("Error fetching referral stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
