import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { AppError } from "@/lib/errorHandler";
import logger from "@/lib/logger";
import { getROI } from "@/lib/validation";
import { NotificationService } from "./notificationService";

/**
 * Profit Calculation Service
 *
 * Deterministic Profit Formula:
 * - Total ROI Accrual at Maturity: investmentAmount * roiRate
 * - This ensures profits are accrued only once at the end of the investment period
 */
export class ProfitService {
  /**
   * Accrue profits for all matured investments
   * Idempotent, safe to run multiple times
   */
  static async accrueProfitsForAllUsers() {
    const maturedInvestments = await prisma.investment.findMany({
      where: {
        status: "Active",
        endDate: { lte: new Date() }, // Matured (endDate <= today)
      },
      include: { user: true },
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (const investment of maturedInvestments) {
      try {
        await this.accrueProfitForInvestment(investment, today);
      } catch (error) {
        logger.error({
          message: "Failed to accrue profit for investment",
          investmentId: investment.id,
          userId: investment.userId,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    logger.info({
      message: "Profit accrual completed for all matured investments",
      investmentCount: maturedInvestments.length,
    });
  }

  /**
   * Accrue profit for a specific investment on a given date
   */
  static async accrueProfitForInvestment(investment: any, accrualDate: Date) {
    // Skip if already accrued for this investment
    const existingAccrual = await prisma.transaction.findFirst({
      where: {
        userId: investment.userId,
        type: "roi",
        description: {
          contains: `Investment #${investment.id}`,
        },
      },
    });

    if (existingAccrual) return;

    // Compute ROI dynamically
    const roi = getROI(investment.planName);
    const totalProfit = investment.amount * roi;

    if (totalProfit <= 0) return;

    // Accrue profit atomically
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.user.update({
        where: { id: investment.userId },
        data: {
          totalEarn: { increment: totalProfit },
          mainBalance: { increment: totalProfit },
        },
      });

      await tx.transaction.create({
        data: {
          userId: investment.userId,
          type: "roi",
          amount: totalProfit,
          description: `Total ROI for Investment #${investment.id} at maturity`,
          status: "Success",
        },
      });
    });

    // Send notification for ROI accrual
    try {
      await NotificationService.notifyProfitAccrued(investment.userId, totalProfit, `Investment #${investment.id}`);
    } catch (notificationError) {
      console.error("Failed to send ROI notification:", notificationError);
      // Don't fail the entire operation if notification fails
    }

    logger.info({
      message: "Profit accrued for investment",
      investmentId: investment.id,
      userId: investment.userId,
      totalProfit,
      accrualDate: accrualDate.toISOString().split("T")[0],
    });
  }

  /**
   * Get total earned profits for a user
   */
  static async getUserTotalEarn(userId: number): Promise<number> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { totalEarn: true },
    });

    if (!user) throw new AppError("User not found", 404);

    return user.totalEarn;
  }

  /**
   * Calculate potential profit for an investment (preview)
   */
  static calculatePotentialProfit(amount: number, plan: string, days: number): number {
    const roi = getROI(plan);
    // Total profit at maturity: Investment Amount × (ROI / 100)
    const totalProfit = amount * roi;
    // For preview, prorate based on days elapsed (but task says no pro-rating, so return total if at maturity)
    if (days >= 30) return totalProfit;
    return 0; // No profit until maturity
  }
}
