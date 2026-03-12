import useSWR from 'swr';

/**
 * Market News Hook - Fetches financial news from GNews API
 * Provides real-time market, crypto, and economy news
 */

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image?: string;
  source: string;
  publishedAt: number;
}

export interface MarketNewsData {
  source: string;
  fetchedAt: number;
  articles: NewsArticle[];
}

interface UseMarketNewsReturn {
  data: MarketNewsData | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined;
  mutate: () => void;
}

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Failed to fetch market news');
  }
  return res.json();
});

/**
 * Hook to fetch and manage market news data
 * @param refreshInterval Refresh interval in milliseconds (default: 300000 = 5 minutes)
 * @returns News data, loading state, error state, and mutate function
 */
export function useMarketNews(refreshInterval: number = 300000): UseMarketNewsReturn {
  const { data, error, isLoading, mutate } = useSWR<MarketNewsData>(
    '/api/market/news',
    fetcher,
    {
      refreshInterval, // Auto-refresh every 5 minutes
      revalidateOnFocus: false, // Don't revalidate on focus (news doesn't change that fast)
      revalidateOnReconnect: true, // Revalidate when reconnecting
      dedupingInterval: 60000, // Dedupe requests within 1 minute
      errorRetryCount: 3, // Retry failed requests 3 times
      errorRetryInterval: 10000, // Wait 10 seconds between retries
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
 * Format timestamp to relative time (e.g., "2 hours ago")
 * @param timestamp Unix timestamp in milliseconds
 * @returns Formatted relative time string
 */
export function formatTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  return 'Just now';
}
