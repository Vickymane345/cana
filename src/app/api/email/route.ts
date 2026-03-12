import emailjs from "@emailjs/browser";
import { emailSchema, EmailInput } from "@/lib/validation";
import { handleApiError, createSuccessResponse } from "@/lib/errorHandler";
import logger from "@/lib/logger";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body: EmailInput = await req.json();

    // Validate input
    const validatedData = emailSchema.parse(body);

    // Check for idempotency key (optional, for withdrawal notifications)
    const idempotencyKey = body.idempotencyKey || `${validatedData.to_email}-${validatedData.subject}-${Date.now()}`;

    // Initialize EmailJS with service credentials
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY ||"");

    // Send email
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID ||"",
      process.env.EMAILJS_TEMPLATE_ID ||"",
      {
        to_email: validatedData.to_email,
        subject: validatedData.subject,
        message: validatedData.message,
      },
      process.env.EMAILJS_PUBLIC_KEY || ""
    );

    logger.info({
      message: "Email sent successfully",
      to: validatedData.to_email,
      subject: validatedData.subject,
      idempotencyKey,
    });

    return createSuccessResponse({
      success: true,
      message: "Email sent successfully",
      idempotencyKey,
    });
  } catch (error) {
    logger.error({
      message: "Email sending failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return handleApiError(error);
  }
}

export const dynamic = "force-dynamic";
