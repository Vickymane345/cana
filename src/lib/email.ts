import nodemailer from 'nodemailer';
import logger from "@/lib/logger";

export const runtime = "nodejs";

// ✅ Configure Nodemailer transporter (Gmail SMTP or any SMTP provider)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

// ✅ Generic helper to send an email
async function sendEmail(to: string, subject: string, html: string) {
  try {
    await transporter.sendMail({
      from: `"Trade GlobalFX" <${process.env.ADMIN_EMAIL}>`,
      to,
      subject,
      html,
    });
    logger.info({ message: `✅ Email sent to ${to}`, subject });
  } catch (error) {
    logger.error({
      message: "❌ Failed to send email",
      error: error instanceof Error ? error.message : String(error),
      to,
    });
  }
}

// ✅ Notify admin about a new withdrawal request
export async function sendWithdrawalRequestEmail(withdrawalData: {
  withdrawalId: number;
  userEmail: string;
  userName: string;
  amount: number;
  currency: string;
  address: string;
  transactionRef: string;
}) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) throw new Error("ADMIN_EMAIL is not configured");

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tradeglobalfx.org/";

    const approveUrl = `${baseUrl}/api/withdrawal/approve?withdrawalId=${withdrawalData.withdrawalId}&action=approve`;
    const rejectUrl = `${baseUrl}/api/withdrawal/approve?withdrawalId=${withdrawalData.withdrawalId}&action=reject`;
    const adminDashboardUrl = `${baseUrl}/admin/dashboard`;

    const subject = "Withdrawal Request Awaiting Approval";
    const html = `
      <h2>Withdrawal Request</h2>
      <p><strong>User:</strong> ${withdrawalData.userName} (${withdrawalData.userEmail})</p>
      <p><strong>Amount:</strong> ${withdrawalData.amount} ${withdrawalData.currency}</p>
      <p><strong>Address:</strong> ${withdrawalData.address}</p>
      <p><strong>Transaction Ref:</strong> ${withdrawalData.transactionRef}</p>
      <hr />
      <p>
        <a href="${approveUrl}" style="background:#28a745;color:white;padding:8px 12px;text-decoration:none;border-radius:5px;">Approve</a>
        <a href="${rejectUrl}" style="background:#dc3545;color:white;padding:8px 12px;text-decoration:none;border-radius:5px;margin-left:10px;">Reject</a>
      </p>
      <br />
      <p>
        <a href="${adminDashboardUrl}" style="background:#007bff;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">View Admin Dashboard</a>
      </p>
    `;

    logger.info({
      message: `📩 Sending withdrawal request email to admin: ${adminEmail}`,
      withdrawalId: withdrawalData.withdrawalId,
    });

    await sendEmail(adminEmail, subject, html);
  } catch (error) {
    logger.error({
      message: "Failed to send withdrawal request email",
      error: error instanceof Error ? error.message : "Unknown error",
      withdrawalId: withdrawalData.withdrawalId,
    });
    throw error;
  }
}

// ✅ Notify admin about a new support ticket
export async function sendTicketCreationEmail(ticketData: {
  ticketId: number;
  username: string;
  email: string;
  subject: string;
  problem: string;
}) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) throw new Error("ADMIN_EMAIL is not configured");

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tradeglobalfx.org/";

    const subject = "New Support Ticket Created";
    const html = `
      <h2>New Support Ticket</h2>
      <p><strong>User:</strong> ${ticketData.username} (${ticketData.email})</p>
      <p><strong>Subject:</strong> ${ticketData.subject}</p>
      <p><strong>Problem:</strong> ${ticketData.problem}</p>
      <hr />
      <p>
        <a href="${baseUrl}/support?ticketId=${ticketData.ticketId}" style="background:#007bff;color:white;padding:8px 12px;text-decoration:none;border-radius:5px;">View Ticket</a>
      </p>
    `;

    logger.info({
      message: `📩 Sending ticket creation email to admin: ${adminEmail}`,
      ticketId: ticketData.ticketId,
    });

    await sendEmail(adminEmail, subject, html);
  } catch (error) {
    logger.error({
      message: "Failed to send ticket creation email",
      error: error instanceof Error ? error.message : "Unknown error",
      ticketId: ticketData.ticketId,
    });
    throw error;
  }
}

// ✅ Send ticket confirmation to user
export async function sendTicketConfirmationEmail(ticketData: {
  ticketId: number;
  username: string;
  email: string;
  subject: string;
}) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tradeglobalfx.org/";

    const subject = "Support Ticket Created - Ticket #" + ticketData.ticketId;
    const html = `
      <h2>Support Ticket Created</h2>
      <p>Dear ${ticketData.username},</p>
      <p>Your support ticket has been successfully created.</p>
      <p><strong>Ticket ID:</strong> ${ticketData.ticketId}</p>
      <p><strong>Subject:</strong> ${ticketData.subject}</p>
      <p>You will receive email updates when our support team responds to your ticket.</p>
      <hr />
      <p>
        <a href="${baseUrl}/support?ticketId=${ticketData.ticketId}" style="background:#007bff;color:white;padding:8px 12px;text-decoration:none;border-radius:5px;">View Your Ticket</a>
      </p>
      <p>Best regards,<br>Trade Global FX Support Team</p>
    `;

    logger.info({
      message: `📩 Sending ticket confirmation email to user: ${ticketData.email}`,
      ticketId: ticketData.ticketId,
    });

    await sendEmail(ticketData.email, subject, html);
  } catch (error) {
    logger.error({
      message: "Failed to send ticket confirmation email",
      error: error instanceof Error ? error.message : "Unknown error",
      ticketId: ticketData.ticketId,
    });
    throw error;
  }
}

// ✅ Send admin reply to user
export async function sendTicketReplyEmail(replyData: {
  ticketId: number;
  username: string;
  userEmail: string;
  message: string;
}) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tradeglobalfx.org/";

    const subject = "Support Team Response - Ticket #" + replyData.ticketId;
    const html = `
      <h2>Support Team Response</h2>
      <p>Dear ${replyData.username},</p>
      <p>Our support team has responded to your ticket.</p>
      <p><strong>Ticket ID:</strong> ${replyData.ticketId}</p>
      <p><strong>Response:</strong></p>
      <div style="background:#f8f9fa;padding:15px;border-left:4px solid #007bff;margin:10px 0;">
        ${replyData.message.replace(/\n/g, '<br>')}
      </div>
      <hr />
      <p>
        <a href="${baseUrl}/support?ticketId=${replyData.ticketId}" style="background:#007bff;color:white;padding:8px 12px;text-decoration:none;border-radius:5px;">Reply to Ticket</a>
      </p>
      <p>Best regards,<br>Trade Global FX Support Team</p>
    `;

    logger.info({
      message: `📩 Sending ticket reply email to user: ${replyData.userEmail}`,
      ticketId: replyData.ticketId,
    });

    await sendEmail(replyData.userEmail, subject, html);
  } catch (error) {
    logger.error({
      message: "Failed to send ticket reply email",
      error: error instanceof Error ? error.message : "Unknown error",
      ticketId: replyData.ticketId,
    });
    throw error;
  }
}
