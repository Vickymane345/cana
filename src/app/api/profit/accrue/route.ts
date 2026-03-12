import { NextResponse } from "next/server";
import { ProfitService } from "@/lib/services/profitService";
import { handleApiError, createSuccessResponse } from "@/lib/errorHandler";
import logger from "@/lib/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // Accrue profits for all active investments
    await ProfitService.accrueProfitsForAllUsers();

    logger.info({
      message: "Profit accrual triggered via API",
    });

    return createSuccessResponse({
      success: true,
      message: "Profit accrual completed successfully",
    });
  } catch (error) {
    logger.error({
      message: "Profit accrual failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return handleApiError(error);
  }
}
