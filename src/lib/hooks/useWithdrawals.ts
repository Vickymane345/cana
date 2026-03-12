import useSWR from 'swr';

interface WithdrawalData {
  id: number;
  amount: number;
  address: string;
  currency: string;
  status: string;
  createdAt: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useWithdrawals(userId: number | null) {
  const { data, error, mutate } = useSWR<{ success: boolean; data: WithdrawalData[] }>(
    userId ? `/api/withdrawalHistory?userId=${userId}` : null,
    fetcher,
    {
      refreshInterval: 10000, // Refresh every 10 seconds for real-time updates
      revalidateOnFocus: true,
    }
  );

  return {
    withdrawals: data?.data || [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
