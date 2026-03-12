import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { NotificationService } from '@/lib/services/notificationService';

export async function GET(request: NextRequest) {
  try {
    // Fetch current BTC price
    const priceResponse = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
    );

    if (!priceResponse.ok) {
      console.error('Failed to fetch BTC price for alerts');
      return NextResponse.json({ error: 'Failed to fetch price data' }, { status: 500 });
    }

    const priceData = await priceResponse.json();
    const currentPrice = priceData.bitcoin.usd;
    const priceChange24h = priceData.bitcoin.usd_24h_change;

    // Get all active alerts
    const alerts = await prisma.priceAlert.findMany({
      where: {
        active: true,
        asset: 'BTC',
        triggeredAt: null,
      },
    });

    const triggeredAlerts: number[] = [];

    for (const alert of alerts) {
      let triggered = false;
      let message = '';

      if (alert.alertType === 'TARGET') {
        if (alert.condition === 'ABOVE' && currentPrice >= alert.value) {
          triggered = true;
          message = `BTC price has reached $${currentPrice.toLocaleString()} (above your target of $${alert.value.toLocaleString()})`;
        } else if (alert.condition === 'BELOW' && currentPrice <= alert.value) {
          triggered = true;
          message = `BTC price has dropped to $${currentPrice.toLocaleString()} (below your target of $${alert.value.toLocaleString()})`;
        }
      } else if (alert.alertType === 'VOLATILITY') {
        // Check if 24h change exceeds threshold
        if (Math.abs(priceChange24h) >= alert.value) {
          triggered = true;
          message = `BTC volatility alert: 24h change of ${priceChange24h.toFixed(2)}% (threshold: ${alert.value}%)`;
        }
      }

      if (triggered) {
        // Mark alert as triggered
        await prisma.priceAlert.update({
          where: { id: alert.id },
          data: {
            triggeredAt: new Date(),
            active: false,
          },
        });

        // Create in-app notification - using individual parameters
        await NotificationService.createNotification(
          alert.userId,
          'PRICE_ALERT',
          message,
          'info',
          alert.id
        );

        triggeredAlerts.push(alert.id);
      }
    }

    return NextResponse.json({
      checked: alerts.length,
      triggered: triggeredAlerts.length,
      currentPrice,
      priceChange24h,
    });
  } catch (error) {
    console.error('Error checking alerts:', error);
    return NextResponse.json(
      { error: 'Failed to check alerts' },
      { status: 500 }
    );
  }
}
