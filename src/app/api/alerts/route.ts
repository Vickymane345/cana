import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const alerts = await prisma.priceAlert.findMany({
      where: {
        userId: parseInt(session.user.id),
        active: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(alerts);
  } catch (error) {
    console.error('Error fetching alerts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch alerts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { asset, alertType, value, condition } = body;

    // Validation
    if (!asset || !alertType || value === undefined || !condition) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (asset !== 'BTC') {
      return NextResponse.json(
        { error: 'Only BTC alerts supported for now' },
        { status: 400 }
      );
    }

    if (!['TARGET', 'VOLATILITY'].includes(alertType)) {
      return NextResponse.json(
        { error: 'Invalid alert type' },
        { status: 400 }
      );
    }

    if (alertType === 'TARGET' && !['ABOVE', 'BELOW'].includes(condition)) {
      return NextResponse.json(
        { error: 'Invalid condition for target alert' },
        { status: 400 }
      );
    }

    const alert = await prisma.priceAlert.create({
      data: {
        userId: parseInt(session.user.id),
        asset,
        alertType,
        value: parseFloat(value),
        condition,
      },
    });

    return NextResponse.json(alert, { status: 201 });
  } catch (error) {
    console.error('Error creating alert:', error);
    return NextResponse.json(
      { error: 'Failed to create alert' },
      { status: 500 }
    );
  }
}
