import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { AuthService } from "@/lib/auth";
import { apiRateLimit } from "@/lib/apiRateLimit";
import { randomBytes } from "crypto";

export const runtime = 'nodejs';

interface SignInRequestBody {
  email: string;
  password: string;
  privateKey?: string;
}
// Explicitly type the parsed JSON body
export async function POST(req: Request) {
  try {
    // Rate limiting
    const rateLimitResult = await apiRateLimit(req, "signin");
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data: SignInRequestBody = await req.json();
    const { email, password, privateKey } = data;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // If private key is provided, verify it
    if (privateKey && user.privateKeyHash) {
      const isPrivateKeyValid = await bcrypt.compare(privateKey, user.privateKeyHash);
      if (!isPrivateKeyValid) {
        return NextResponse.json({ error: "Invalid private key" }, { status: 401 });
      }
    }

    // Fetch referral code
    let referral = await prisma.referral.findFirst({
      where: { userId: user.id },
      select: { code: true },
    });

    // If no referral exists, generate one
    if (!referral) {
      const referralCodeGenerated = randomBytes(4).toString('hex').toUpperCase();
      console.log(`Generating new referral code for user ${user.id}: ${referralCodeGenerated}`);
      await prisma.referral.create({
        data: {
          userId: user.id,
          code: referralCodeGenerated,
        },
      });
      referral = { code: referralCodeGenerated };
      console.log(`Referral code created successfully for user ${user.id}`);
    } else {
      console.log(`Existing referral code found for user ${user.id}: ${referral.code}`);
    }

    // Generate JWT token
    const tokenPayload = {
      userId: user.id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    };
    const { accessToken } = AuthService.generateAccessTokenOnly(tokenPayload);

    // Return sanitized user data with token
    console.log("Returning user with referralCode:", referral?.code);
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        mainBalance: user.mainBalance,
        totalDeposit: user.totalDeposit,
        totalWithdraw: user.totalWithdrawals,
        referralCode: referral?.code,
      },
      accessToken,
    });
  } catch (err: any) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
