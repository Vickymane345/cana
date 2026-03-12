// src/app/api/addFunds/route.ts

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

console.log("🧩 Loaded ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

export const runtime = "nodejs";

// ✅ Define the expected shape of the request body
interface AddFundsRequestBody {
  user: string;
  amount: number;
  currency: string;
  address?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { user, amount, currency, address } = body as AddFundsRequestBody;

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user || !emailRegex.test(user)) {
      return NextResponse.json(
        { success: false, message: "Valid email is required." },
        { status: 400 }
      );
    }

    // ✅ Amount validation
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json(
        { success: false, message: "Valid positive amount is required." },
        { status: 400 }
      );
    }

    const numericAmount = Number(amount);

    if (!currency || !address) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // ✅ Find user
    const foundUser = await prisma.user.findUnique({
      where: { email: user },
      select: { id: true, email: true, firstName: true },
    });

    if (!foundUser) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 404 }
      );
    }

    // ✅ Use UUID for transaction reference
    const transactionRef = uuidv4();

    // ✅ Create pending deposit and transaction atomically
    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const deposit = await tx.deposit.create({
        data: {
          userId: foundUser.id,
          amount: numericAmount,
          currency: currency,
          address: address,
          status: "Pending",
        },
      });

      const transaction = await tx.transaction.create({
        data: {
          userId: foundUser.id,
          amount: numericAmount,
          paymentMethod: currency,
          transactionRef: transactionRef,
          type: "Deposit",
          status: "Pending",
          description: `Deposit via ${currency}`,
        },
      });

      return { deposit, transaction };
    });

    // ✅ Admin email for approval
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPass = process.env.ADMIN_PASS;
    if (!adminEmail || !adminPass) {
      console.error("Missing ADMIN_EMAIL or ADMIN_PASS in environment");
      return NextResponse.json(
        { success: false, message: "Server email not configured properly." },
        { status: 500 }
      );
    }

    const baseUrl = process.env.PUBLIC_BASE_URL || "https://tradeglobalfx.org/";
    console.log("Using baseUrl:", baseUrl);

    const approveUrl = `${baseUrl}/api/addFunds/approve?transactionId=${result.transaction.id}&action=approve`;
    const rejectUrl = `${baseUrl}/api/addFunds/approve?transactionId=${result.transaction.id}&action=reject`;

    // ✅ Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });

    console.log("📩 Sending deposit approval email to admin:", adminEmail);

    const adminDashboardUrl = `${baseUrl}/admin/dashboard`;

    // ✅ Send the admin email
    await transporter.sendMail({
      from: `"Trade GlobalFX" <${adminEmail}>`,
      to: adminEmail,
      subject: "Deposit Request Pending Approval",
      html: `
        <h3>Deposit Request from ${foundUser.email}</h3>
        <p><b>Amount:</b> ${numericAmount} ${currency}</p>
        <p><b>Wallet Address:</b> ${address}</p>
        <p><b>Transaction Ref:</b> ${transactionRef}</p>
        <br/>
        <p>
          <a href="${approveUrl}" style="background:#4CAF50;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Approve</a>
          &nbsp;
          <a href="${rejectUrl}" style="background:#f44336;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Reject</a>
        </p>
        <br/>
        <p>
          <a href="${adminDashboardUrl}" style="background:#007bff;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">View Admin Dashboard</a>
        </p>
      `,
    });

    console.log("✅ Deposit approval email sent successfully!");

    return NextResponse.json(
      {
        success: true,
        message: "Deposit submitted successfully. Awaiting admin approval.",
        transactionRef: transactionRef,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ AddFunds error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process deposit." },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
