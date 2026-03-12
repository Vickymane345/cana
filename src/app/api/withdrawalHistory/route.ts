import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Accept BOTH email and userId parameters
    const email = searchParams.get("email");
    const userId = searchParams.get("userId");

    console.log('📊 Withdrawal History request:', { email, userId });

    // Validate that at least one identifier is provided
    if (!email && !userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Either email or userId is required"
        },
        { status: 400 }
      );
    }

    let whereClause: any = { status: { not: "Pending" } };

    if (userId) {
      // Use userId if provided
      const userIdNum = Number(userId);
      if (isNaN(userIdNum)) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid User ID format"
          },
          { status: 400 }
        );
      }
      whereClause.userId = userIdNum;
    } else if (email) {
      // Find user by email to get their userId
      const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true }
      });

      if (!user) {
        return NextResponse.json(
          {
            success: false,
            message: "User not found"
          },
          { status: 404 }
        );
      }
      whereClause.userId = user.id;
    }

    const withdrawals = await prisma.withdrawal.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true
          }
        },
      },
      orderBy: { createdAt: "desc" },
    });

    console.log(`✅ Found ${withdrawals.length} completed withdrawals`);

    return NextResponse.json({
      success: true,
      data: withdrawals
    });

  } catch (error) {
    console.error("❌ Error fetching withdrawal history:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch withdrawal history",
        error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
