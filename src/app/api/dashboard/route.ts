import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ProfitService } from "@/lib/services/profitService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getDefaultStats() {
  return {
    mainBalance: 0,
    interestBalance: 0,
    totalDeposit: 0,
    totalEarn: 0,
    stats: {
      investCompleted: 0,
      roiSpeed: 0,
      roiRedeemed: 0,
    },
    pendingDeposits: [],
    depositHistory: [],
    monthlyData: [],
  };
}

// ====================================
// GET — FETCH DASHBOARD DATA
// ====================================
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("user");

    if (!userEmail)
      return NextResponse.json({ error: "User email required" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (!user) return NextResponse.json(getDefaultStats());

    const [investments, transactions, withdrawals, deposits] = await Promise.all([
      prisma.investment.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),
      prisma.transaction.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),

      // NEW Adding pending withdrawals to dashboard data
      prisma.withdrawal.findMany({where: {userId: user.id}, orderBy: {createdAt: 'desc'}}),

      // NEW Adding pending deposits to dashboard data
      prisma.deposit.findMany({where: {userId: user.id}, orderBy: {createdAt: 'desc'}})
    ]);

    // Filter active investments for ROI projection
    const activeInvestments = investments.filter(inv => inv.status === "Active");

    // NEW Filtering withdrawals and deposits for pending status
    const pendingWithdrawals = withdrawals.filter((w) => w.status == "Pending");
    const pendingDeposits = deposits.filter((d) => d.status == "Pending");

    // NEW Calculate maturing investments (next 7 days)
    const now = new Date();
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const maturingInvestments = investments.filter((inv) =>
      inv.maturityDate && inv.maturityDate <= sevenDaysFromNow && inv.status === "Active"
    );

    // NEW Calculate recent ROI credited (last 24 hours)
    const oneDayAgo = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);
    const recentROI = transactions.filter((t) =>
      t.type === "roi" && t.createdAt >= oneDayAgo && t.status === "Success"
    );
    const recentROITotal = recentROI.reduce((sum, t) => sum + Number(t.amount || 0), 0);

    // NEW Calculate recent activities (last 10 transactions)
    const recentActivities = transactions
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 10)
      .map((t) => ({
        id: t.id,
        type: t.type,
        amount: Number(t.amount || 0),
        description: t.description,
        status: t.status,
        createdAt: t.createdAt,
      }));

    // -----------------------------
    // 📊 Build Monthly Chart
    // -----------------------------
    const monthlyMap: Record<string, { deposits: number; invest: number; roi: number; interest: number }> = {};

    const addToMonth = (date: Date, key: keyof (typeof monthlyMap)[string], value: number) => {
      const month = date.toLocaleString("default", { month: "short" });
      monthlyMap[month] = monthlyMap[month] || { deposits: 0, invest: 0, roi: 0, interest: 0 };
      monthlyMap[month][key] += value;
    };

    // Note: Deposit data is now handled by /api/deposits endpoint
    investments.forEach((i) => addToMonth(i.createdAt, "invest", Number(i.amount || 0)));

    transactions.forEach((t) => {
      if (t.type === "roi") addToMonth(t.createdAt, "roi", Number(t.amount || 0));
      if (t.type === "interest") addToMonth(t.createdAt, "interest", Number(t.amount || 0));
    });

    const monthlyData = Object.entries(monthlyMap).map(([month, values]) => ({
      month,
      ...values,
    }));

    // Accrue any pending profits before returning dashboard data
    await ProfitService.accrueProfitsForAllUsers();

    const result = {
      mainBalance: user.mainBalance || 0,
      interestBalance: user.investmentBalance || 0,
      totalDeposit: user.totalDeposit || 0,
      totalEarn: user.totalEarn || 0,
      roiCompleted: Number(user.roi) || 0,
      roiSpeed: user.speedInvest || 0,
      roiRedeemed: user.redeemedRoi || 0,
      rewardPoints: user.rewardPoints || 0,
      stats: {
        investCompleted: user.completed || 0,
        roiSpeed: user.speedInvest || 0,
        roiRedeemed: user.redeemedRoi || 0,
      },
      activeInvestmentsCount: activeInvestments.length,
      // Note: Deposit data moved to /api/deposits endpoint
      // NEW added "pendingWithdrawals" to DashboardData
      pendingWithdrawals,
      pendingDeposits,
      maturingInvestments,
      activeInvestments,
      recentROITotal,
      recentActivities,
      monthlyData,
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error("GET /api/dashboard error:", err);
    return NextResponse.json({ error: "Failed to fetch dashboard" }, { status: 500 });
  }
}

// ====================================
// POST — HANDLE ACTIONS (deposit, withdraw, invest, roi, interest)
// ====================================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user, amount, address, currency, type } = body;

    if (!user) return NextResponse.json({ error: "No user provided" }, { status: 400 });
    if (!amount || amount <= 0)
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });

    const userRecord = await prisma.user.upsert({
      where: { email: user },
      update: {},
      create: {
        email: user,
        firstName: "",
        lastName: "",
        username: user.split("@")[0],
        password: "",
      },
    });

    // =======================
    // 💰 Deposit
    // =======================
    if (type === "deposit") {
      if (!address || !currency)
        return NextResponse.json({ error: "Address and currency required" }, { status: 400 });

      const deposit = await prisma.deposit.create({
        data: { userId: userRecord.id, amount, address, currency, status: "Pending" },
      });

      await prisma.transaction.create({
        data: {
          userId: userRecord.id,
          type: "deposit",
          amount,
          description: `Deposit: ${currency}`,
          status: "Pending",
        },
      });

      return NextResponse.json({ success: true, deposit });
    }

    // =======================
    // 💸 Withdraw
    // =======================
    if (type === "withdraw") {
      if (userRecord.mainBalance < amount)
        return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });

      const withdrawal = await prisma.withdrawal.create({
        data: { userId: userRecord.id, amount, status: "Pending" },
      });

      await prisma.transaction.create({
        data: {
          userId: userRecord.id,
          type: "withdraw",
          amount,
          description: "User withdrawal request",
          status: "Pending",
        },
      });

      await prisma.user.update({
        where: { id: userRecord.id },
        data: { mainBalance: { decrement: amount } },
      });

      return NextResponse.json({ success: true, withdrawal });
    }

    // =======================
    // 📈 Invest
    // =======================
    if (type === "invest") {
      if (userRecord.mainBalance < amount)
        return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });

      const { planId, planName, roi, duration, durationDays } = body;

      if (!planId || !planName || roi === undefined || !duration || !durationDays)
        return NextResponse.json({ error: "Plan details required for investment" }, { status: 400 });

      const investment = await prisma.investment.create({
        data: {
          userId: userRecord.id,
          planName,
          planId,
          roi,
          duration,
          durationDays,
          amount,
          status: "Active",
          startDate: new Date(),
          endDate: new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000),
          maturityDate: new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000),
          createdAt: new Date(),
        },
      });

      await prisma.transaction.create({
        data: {
          userId: userRecord.id,
          type: "invest",
          amount,
          description: `Investment #${investment.id}`,
          status: "Success",
        },
      });

      await prisma.user.update({
        where: { id: userRecord.id },
        data: {
          mainBalance: { decrement: amount },
          investmentBalance: { increment: amount },
          totalDeposit: { increment: amount },
        },
      });

      return NextResponse.json({ success: true, investment });
    }

    // =======================
    // 💵 ROI or Interest update
    // =======================
    if (type === "roi" || type === "interest") {
      await prisma.transaction.create({
        data: {
          userId: userRecord.id,
          type,
          amount,
          description: `${type.toUpperCase()} credit`,
          status: "Success",
        },
      });

      await prisma.user.update({
        where: { id: userRecord.id },
        data: {
          mainBalance: { increment: amount },
          totalEarn: { increment: amount },
        },
      });

      return NextResponse.json({ success: true, type, amount });
    }

    // Invalid type
    return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
  } catch (err) {
    console.error("POST /api/dashboard error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
