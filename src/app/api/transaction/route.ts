import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type {
  Deposit,
  Withdrawal,
  Investment,
  Transaction,
} from "@prisma/client";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userIdParam = searchParams.get("userId");
    const userId =
      userIdParam && !isNaN(Number(userIdParam))
        ? Number(userIdParam)
        : undefined;

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Missing or invalid userId" },
        { status: 400 }
      );
    }

    // Transactions
    const transactions: Transaction[] = await prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    // Deposits
    const deposits: Deposit[] = await prisma.deposit.findMany({
      where: { userId, status: { not: "Pending" } },
      orderBy: { createdAt: "desc" },
    });

    // Withdrawals
    const withdrawals: Withdrawal[] = await prisma.withdrawal.findMany({
      where: { userId, status: { not: "Pending" } },
      orderBy: { createdAt: "desc" },
    });

    // Investments (typed manually because of select)
    const investments: {
      id: number;
      planName: string;
      amount: number;
      roi: number | null;
      duration: string | null;
      durationDays: number | null;
      status: string;
      startDate: Date | null;
      endDate: Date | null;
      createdAt: Date;
    }[] = await prisma.investment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        planName: true,
        amount: true,
        roi: true,
        duration: true,
        durationDays: true,
        status: true,
        startDate: true,
        endDate: true,
        createdAt: true,
      },
    });

    // Deposit History
    const depositHistory = deposits.map((d: Deposit) => ({
      id: d.id,
      amount: d.amount,
      status: d.status,
      createdAt: d.createdAt,
      type: "Deposit",
      currency: d.currency,
      address: d.address,
    }));

    // Filter withdrawal transactions
    const transactionWithdrawals = transactions.filter(
      (tx: Transaction) => tx.type?.toLowerCase() === "withdrawal"
    );

    // Withdrawal history
    const withdrawalRecords = withdrawals.map((w: Withdrawal) => ({
      id: w.id,
      amount: w.amount,
      status: w.status,
      createdAt: w.createdAt,
      type: "withdrawal",
      description: `Withdrawal to ${w.address || "wallet"}`,
      paymentMethod: w.currency || "crypto",
    }));

    const withdrawalHistory = [...transactionWithdrawals, ...withdrawalRecords].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    // Investment history
    const investmentHistory = investments.map((inv) => ({
      id: inv.id,
      planName: inv.planName,
      amount: inv.amount,
      roi: inv.roi,
      duration: inv.durationDays === 30 ? '1 month' : `${inv.durationDays} days`,
      status: inv.status,
      startDate: inv.startDate,
      endDate: inv.endDate,
      createdAt: inv.createdAt,
    }));

    return NextResponse.json(
      {
        success: true,
        depositHistory,
        withdrawalHistory,
        investmentHistory,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Transaction fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch transactions",
        depositHistory: [],
        withdrawalHistory: [],
        investmentHistory: [],
      },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
