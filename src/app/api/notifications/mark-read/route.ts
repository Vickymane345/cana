import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

// POST /api/notifications/mark-read
// Body: { user: "user@example.com", notificationIds?: [1, 2, 3] }
// If no notificationIds provided, marks all as read
export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (err) {
      console.error('JSON parse error:', err);
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    console.log('Body:', body);
    const { user: userEmail, notificationIds } = body;

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

    const whereClause = notificationIds
      ? {
          userId: user.id,
          id: { in: notificationIds },
        }
      : {
          userId: user.id,
          isRead: false,
        };

    const result = await prisma.notification.updateMany({
      where: whereClause,
      data: { isRead: true },
    });

    return NextResponse.json({
      success: true,
      markedAsRead: result.count,
    });
  } catch (err) {
    console.error("POST /api/notifications/mark-read error:", err);
    return NextResponse.json({ error: "Failed to mark notifications as read" }, { status: 500 });
  }
}
