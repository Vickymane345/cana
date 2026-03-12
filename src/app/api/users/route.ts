import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        phone: true,
        mainBalance: true,
        investmentBalance: true,
        totalEarn: true,
        totalDeposit: true,
        totalWithdrawals: true,
        roi: true,
        redeemedRoi: true,
        completed: true,
        interestBalance: true,
        rewardPoints: true,
        totalReferrals: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
