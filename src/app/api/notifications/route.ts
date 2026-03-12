import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/notifications?user=user@example.com
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("user");

    if (!userEmail) {
      return NextResponse.json({ error: "User email required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const notifications = await prisma.notification.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 50, // Limit to last 50 notifications
    });

    const unreadCount = await prisma.notification.count({
      where: { userId: user.id, isRead: false },
    });

    return NextResponse.json({
      notifications,
      unreadCount,
    });
  } catch (err) {
    console.error("GET /api/notifications error:", err);
    return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 });
  }
}
