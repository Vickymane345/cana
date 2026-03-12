import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: paramId } = await params;
    const alertId = parseInt(paramId);
    if (isNaN(alertId)) {
      return NextResponse.json({ error: 'Invalid alert ID' }, { status: 400 });
    }

    // Check if alert belongs to user
    const alert = await prisma.priceAlert.findFirst({
      where: {
        id: alertId,
        userId: parseInt(session.user.id),
      },
    });

    if (!alert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    await prisma.priceAlert.delete({
      where: { id: alertId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting alert:', error);
    return NextResponse.json(
      { error: 'Failed to delete alert' },
      { status: 500 }
    );
  }
}
