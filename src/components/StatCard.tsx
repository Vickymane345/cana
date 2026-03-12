import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accentColor?: string;
  change?: number;
  changeLabel?: string;
  sparklineData?: number[];
}

export default function StatCard({
  title,
  value,
  icon,
  accentColor = 'text-green-400',
  change,
  changeLabel,
  sparklineData,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const changeColor = isPositive ? 'text-green-400' : 'text-red-400';
  const changeSymbol = isPositive ? '+' : '';

  // Generate sample sparkline data if not provided
  const defaultSparkline = sparklineData || Array.from({ length: 7 }, () => Math.random() * 100);
  const sparklineChartData = defaultSparkline.map((val, idx) => ({ value: val, index: idx }));

  return (
    <div className="bg-[#0f274f] hover:bg-[#123065] transition-all duration-300 p-6 rounded-2xl shadow-lg flex flex-col justify-between min-h-[140px] w-full border border-slate-700/50">
      <div className="flex items-start justify-between mb-4">
        <div className={`text-2xl ${accentColor}`}>{icon}</div>
        {sparklineData && (
          <div className="w-16 h-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineChartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={isPositive ? '#10b981' : '#ef4444'}
                  strokeWidth={1.5}
                  dot={false}
                  activeDot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl sm:text-3xl font-bold text-white mb-2">{value}</p>
        {change !== undefined && (
          <div className="flex items-center gap-1">
            <span className={`text-sm font-medium ${changeColor}`}>
              {changeSymbol}
              {change.toFixed(1)}%
            </span>
            {changeLabel && <span className="text-xs text-slate-500">{changeLabel}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
