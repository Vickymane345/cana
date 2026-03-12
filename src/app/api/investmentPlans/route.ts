import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getROI } from "@/lib/validation";

export const runtime = "nodejs";

interface Plan {
  id: number;
  name: string;
  min: number;
  max: number;
  durationDays: number;
  roiPercent: number; // percentage expressed as decimal (0.30 = 30%)
}

const PLANS: Plan[] = [
  { id: 1, name: "mining", min: 1000, max: 20000, durationDays: 30, roiPercent: 0.30 },
  { id: 2, name: "premium", min: 20000, max: 100000, durationDays: 30, roiPercent: 0.40 },
  { id: 3, name: "gold", min: 100000, max: 1000000, durationDays: 30, roiPercent: 0.55 },
];

interface InvestmentRequestBody {
  user: string; // email
  plan: string; // plan name
  amount: number;
}

export async function POST(req: Request) {
  try {
    const data: InvestmentRequestBody = await req.json();
    const { user, plan: planName, amount } = data;

    // Validate body
    if (!user || !planName || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    // Find plan
    const plan = PLANS.find(
      (p) => p.name.toLowerCase() === planName.toLowerCase()
    );

    if (!plan) {
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 });
    }

    // Check amount range
    if (amount < plan.min || amount > plan.max) {
      return NextResponse.json(
        {
          error: `Investment for ${plan.name} must be between $${plan.min} – $${plan.max}`,
        },
        { status: 400 }
      );
    }

    // Lookup user
    const foundUser = await prisma.user.findUnique({
      where: { email: user },
      select: { id: true, mainBalance: true, investmentBalance: true },
    });

    if (!foundUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if ((foundUser.mainBalance ?? 0) < amount) {
      return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
    }

    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + plan.durationDays);

    const maturityDate = new Date(startDate);
    maturityDate.setDate(maturityDate.getDate() + plan.durationDays);

    // ⭐ FIXED: Use plan ROI, not getROI(amount)
const roi = plan.roiPercent;

    // Create investment via transaction
    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update balances
      const updatedUser = await tx.user.update({
        where: { id: foundUser.id },
        data: {
          mainBalance: { decrement: amount },
          investmentBalance: { increment: amount },
        },
      });

      // Create investment record
      const newInvestment = await tx.investment.create({
        data: {
          userId: foundUser.id,
          planId: plan.id,
          planName: plan.name,
          amount,
          roi,
          duration: plan.durationDays.toString(),
          durationDays: plan.durationDays,
          status: "Active",
          startDate,
          endDate,
          maturityDate,
          createdAt: startDate,
        },
      });

      // Log transaction
      await tx.transaction.create({
        data: {
          userId: foundUser.id,
          amount,
          type: "invest",
          status: "Completed",
          paymentMethod: "Balance",
          transactionRef: `INV-${Date.now()}`,
          description: `Investment in ${plan.name} plan`,
          createdAt: new Date(),
        },
      });

      return { updatedUser, newInvestment };
    });

    return NextResponse.json({
      success: true,
      message: `Investment in ${plan.name} successful.`,
      updatedBalances: {
        mainBalance: result.updatedUser.mainBalance,
        investmentBalance: result.updatedUser.investmentBalance ?? 0,
      },
      investment: result.newInvestment,
    });
  } catch (err) {
    console.error("Error creating investment:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while creating investment." },
      { status: 500 }
    );
  }
}
