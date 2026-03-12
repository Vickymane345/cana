// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import nodemailer from "nodemailer";
import { NotificationService } from "@/lib/services/notificationService";

export const runtime = "nodejs";

interface SignupRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone?: string;
  referralCode?: string;
  termsAccepted: boolean;
  termsAcceptedIP?: string;
}

export async function POST(req: Request) {
  try {
    const data: SignupRequestBody = await req.json();
    const { firstName, lastName, email, username, password, phone, referralCode, termsAccepted, termsAcceptedIP } = data;

    if (!firstName || !lastName || !email || !username || !password || !termsAccepted) {
      return NextResponse.json({ error: "All required fields must be filled and terms must be accepted" }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existing) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
    }

    let referredById: number | null = null;
    if (referralCode) {
      const referrer = await prisma.referral.findUnique({
        where: { code: referralCode },
        include: { user: true },
      });

      if (referrer) {
        // Check if user is trying to refer themselves
        const existingUserWithEmail = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (existingUserWithEmail && existingUserWithEmail.id === referrer.userId) {
          return NextResponse.json({ error: "You cannot use your own referral code" }, { status: 400 });
        }

        referredById = referrer.userId;
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const privateKey = randomBytes(32).toString("hex");
    const privateKeyHash = await bcrypt.hash(privateKey, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email: email.toLowerCase(),
        password: hashedPassword,
        phone: phone || null,
        mainBalance: 0,
        investmentBalance: 0,
        totalEarn: 0,
        totalDeposit: 0,
        roi: 0,
        redeemedRoi: 0,
        speedInvest: 0,
        completed: 0,
        referredById,
        privateKeyHash,
        termsAcceptedAt: new Date(),
        termsAcceptedIP: termsAcceptedIP || req.headers.get("x-forwarded-for") || "unknown",
      },
    });

    // Create a referral code for the new user immediately
    const referralCodeGenerated = randomBytes(4).toString("hex").toUpperCase();
    await prisma.referral.create({
      data: {
        userId: newUser.id,
        code: referralCodeGenerated,
      },
    });

    // If user was referred, increment referrer's totalReferrals and create pending reward
    if (referredById) {
      const REFERRAL_AMOUNT = 150.0; // $150 per referral

      await prisma.$transaction(async (tx) => {
        // Increment total referrals
        await tx.user.update({
          where: { id: referredById },
          data: {
            totalReferrals: { increment: 1 },
          },
        });

        // Add a pending referral reward
        await tx.referralReward.create({
          data: {
            userId: referredById,
            referredUserId: newUser.id,
            amount: REFERRAL_AMOUNT,
            status: 'PENDING',
          },
        });
      });
    }

    // Send admin notification email for new user signup
    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      const adminPass = process.env.ADMIN_PASS;

      if (adminEmail && adminPass) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: adminEmail,
            pass: adminPass,
          },
        });

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tradeglobalfx.org/";
        const adminDashboardUrl = `${baseUrl}/admin/dashboard`;

        await transporter.sendMail({
          from: `"Trade GlobalFX" <${adminEmail}>`,
          to: adminEmail,
          subject: "New User Registration - Action Required",
          html: `
            <h2>New User Registration</h2>
            <p>A new user has registered on the platform.</p>
            <hr />
            <h3>User Details:</h3>
            <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Username:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${username}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email.toLowerCase()}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Registration Date:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              ` : ''}
            </table>
            <hr />
            <p>
              <a href="${adminDashboardUrl}" style="background:#007bff;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">View Admin Dashboard</a>
            </p>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This is an automated notification from the Trade GlobalFX.
            </p>
          `,
        });
        
        console.log("✅ Admin notification email sent for new user signup");
      }
    } catch (emailError) {
      // Log the error but don't fail the signup process
      console.error("❌ Failed to send admin notification email:", emailError);
    }

    // Create admin notification in database
    try {
      await NotificationService.notifyAdminNewSignup(firstName, lastName, username, email, phone);
    } catch (notificationError) {
      console.error("❌ Failed to create admin notification:", notificationError);
      // Don't fail signup if notification fails
    }

    // Return user summary + referral code + raw privateKey (one-time)
    return NextResponse.json({
      message: "Signup successful",
      privateKey,
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
        mainBalance: newUser.mainBalance,
        totalDeposit: newUser.totalDeposit,
        referralCode: referralCodeGenerated,
      },
    });
  } catch (err: any) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
