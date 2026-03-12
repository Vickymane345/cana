import useSWR from 'swr';

/**
 * Referral Stats Hook - Fetches user's referral statistics
 * Provides total referrals, earnings, and pending rewards
 */

export interface ReferralStatsData {
  totalReferrals: number;
  totalEarnings: number;
  pendingRewards: number;
  success: boolean;
}

interface UseReferralStatsReturn {
  data: ReferralStatsData | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined;
  mutate: () => void;
}

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Failed to fetch referral stats');
  }
  return res.json();
});

/**
 * Hook to fetch and manage referral statistics
 * @param userId User ID to fetch stats for (required)
 * @param refreshInterval Refresh interval in milliseconds (default: 60000 = 1 minute)
 * @returns Referral stats data, loading state, error state, and mutate function
 */
export function useReferralStats(
  userId: number | undefined,
  refreshInterval: number = 60000
): UseReferralStatsReturn {
  // Conditional SWR key - only fetch if userId is defined
  const swrKey = userId ? `/api/user/referral-stats?userId=${userId}` : null;

  const { data, error, isLoading, mutate } = useSWR<ReferralStatsData>(
    swrKey,
    fetcher,
    {
      refreshInterval, // Auto-refresh every minute
      revalidateOnFocus: true, // Revalidate when user focuses the tab
      revalidateOnReconnect: true, // Revalidate when reconnecting
      dedupingInterval: 30000, // Dedupe requests within 30 seconds
      errorRetryCount: 3, // Retry failed requests 3 times
      errorRetryInterval: 5000, // Wait 5 seconds between retries
      shouldRetryOnError: true, // Retry on error
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
