'use client';

import { useMarketIndex } from '@/lib/hooks/useMarketIndex';

export default function MarketIndex() {
  // Use shared market index hook (single source of truth)
  const { data, isLoading, isError } = useMarketIndex();

  if (isLoading) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-3 font-semibold">Market Index</h3>
        <div className="text-center text-neutral-400">Loading...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
        <h3 className="text-sm mb-3 font-semibold">Market Index</h3>
        <div className="text-center text-neutral-400">Failed to load data</div>
      </div>
    );
  }

  // Combine BTC, ETH with top 10, avoiding duplicates
  // Filter out Bitcoin and Ethereum from top10 since we're showing them explicitly
  const filteredTop10 = data.top10.filter(
    (coin) => coin.id !== 'bitcoin' && coin.id !== 'ethereum'
  );

  const indices = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      value: `$${data.btc.usd.toLocaleString()}`,
      change: `${data.btc.usd_24h_change.toFixed(2)}%`,
      isPositive: data.btc.usd_24h_change >= 0,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      value: `$${data.eth.usd.toLocaleString()}`,
      change: `${data.eth.usd_24h_change.toFixed(2)}%`,
      isPositive: data.eth.usd_24h_change >= 0,
    },
    ...filteredTop10.slice(0, 8).map((coin) => ({
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      value: `$${coin.current_price.toLocaleString()}`,
      change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
      isPositive: coin.price_change_percentage_24h >= 0,
    })),
  ];

  return (
    <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Market Index</h3>
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {indices.map((index) => (
          <div key={index.symbol} className="flex justify-between items-center">
            <div>
              <span className="text-xs text-neutral-400">{index.name}</span>
              <div className="text-xs text-neutral-500">{index.symbol}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-white">{index.value}</div>
              <div className={`text-xs ${index.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {index.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
