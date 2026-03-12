import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

// GET /api/admin/pending - Get all pending deposits and withdrawals for admin
export async function GET(req: Request) {
  try {
    // Get all pending deposits
    const pendingDeposits = await prisma.deposit.findMany({
      where: { status: 'Pending' },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Get all pending withdrawals
    const pendingWithdrawals = await prisma.withdrawal.findMany({
      where: { status: 'Pending' },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Get new user signups (users created in last 24 hours)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const newSignups = await prisma.user.findMany({
      where: {
        createdAt: { gte: yesterday },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        phone: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      pendingDeposits,
      pendingWithdrawals,
      newSignups,
      counts: {
        deposits: pendingDeposits.length,
        withdrawals: pendingWithdrawals.length,
        newSignups: newSignups.length,
      },
    });
  } catch (error) {
    console.error('Error fetching pending items:', error);
    return NextResponse.json({ error: 'Failed to fetch pending items' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
