import useSWR from 'swr';

interface RewardData {
  rewardPoints: number;
  ledger: Array<{
    id: number;
    type: 'earned' | 'redeemed';
    points: number;
    description: string;
    createdAt: string;
  }>;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useRewards(userEmail: string | null) {
  const { data, error, mutate } = useSWR<RewardData>(
    userEmail ? `/api/rewards?user=${encodeURIComponent(userEmail)}` : null,
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
    }
  );

  return {
    rewards: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
