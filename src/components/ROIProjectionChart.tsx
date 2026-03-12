'use client';

import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useDashboard } from '@/lib/hooks/useDashboard';
import { useAuth } from '@/components/context/AuthContext';

export default function ROIProjectionChart() {
  const { user } = useAuth();
  const { dashboard, isLoading, isError } = useDashboard(user?.email || null);

  const projectionData = useMemo(() => {
    if (!dashboard?.activeInvestments || dashboard.activeInvestments.length === 0) {
      return [];
    }

    const data = [];
    const days = 30;

    for (let day = 1; day <= days; day++) {
      let cumulativeEarnings = 0;

      dashboard.activeInvestments.forEach((investment) => {
        // Calculate daily profit based on profitService logic
        const dailyProfit = (investment.amount * investment.roi) / investment.durationDays;
        // Accumulate earnings for this day
        cumulativeEarnings += dailyProfit * day;
      });

      data.push({
        day: `Day ${day}`,
        earnings: cumulativeEarnings,
        dayNumber: day,
      });
    }

    return data;
  }, [dashboard?.activeInvestments]);

  if (isLoading) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <div className="animate-pulse">
          <div className="h-4 bg-neutral-700 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-neutral-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError || !dashboard) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-2 text-neutral-300">ROI Projection</h3>
        <div className="text-red-400 text-xs">Failed to load projection data</div>
      </div>
    );
  }

  if (projectionData.length === 0) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-2 text-neutral-300">ROI Projection</h3>
        <div className="text-neutral-500 text-xs">No active investments to project</div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
      <h3 className="text-sm mb-4 text-neutral-300">ROI Projection (30 Days)</h3>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={projectionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="day"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 10 }}
            interval="preserveStartEnd"
            tickFormatter={(value) => value.replace('Day ', '')}
          />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 10 }}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#E5E7EB',
            }}
            labelFormatter={(label) => `Day ${label.replace('Day ', '')}`}
            formatter={(value: any) => [
              `$${typeof value === 'number' ? value.toFixed(2) : value}`,
              'Projected Earnings',
            ]}
          />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#10B981"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#10B981' }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-2 text-xs text-neutral-500">
        Based on {dashboard.activeInvestments.length} active investment
        {dashboard.activeInvestments.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
