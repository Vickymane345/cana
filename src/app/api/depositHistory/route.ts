// src/app/api/depositHistory/route.ts - DEPRECATED: Use /api/deposits instead
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = 'nodejs';
export async function GET(req: Request)
{
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("user");
    if (!userEmail) return NextResponse.json({ depositHistory: [] }, { status: 200 });

    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (!user) return NextResponse.json({ depositHistory: [] }, { status: 200 });

    // Redirect to use the new /api/deposits endpoint
    const deposits = await prisma.deposit.findMany({
      where: { userId: user.id, status: { not: "Pending" } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ depositHistory: deposits });
  } catch (err) {
    console.error("GET /depositHistory error:", err);
    return NextResponse.json({ depositHistory: [] }, { status: 500 });
  }
}
export const dynamic = "force-dynamic";
