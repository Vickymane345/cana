import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Deposit } from "@prisma/client";

export const runtime = 'nodejs';
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("user");
    if (!userEmail) return NextResponse.json({ pendingDeposits: [], depositHistory: [] }, { status: 200 });

    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (!user) return NextResponse.json({ pendingDeposits: [], depositHistory: [] }, { status: 200 });

    const deposits: Deposit[] = await prisma.deposit.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    const pendingDeposits = deposits.filter((d: Deposit) => d.status === "Pending");
    const depositHistory = deposits.filter((d: Deposit) => d.status !== "Pending");

    return NextResponse.json({ pendingDeposits, depositHistory });
  } catch (err) {
    console.error("GET /deposits error:", err);
    return NextResponse.json({ pendingDeposits: [], depositHistory: [] }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
