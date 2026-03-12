import { useState, useEffect } from 'react';

export interface DashboardData {
  mainBalance: number;
  interestBalance: number;
  totalDeposit: number;
  totalEarn: number;
  roiCompleted: number;
  roiSpeed: number;
  roiRedeemed: number;
  rewardPoints: number;
  stats: {
    investCompleted: number;
    roiSpeed: number;
    roiRedeemed: number;
  };
  pendingWithdrawals: any[];
  pendingDeposits: any[];
  maturingInvestments: any[];
  activeInvestments: any[];
  activeInvestmentsCount: number;
  recentROITotal: number;
  recentActivities: any[];
  monthlyData: any[];
}

export function useDashboard(userEmail: string | null) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (!userEmail) return;

    try {
      const res = await fetch(`/api/dashboard?user=${encodeURIComponent(userEmail)}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to fetch dashboard data');
      }
      const json: DashboardData = await res.json();
      setData(json);
      setError(null);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // 5s - faster polling for real-time updates
    return () => clearInterval(interval);
  }, [userEmail]);

  return {
    dashboard: data,
    isLoading,
    isError: !!error,
    mutate: fetchData,
  };
}
