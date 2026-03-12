'use client';

import { useMemo } from 'react';
import { useDashboard } from '@/lib/hooks/useDashboard';
import { useAuth } from '@/components/context/AuthContext';

export default function PortfolioDonut() {
  const { user } = useAuth();
  const { dashboard, isLoading, isError } = useDashboard(user?.email ?? null);

  const { allocations, totalValue } = useMemo(() => {
    if (!dashboard) {
      return { allocations: [], totalValue: 0 };
    }

    // Flatten activeInvestments object to array
    const allActiveInvestments = Object.values(dashboard.activeInvestments || {}).flat();

    // Calculate total portfolio value
    const cashAmount = dashboard.mainBalance || 0;
    const investedAmount = allActiveInvestments.reduce((sum, inv) => sum + (inv.amount || 0), 0);
    const total = cashAmount + investedAmount;

    if (total === 0) {
      return {
        allocations: [{ name: 'Cash', percentage: 100, color: 'bg-gray-500' }],
        totalValue: 0,
      };
    }

    // Group investments by plan name
    const planGroups: Record<string, number> = {};
    allActiveInvestments.forEach((inv) => {
      const planName = (inv.planName || 'Other').toLowerCase();
      planGroups[planName] = (planGroups[planName] || 0) + (inv.amount || 0);
    });

    // Define colors for each plan
    const planColors: Record<string, string> = {
      mining: 'bg-blue-500',
      premium: 'bg-green-500',
      gold: 'bg-yellow-500',
      other: 'bg-purple-500',
    };

    const allocations: {
      name: string;
      percentage: number;
      color: string;
    }[] = [];

    // Add investment allocations
    Object.entries(planGroups).forEach(([planName, amount]) => {
      const percentage = Math.round((amount / total) * 100);
      if (percentage > 0) {
        allocations.push({
          name: planName.charAt(0).toUpperCase() + planName.slice(1),
          percentage,
          color: planColors[planName.toLowerCase()] || planColors.other,
        });
      }
    });

    // Add cash allocation
    const cashPercentage = Math.round((cashAmount / total) * 100);
    if (cashPercentage > 0) {
      allocations.push({
        name: 'Cash',
        percentage: cashPercentage,
        color: 'bg-gray-500',
      });
    }

    return { allocations, totalValue: total };
  }, [dashboard]);

  // ✅ Proper loading state
  if (isLoading) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-3 font-semibold">Portfolio Allocation</h3>
        <div className="text-neutral-500 text-xs">Loading...</div>
      </div>
    );
  }

  // ✅ Only show error on real API failure
  if (isError) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-3 font-semibold">Portfolio Allocation</h3>
        <div className="text-red-400 text-xs">Failed to load portfolio data</div>
      </div>
    );
  }

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  // Tailwind -> hex map for conic-gradient
  const colorMap: Record<string, string> = {
    'bg-blue-500': '#3b82f6',
    'bg-green-500': '#22c55e',
    'bg-yellow-500': '#eab308',
    'bg-purple-500': '#a855f7',
    'bg-gray-500': '#6b7280',
  };

  // Build gradient stops
  const gradient = (() => {
    let current = 0;
    return allocations
      .map((item) => {
        const start = current;
        const end = start + item.percentage;
        current = end;
        return `${colorMap[item.color]} ${start}% ${end}%`;
      })
      .join(', ');
  })();

  return (
    <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
      <h3 className="text-sm mb-3 font-semibold">Portfolio Allocation</h3>

      <div className="space-y-3">
        {/* Donut chart */}
        <div className="relative w-20 h-20 mx-auto">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: gradient ? `conic-gradient(${gradient})` : '#333',
            }}
          ></div>

          {/* Inner cutout */}
          <div className="absolute inset-2 rounded-full bg-neutral-900"></div>

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white text-center leading-tight">
              {formatValue(totalValue)}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-1">
          {allocations.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                <span className="text-neutral-400">{item.name}</span>
              </div>
              <span className="text-white font-medium">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
