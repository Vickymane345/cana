import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { apiRateLimit } from "@/lib/apiRateLimit";

export const runtime = 'nodejs';

interface VerifyCredentialsRequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const rateLimitResult = await apiRateLimit(req, "verifyCredentials");
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data: VerifyCredentialsRequestBody = await req.json();
    const { email, password } = data;

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password required" }, { status: 400 });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
    }

    // Return success with user info (no token yet)
    return NextResponse.json({
      success: true,
      message: "Credentials verified. Please verify your private key.",
      userId: user.id,
      email: user.email,
      newUser: false, // For signin, always false
    });
  } catch (err: any) {
    console.error("Verify credentials error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
