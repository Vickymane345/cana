import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const email = searchParams.get('email');

    if (!userId && !email) {
      return NextResponse.json(
        { error: "User ID or Email is required" },
        { status: 400 }
      );
    }

    let user;
    if (userId) {
      user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
        include: {
          referrals: {
            take: 1,
          },
        },
      });
    } else if (email) {
      user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
        include: {
          referrals: {
            take: 1,
          },
        },
      });
    }

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

    // Return user data without password
    const { password, ...userWithoutPassword } = user;

    return NextResponse.json({
      ...userWithoutPassword,
      referralCode: referralCode
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
