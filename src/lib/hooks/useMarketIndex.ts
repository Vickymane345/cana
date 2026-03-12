import useSWR from 'swr';

/**
 * Market Index Hook - Single Source of Truth for Market Data
 * Fetches real-time market data from CoinGecko via /api/market/prices
 */

export interface CoinGeckoPrice {
  usd: number;
  usd_24h_change: number;
}

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export interface FearGreedData {
  value: number;
  value_classification: string;
}

export interface MarketIndexData {
  btc: CoinGeckoPrice;
  eth: CoinGeckoPrice;
  top10: CryptoData[];
  sentiment: FearGreedData;
}

interface UseMarketIndexReturn {
  data: MarketIndexData | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined;
  mutate: () => void;
}

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Failed to fetch market data');
  }
  return res.json();
});

/**
 * Hook to fetch and manage market index data
 * @param refreshInterval Refresh interval in milliseconds (default: 60000 = 60 seconds)
 * @returns Market data, loading state, error state, and mutate function
 */
export function useMarketIndex(refreshInterval: number = 60000): UseMarketIndexReturn {
  const { data, error, isLoading, mutate } = useSWR<MarketIndexData>(
    '/api/market/prices',
    fetcher,
    {
      refreshInterval, // Auto-refresh every 60 seconds
      revalidateOnFocus: true, // Revalidate when window regains focus
      revalidateOnReconnect: true, // Revalidate when reconnecting
      dedupingInterval: 5000, // Dedupe requests within 5 seconds
      errorRetryCount: 3, // Retry failed requests 3 times
      errorRetryInterval: 5000, // Wait 5 seconds between retries
    }
  );

  return {
    data,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Get a specific coin's data from the market index
 * @param data Market index data
 * @param symbol Coin symbol (e.g., 'BTC', 'ETH')
 * @returns Coin data or undefined
 */
export function getCoinFromIndex(
  data: MarketIndexData | undefined,
  symbol: string
): CryptoData | undefined {
  if (!data) return undefined;

  const normalizedSymbol = symbol.toUpperCase().replace('/USD', '');

  // Check BTC
  if (normalizedSymbol === 'BTC' || normalizedSymbol === 'BITCOIN') {
    return {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      current_price: data.btc.usd,
      price_change_percentage_24h: data.btc.usd_24h_change,
      market_cap: 0, // Not provided in simple price endpoint
    };
  }

  // Check ETH
  if (normalizedSymbol === 'ETH' || normalizedSymbol === 'ETHEREUM') {
    return {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      current_price: data.eth.usd,
      price_change_percentage_24h: data.eth.usd_24h_change,
      market_cap: 0,
    };
  }

  // Check top 10
  return data.top10.find(
    (coin) =>
      coin.symbol.toUpperCase() === normalizedSymbol ||
      coin.id.toLowerCase() === normalizedSymbol.toLowerCase()
  );
}

/**
 * Get all price changes from market index for volatility calculation
 * @param data Market index data
 * @returns Array of 24h price change percentages
 */
export function getAllPriceChanges(data: MarketIndexData | undefined): number[] {
  if (!data) return [];

  const changes: number[] = [
    data.btc.usd_24h_change,
    data.eth.usd_24h_change,
    ...data.top10.map((coin) => coin.price_change_percentage_24h),
  ];

  // Filter out invalid values
  return changes.filter(
    (change) => typeof change === 'number' && !isNaN(change) && isFinite(change)
  );
}

/**
 * Hook to fetch historical volatility data
 * @param asset Asset symbol (e.g., 'BTC/USD')
 * @param timeframe Timeframe for volatility calculation (default: '1D')
 * @returns Volatility data and loading state
 */
export function useHistoricalVolatility(asset: string = 'BTC/USD', timeframe: string = '1D') {
  const { data, error, isLoading } = useSWR(
    `/api/market/chart?asset=${asset}&timeframe=${timeframe}`,
    fetcher,
    {
      refreshInterval: 300000, // Refresh every 5 minutes
      revalidateOnFocus: false,
    }
  );

  return {
    chartData: data?.prices || [],
    isLoading,
    isError: !!error,
    error,
  };
}
