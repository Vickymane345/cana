import useSWR from 'swr';
import { useAuth } from '@/components/context/AuthContext';

export interface Investment {
  id: number;
  planName: string;
  planId: number;
  roi: number;
  duration: string;
  durationDays: number;
  amount: number;
  startDate: string;
  endDate: string | null;
  maturityDate: string;
  status: string;
  createdAt: string;
}

export interface AssetsData {
  summary: {
    mainBalance: number;
    interestBalance: number;
    totalDeposit: number;
    totalEarned: number;
    totalInvested: number;
    activeInvestments: number;
    totalRoiEarned: number;
    nextMaturityDate: string | null;
    pendingPayouts: number;
  };
  activeInvestments: Record<string, Investment[]>;
  completedInvestments: Record<string, Investment[]>;
  allInvestments: Investment[];
}

const fetcher = async (url: string, token: string) => {
  console.log('🔍 Assets fetcher called:', { url, hasToken: !!token });

  if (!token) {
    console.error('❌ No token provided to fetcher');
    throw new Error('Authentication token required');
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('📡 Assets fetch status:', res.status);

    if (!res.ok) {
      if (res.status === 401) {
        console.error('❌ 401 Unauthorized - token might be invalid');
        // Clear invalid token
        localStorage.removeItem('auth_token');
      }
      const errorText = await res.text();
      console.error('Fetch error details:', errorText);
      throw new Error(`Failed to load assets: ${res.status}`);
    }

    const data = await res.json();
    console.log('✅ Assets fetch successful:', {
      hasSummary: !!data.summary,
      investmentCount: data.allInvestments?.length || 0
    });

    return data;
  } catch (error) {
    console.error('❌ Fetcher error:', error);
    throw error;
  }
};

export function useAssets(p0: string | null) {
  const { accessToken } = useAuth();

  console.log('🔄 useAssets hook running:', {
    hasAccessToken: !!accessToken,
    tokenLength: accessToken?.length
  });

  const { data, error, isLoading, mutate } = useSWR<AssetsData>(
    accessToken ? ['/api/portfolio', accessToken] : null,
    ([url, token]) => fetcher(url, token as string),
    {
      refreshInterval: 5000, // 5s - faster polling for real-time updates
      revalidateOnFocus: true,
      onError: (err) => {
        console.error('❌ useSWR error:', err);
      },
      onSuccess: (data) => {
        console.log('🎉 useSWR success, data received');
      }
    }
  );

  return {
    assets: data,
    isError: !!error,
    isLoading: isLoading || (!data && !error), // Show loading until we have data or error
    mutate,
  };
}
