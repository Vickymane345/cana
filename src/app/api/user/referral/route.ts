import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    // Get user with referral code using userId
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      include: {
        referrals: {
          take: 1,
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Extract referral code
    const referralCode = user.referrals && user.referrals.length > 0
      ? user.referrals[0].code
      : null;

    return NextResponse.json({
      referralCode: referralCode,
      userId: user.id,
      email: user.email,
      success: true
    });
  } catch (error) {
    console.error("Error fetching referral code:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
