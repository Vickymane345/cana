import { prisma } from "@/lib/prisma";
import { logApiRequest, logApiResponse, logError } from "@/lib/logger";
import { INVESTMENT_PLANS, getPlanNames } from "@/lib/config/plans";
import { AppError } from "@/lib/errorHandler";

export class PortfolioService {
  static async getPortfolioData(userId: number, page: number = 1, limit: number = 50) {
    const startTime = Date.now();

    try {
      logApiRequest("GET", `/api/portfolio`, { userId, page, limit });

      // Fetch investments with pagination
      const investments = await prisma.investment.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      });

      // Fetch withdrawals (no pagination needed for summary)
      const withdrawals = await prisma.withdrawal.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });

      // Split investments
      const activeInvestments = investments.filter(inv => inv.status === "Active");
      const completedInvestments = investments.filter(inv => inv.status === "Completed");

      // Total invested
      const totalInvested = investments.reduce(
        (sum, inv) => sum + Number(inv.amount),
        0
      );

      const activeCount = activeInvestments.length;

      // Earned ROI calculation
      const now = new Date();
      let totalRoiEarned = completedInvestments.reduce(
        (sum, inv) => sum + Number(inv.roi),
        0
      );

      activeInvestments.forEach(inv => {
        const start = new Date(inv.startDate);
        const maturity = new Date(inv.maturityDate);

        const totalDays =
          (maturity.getTime() - start.getTime()) /
          (1000 * 60 * 60 * 24);

        const daysPassed =
          (now.getTime() - start.getTime()) /
          (1000 * 60 * 60 * 24);

        const progress =
          totalDays > 0 ? Math.min(daysPassed / totalDays, 1) : 0;

        totalRoiEarned += Number(inv.roi) * progress;
      });

      // Next maturity date
      const nextMaturity =
        activeInvestments.length > 0
          ? activeInvestments
              .map(inv => new Date(inv.maturityDate))
              .sort((a, b) => a.getTime() - b.getTime())[0]
          : null;

      // Only count PENDING withdrawals
      const pendingPayouts = withdrawals
        .filter(w => w.status === "Pending")
        .reduce(
          (sum, w) => sum + Number(w.amount),
          0
        );

      // Group by plan dynamically
      const groupByPlan = (list: typeof investments) => {
        const grouped: Record<string, typeof investments> = {};
        const planNames = getPlanNames();

        planNames.forEach(planName => {
          const plan = INVESTMENT_PLANS[planName];
          grouped[plan.displayName] = list.filter(
            inv => inv.planName?.toLowerCase() === planName
          );
        });

        return grouped;
      };

      const activeByPlan = groupByPlan(activeInvestments);
      const completedByPlan = groupByPlan(completedInvestments);

      const result = {
        summary: {
          totalInvested,
          activeInvestments: activeCount,
          totalRoiEarned,
          nextMaturityDate: nextMaturity?.toISOString() || null,
          pendingPayouts,
        },
        activeInvestments: activeByPlan,
        completedInvestments: completedByPlan,
      };

      logApiResponse("GET", `/api/portfolio`, 200, Date.now() - startTime, userId);
      return result;

    } catch (error) {
      logError("Portfolio service error", {
        userId,
        page,
        limit,
        error: error instanceof Error ? error.message : "Unknown error",
      });
      throw new AppError("Failed to fetch portfolio data", 500);
    }
  }
}
