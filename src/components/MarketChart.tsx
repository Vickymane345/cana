'use client';

import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import useSWR from 'swr';
import { useMarketIndex, getCoinFromIndex } from '@/lib/hooks/useMarketIndex';
import ChartSelector from './ChartSelector';
import TimeframeSelector from './TimeframeSelector';

interface MarketChartProps {
  height?: number;
}

const ASSETS = ['BTC/USD', 'ETH/USD', 'USDT/USD', 'XRP/USD', 'SOL/USD', 'USDT-BSC/USD'];
const TIMEFRAMES = ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'Max'];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MarketChart({ height = 300 }: MarketChartProps) {
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[0]);
  const [selectedTimeframe, setSelectedTimeframe] = useState(TIMEFRAMES[0]);

  // Get current price from Market Index (single source of truth)
  const { data: marketData } = useMarketIndex();

  // Fetch historical chart data from CoinGecko
  const { data: chartResponse, error, isLoading } = useSWR(
    `/api/market/chart?asset=${selectedAsset}&timeframe=${selectedTimeframe}`,
    fetcher,
    {
      refreshInterval: 300000, // Refresh every 5 minutes
      revalidateOnFocus: false,
    }
  );

  const isError = !!error;

  // Transform data for recharts
  const chartData = useMemo(() => {
    if (!chartResponse?.prices) return [];

    return chartResponse.prices.map((point: any) => ({
      time: new Date(point.time).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: selectedTimeframe === '1D' ? '2-digit' : undefined,
        minute: selectedTimeframe === '1D' ? '2-digit' : undefined,
        hour12: false,
      }),
      price: point.price,
      timestamp: point.time,
    }));
  }, [chartResponse, selectedTimeframe]);

  // Get current price from Market Index
  const coinData = getCoinFromIndex(marketData, selectedAsset);
  const currentPrice = coinData?.current_price || chartData[chartData.length - 1]?.price || 0;
  const changePercent = coinData?.price_change_percentage_24h || 0;

  // Calculate change from historical data if available
  const firstPrice = chartData[0]?.price || currentPrice;
  const historicalChange = firstPrice > 0 ? ((currentPrice - firstPrice) / firstPrice) * 100 : 0;

  // Use 24h change for 1D view, historical change for longer timeframes
  const displayChangePercent = selectedTimeframe === '1D' ? changePercent : historicalChange;

  const isPositive = displayChangePercent >= 0;
  const changeColor = isPositive ? '#10b981' : '#ef4444';
  const changeSymbol = isPositive ? '+' : '';

  if (isLoading) {
    return (
      <div className="bg-[#0f274f] p-6 rounded-xl border border-slate-700/50">
        <div className="animate-pulse">
          <div className="h-4 bg-slate-700 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-slate-700 rounded w-1/3 mb-6"></div>
          <div className="h-64 bg-slate-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#0f274f] p-6 rounded-xl border border-slate-700/50">
        <div className="text-center text-red-400 py-8">Failed to load market data</div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f274f] p-6 rounded-xl border border-slate-700/50">
      {/* Asset Selector */}
      <ChartSelector assets={ASSETS} selectedAsset={selectedAsset} onSelect={setSelectedAsset} />

      {/* Timeframe Selector */}
      <TimeframeSelector
        timeframes={TIMEFRAMES}
        selectedTimeframe={selectedTimeframe}
        onSelect={setSelectedTimeframe}
      />

      {/* Chart Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{selectedAsset} Chart</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-white">
              ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span
              className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}
            >
              {changeSymbol}
              {Math.abs(displayChangePercent).toFixed(2)}%
            </span>
            {marketData && (
              <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                LIVE
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={changeColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={changeColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis
            dataKey="time"
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            interval="preserveStartEnd"
          />
          <YAxis
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#e2e8f0',
            }}
            labelFormatter={(label) => `Time: ${label}`}
            formatter={(value: any, name?: string) => {
              const formattedValue = `$${typeof value === 'number' ? value.toLocaleString() : value}`;
              const displayName = name === 'price' ? 'Price' : (name || 'Value');
              return [formattedValue, displayName];
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke={changeColor}
            strokeWidth={2}
            fill="url(#priceGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
