'use client';

import { useState } from 'react';
import { useMarketIndex, getAllPriceChanges, useHistoricalVolatility } from '@/lib/hooks/useMarketIndex';
import {
  calculateMarketVolatility,
  calculateVolatility,
  getVolatilityColor,
  getVolatilityLabel,
  getVolatilityMessage,
} from '@/lib/utils/marketCalculations';

interface VolatilityMeterProps {
  useHistorical?: boolean;
  asset?: string;
  timeframe?: string;
}

export default function VolatilityMeter({ 
  useHistorical = false, 
  asset = 'BTC/USD',
  timeframe = '1D'
}: VolatilityMeterProps) {
  // Get market data from single source of truth
  const { data: marketData, isLoading: marketLoading } = useMarketIndex();
  
  // Get historical data for volatility calculation
  const { chartData, isLoading: chartLoading } = useHistoricalVolatility(asset, timeframe);

  const isLoading = marketLoading || (useHistorical && chartLoading);

  // Calculate volatility based on mode
  let volatilityLevel = 50; // default
  let calculationMethod = 'Market (24h)';

  if (useHistorical && chartData.length > 0) {
    // Calculate from historical price data
    const prices = chartData.map((point: any) => point.price);
    volatilityLevel = calculateVolatility(prices);
    calculationMethod = `Historical (${timeframe})`;
  } else if (marketData) {
    // Calculate from 24h price changes
    const priceChanges = getAllPriceChanges(marketData);
    volatilityLevel = calculateMarketVolatility(priceChanges);
    calculationMethod = 'Market (24h)';
  }

  if (isLoading) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-3 font-semibold">Market Volatility</h3>
        <div className="animate-pulse">
          <div className="h-3 bg-neutral-700 rounded-full mb-2"></div>
          <div className="h-4 bg-neutral-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Market Volatility</h3>
        <span className="text-xs text-neutral-500">{calculationMethod}</span>
      </div>
      <div className="space-y-3">
        {/* Volatility Gauge */}
        <div className="relative">
          <div className="w-full bg-neutral-700 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                volatilityLevel < 30
                  ? 'bg-green-500'
                  : volatilityLevel < 70
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              }`}
              style={{ width: `${volatilityLevel}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-neutral-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Volatility Info */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-neutral-400">Current Level:</span>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${getVolatilityColor(volatilityLevel)}`}>
              {volatilityLevel.toFixed(1)}%
            </span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                volatilityLevel < 30
                  ? 'bg-green-500/20 text-green-400'
                  : volatilityLevel < 70
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
              }`}
            >
              {getVolatilityLabel(volatilityLevel)}
            </span>
          </div>
        </div>

        {/* Risk Indicator */}
        <div className="text-xs text-neutral-400">{getVolatilityMessage(volatilityLevel)}</div>
        
        {/* Data Source Info */}
        {useHistorical && chartData.length > 0 && (
          <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-800">
            Calculated from {chartData.length} historical data points
          </div>
        )}
      </div>
    </div>
  );
}
