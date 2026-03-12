import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/middleware";
import { logApiResponse } from "@/lib/logger";
import { INVESTMENT_PLANS, getPlanNames } from "@/lib/config/plans";

async function getPortfolioHandler(req: NextRequest, authenticatedUser: any) {
  const startTime = Date.now();

  try {
    const userId = parseInt(authenticatedUser.userId, 10);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        mainBalance: true,
        investmentBalance: true,
        totalDeposit: true,
        totalEarn: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const investments = await prisma.investment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    const withdrawals = await prisma.withdrawal.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    /* ---------------------------------------------
       GROUPING
    ---------------------------------------------- */
    const activeInvestments = investments.filter(inv => inv.status === "Active");
    const completedInvestments = investments.filter(inv => inv.status === "Completed");

    /* ---------------------------------------------
       SUMMARY CALCULATIONS
    ---------------------------------------------- */
    const totalInvested = investments.reduce(
      (sum, inv) => sum + Number(inv.amount),
      0
    );

    const activeCount = activeInvestments.length;

    // ROI for completed investments
    const totalRoiEarned = completedInvestments.reduce(
      (sum, inv) => sum + Number(inv.amount) * Number(inv.roi),
      0
    );

    // NEXT MATURITY
    const nextMaturity =
      activeInvestments.length > 0
        ? activeInvestments
            .map(inv => new Date(inv.maturityDate))
            .sort((a, b) => a.getTime() - b.getTime())[0]
        : null;

    // Pending withdrawals
    const pendingPayouts = withdrawals
      .filter(w => w.status === "Pending")
      .reduce((sum, w) => sum + Number(w.amount), 0);

    /* ---------------------------------------------
       GROUP BY PLAN USING CONFIG
    ---------------------------------------------- */
    const groupByPlan = (list: typeof investments) => {
      const grouped: Record<string, typeof investments> = {};
      const planNames = getPlanNames();

      planNames.forEach((planName) => {
        const planCfg = INVESTMENT_PLANS[planName];
        const key = planCfg.displayName;

        grouped[key] = list.filter(
          (inv) => inv.planName?.toLowerCase() === planName
        );
      });

      return grouped;
    };

    const activeByPlan = groupByPlan(activeInvestments);
    const completedByPlan = groupByPlan(completedInvestments);

    /* ---------------------------------------------
       RETURN PAYLOAD
    ---------------------------------------------- */
    const response = NextResponse.json({
      summary: {
        mainBalance: Number(user.mainBalance || 0),
        interestBalance: Number(user.investmentBalance || 0),
        totalDeposit: Number(user.totalDeposit || 0),
        totalEarned: Number(user.totalEarn || 0),
        totalInvested,
        activeInvestments: activeCount,
        totalRoiEarned,
        nextMaturityDate: nextMaturity?.toISOString() || null,
        pendingPayouts,
      },
      activeInvestments: activeByPlan,
      completedInvestments: completedByPlan,
      allInvestments: investments,
    });

    logApiResponse(req.method, req.url, 200, Date.now() - startTime, userId);
    return response;
  } catch (error) {
    console.error("PORTFOLIO API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}

export const GET = withAuth(getPortfolioHandler);
