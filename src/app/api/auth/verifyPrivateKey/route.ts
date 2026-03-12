import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { AuthService } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { userId, privateKey } = await req.json();

    if (!userId || !privateKey) {
      return NextResponse.json(
        { success: false, message: "User ID and private key are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    if (!user.privateKeyHash) {
      return NextResponse.json(
        { success: false, message: "No private key found for this user" },
        { status: 403 }
      );
    }

    const keyOk = await bcrypt.compare(privateKey, user.privateKeyHash);
    if (!keyOk) {
      return NextResponse.json(
        { success: false, message: "Invalid private key" },
        { status: 401 }
      );
    }

    // Generate token
    const token = AuthService.generateAccessTokenOnly({
      userId: user.id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    });

    return NextResponse.json({
      success: true,
      token: token.accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        mainBalance: user.mainBalance,
        totalDeposit: user.totalDeposit,
        totalWithdrawals: user.totalWithdrawals,
        investmentBalance: user.investmentBalance,
        totalEarn: user.totalEarn,
        roi: user.roi,
        redeemedRoi: user.redeemedRoi,
        speedInvest: user.speedInvest,
        completed: user.completed,
      },
    });
  } catch (error) {
    console.error("Verify private key error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
