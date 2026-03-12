  import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { NotificationService } from "@/lib/services/notificationService";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const withdrawalId = url.searchParams.get("withdrawalId");
    const action = url.searchParams.get("action");

    if (!withdrawalId || !action) {
      return NextResponse.json(
        { success: false, message: "Missing required parameters: withdrawalId and action" },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      return NextResponse.json(
        { success: false, message: "Admin configuration error." },
        { status: 500 }
      );
    }

    const id = parseInt(withdrawalId);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid withdrawal ID" },
        { status: 400 }
      );
    }

    const newStatus = action === "approve"
      ? "Completed"
      : action === "reject"
      ? "Rejected"
      : null;

    if (!newStatus) {
      return NextResponse.json(
        { success: false, message: "Invalid action. Must be 'approve' or 'reject'" },
        { status: 400 }
      );
    }

    const withdrawal = await prisma.withdrawal.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!withdrawal) {
      return NextResponse.json(
        { success: false, message: "Withdrawal not found." },
        { status: 404 }
      );
    }

    if (withdrawal.status !== "Pending") {
      return NextResponse.json(
        { success: false, message: "Withdrawal is not pending." },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.withdrawal.update({
        where: { id },
        data: { status: newStatus },
      });

      await tx.transaction.updateMany({
        where: { userId: withdrawal.userId, type: "withdraw", status: "Pending" },
        data: { status: newStatus === "Completed" ? "Success" : "Failed" },
      });

      if (newStatus === "Completed") {
        await tx.user.update({
          where: { id: withdrawal.userId },
          data: {
            mainBalance: { decrement: withdrawal.amount },
            totalWithdrawals: { increment: withdrawal.amount },
          },
        });
        console.log(`✅ Withdrawal ${id} approved for ${withdrawal.user.email}`);
      } else {
        console.log(`❌ Withdrawal ${id} rejected for ${withdrawal.user.email}`);
      }
    });

    // Send notification after successful processing
    try {
      if (newStatus === "Completed") {
        await NotificationService.notifyWithdrawalApproved(withdrawal.userId, withdrawal.amount);
      } else {
        await NotificationService.notifyWithdrawalRejected(withdrawal.userId, withdrawal.amount);
      }
    } catch (notificationError) {
      console.error("Failed to send notification:", notificationError);
      // Don't fail the entire operation if notification fails
    }

    // Send admin email notification for withdrawal approval/rejection
    try {
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

        const subject = newStatus === "Completed" 
          ? "Withdrawal Request Approved" 
          : "Withdrawal Request Rejected";
        
        const statusColor = newStatus === "Completed" ? "#4CAF50" : "#f44336";

        await transporter.sendMail({
          from: `"Trade GlobalFX" <${adminEmail}>`,
          to: adminEmail,
          subject: subject,
          html: `
            <h3>Withdrawal Request ${newStatus}</h3>
            <p><b>User:</b> ${withdrawal.user.email}</p>
            <p><b>Amount:</b> $${withdrawal.amount.toFixed(2)}</p>
            <p><b>Status:</b> <span style="color:${statusColor};font-weight:bold;">${newStatus}</span></p>
            <p><b>Date:</b> ${new Date().toLocaleString()}</p>
            <hr />
            <p>
              <a href="${adminDashboardUrl}" style="background:#007bff;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">View Admin Dashboard</a>
            </p>
          `,
        });
        
        console.log(`✅ Admin notification email sent for withdrawal ${newStatus.toLowerCase()}`);
      }
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
      // Don't fail the entire operation if email fails
    }

    return NextResponse.json(
      { success: true, message: `Withdrawal ${newStatus.toLowerCase()}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Withdrawal approval error:", error);
    return NextResponse.json(
      { success: false, message: "Withdrawal approval failed" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
