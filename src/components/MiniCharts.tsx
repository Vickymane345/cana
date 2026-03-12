'use client';

import React from 'react';

import { useAuth } from '@/components/context/AuthContext';
import { useDashboard } from '@/lib/hooks/useDashboard';
import styles from './MiniCharts.module.css';

const MiniCharts: React.FC = () => {
  const { user } = useAuth();
  const { dashboard } = useDashboard(user?.email || null);

  const monthlyData = dashboard?.monthlyData || [];

  // Calculate max value for scaling
  const maxValue = Math.max(
    ...monthlyData.map((d) => Math.max(d.deposits, d.invest, d.roi, d.interest)),
    1
  );

  // Get last 6 months of data
  const recentData = monthlyData.slice(-6);

  return (
    <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Activity Trends</h3>

      <div className="space-y-4">
        {/* Bar Chart */}
        <div className="space-y-2">
          <h4 className="text-sm text-gray-400">Monthly Activity</h4>
          <div className="flex items-end gap-2 h-32">
            {recentData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col-reverse gap-1 h-full">
                  {/* ROI Bar */}
                  <div
                    className={`bg-emerald-500 ${styles.bar}`}
                    style={
                      { '--bar-height': `${(data.roi / maxValue) * 100}%` } as React.CSSProperties
                    }
                    title={`ROI: $${data.roi}`}
                  ></div>
                  {/* Interest Bar */}
                  <div
                    className={`bg-purple-500 ${styles.bar}`}
                    style={
                      {
                        '--bar-height': `${(data.interest / maxValue) * 100}%`,
                      } as React.CSSProperties
                    }
                    title={`Interest: $${data.interest}`}
                  ></div>
                  {/* Invest Bar */}
                  <div
                    className={`bg-blue-500 ${styles.bar}`}
                    style={
                      {
                        '--bar-height': `${(data.invest / maxValue) * 100}%`,
                      } as React.CSSProperties
                    }
                    title={`Investments: $${data.invest}`}
                  ></div>
                  {/* Deposits Bar */}
                  <div
                    className={`bg-green-500 ${styles.bar}`}
                    style={
                      {
                        '--bar-height': `${(data.deposits / maxValue) * 100}%`,
                      } as React.CSSProperties
                    }
                    title={`Deposits: $${data.deposits}`}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-2">{data.month}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-xs text-gray-400">Deposits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-xs text-gray-400">Investments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-xs text-gray-400">ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span className="text-xs text-gray-400">Interest</span>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">
              ${recentData.reduce((sum, d) => sum + d.deposits, 0).toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">Total Deposits</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">
              ${recentData.reduce((sum, d) => sum + d.invest, 0).toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">Total Investments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCharts;
