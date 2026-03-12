'use client';

import React from 'react';
import { useDashboard } from '@/lib/hooks/useDashboard';
import { useAuth } from '@/components/context/AuthContext';

const PortfolioHealth: React.FC = () => {
  const { user } = useAuth();
  const { dashboard } = useDashboard(user?.email ?? null);

  const mainBalance = dashboard?.mainBalance ?? 0;
  const investmentBalance = dashboard?.interestBalance ?? 0;
  const totalDeposit = dashboard?.totalDeposit ?? 0;
  const totalEarn = dashboard?.totalEarn ?? 0;

  const totalPortfolio = mainBalance + investmentBalance;

  const activePercentage = totalPortfolio > 0 ? (investmentBalance / totalPortfolio) * 100 : 0;

  const availablePercentage = totalPortfolio > 0 ? (mainBalance / totalPortfolio) * 100 : 0;

  const roiPercentage = totalDeposit > 0 ? ((totalEarn / totalDeposit) * 100).toFixed(1) : '0.0';

  const investmentRatio =
    totalDeposit > 0 ? ((investmentBalance / totalDeposit) * 100).toFixed(1) : '0.0';

  const healthScore = Math.round(
    Math.min(
      100,
      Math.max(
        0,
        Number(roiPercentage) * 0.5 +
          (totalDeposit > 0 ? (investmentBalance / totalDeposit) * 30 : 0) +
          (mainBalance > 0 ? 20 : 0)
      )
    )
  );

  const getHealthStatus = (score: number) => {
    if (score >= 80)
      return {
        status: 'Excellent',
        bgColor: 'bg-green-500',
      };
    if (score >= 60)
      return {
        status: 'Good',
        bgColor: 'bg-blue-500',
      };
    if (score >= 40)
      return {
        status: 'Fair',
        bgColor: 'bg-yellow-500',
      };
    return {
      status: 'Needs Attention',
      bgColor: 'bg-red-500',
    };
  };

  const healthInfo = getHealthStatus(healthScore);

  const createPieSlice = (percentage: number, color: string, offset = 0) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const dash = (percentage / 100) * circumference;
    const gap = circumference - dash;

    return (
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
    );
  };

  const donutOffset = -(activePercentage / 100) * (2 * Math.PI * 40);

  return (
    <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Portfolio Health</h3>

      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8" />

            {createPieSlice(activePercentage, '#3b82f6')}
            {createPieSlice(availablePercentage, '#10b981', donutOffset)}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{healthScore}</p>
              <p className="text-xs text-gray-400">Score</p>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-6">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${healthInfo.bgColor} text-white mb-2`}
          >
            {healthInfo.status}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Active Investments</span>
              <span className="text-sm text-blue-400">
                ${investmentBalance.toLocaleString()} ({Math.round(activePercentage)}%)
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Available Funds</span>
              <span className="text-sm text-green-400">
                ${mainBalance.toLocaleString()} ({Math.round(availablePercentage)}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-neutral-800">
        <h4 className="text-sm font-medium text-white">Health Factors</h4>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-800 rounded-lg p-3">
            <p className="text-xs text-gray-400">ROI Performance</p>
            <p className="text-lg font-semibold text-white">{roiPercentage}%</p>
          </div>

          <div className="bg-neutral-800 rounded-lg p-3">
            <p className="text-xs text-gray-400">Investment Ratio</p>
            <p className="text-lg font-semibold text-white">{investmentRatio}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHealth;
