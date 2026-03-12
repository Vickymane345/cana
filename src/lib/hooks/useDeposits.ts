import useSWR from 'swr';
import { AddFundsResponse, DepositData } from '@/types/api';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useDeposits(userEmail: string | null, refreshInterval: number = 30000) {
  const { data, error, mutate, isLoading } = useSWR<DepositData>(
    userEmail ? `/api/deposits?user=${encodeURIComponent(userEmail)}` : null,
    fetcher,
    {
      refreshInterval, // Configurable refresh interval, default 30 seconds
      revalidateOnFocus: true,
    }
  );

  const submitDeposit = async (
    amount: number,
    currency: string,
    address: string,
    maxRetries: number = 3
  ): Promise<{ success: boolean; message: string; transactionRef?: string }> => {
    // Get user email from localStorage if not provided
    let userToUse = userEmail;
    if (!userToUse) {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          userToUse = parsedUser.email;
        }
      } catch (error) {
        console.error('Error getting user from localStorage:', error);
      }
    }

    if (!userToUse) {
      return {
        success: false,
        message: "User email not available. Please log in again."
      };
    }

    let lastError: Error | null = null;

    // Optimistic update: add to pendingDeposits
    const optimisticDeposit = {
      id: Date.now(), // Temporary ID
      amount,
      currency,
      address,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    mutate(
      (currentData: DepositData | undefined) => ({
        pendingDeposits: [
          ...(currentData?.pendingDeposits || []),
          optimisticDeposit,
        ],
        depositHistory: currentData?.depositHistory || [],
      }),
      false // Don't revalidate immediately
    );

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        console.log('📤 Sending deposit request:', {
          user: userToUse,
          amount,
          currency,
          address
        });

        const res = await fetch('/api/addFunds', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: userToUse,  // ← Use the ensured user email
            amount,
            currency,
            address,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        let data: AddFundsResponse;
        try {
          data = await res.json();
        } catch {
          throw new Error('Invalid response from server');
        }

        console.log('📥 Deposit response:', data);

        if (!res.ok) {
          throw new Error(data.message || `Server error: ${res.status}`);
        }

        // Refresh the deposits data after successful submission
        mutate();

        return data;
      } catch (err: any) {
        lastError = err;
        console.error(`Submit deposit attempt ${attempt} failed:`, err);

        // Don't retry on client errors (4xx) or if it's the last attempt
        if (err.name === 'AbortError') {
          lastError = new Error('Request timed out. Please check your connection and try again.');
        } else if (err.message?.includes('Server error: 4')) {
          break; // Don't retry client errors
        }

        if (attempt < maxRetries) {
          // Exponential backoff: wait 1s, 2s, 4s...
          const delay = Math.pow(2, attempt - 1) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    // On failure, remove the optimistic deposit
    mutate(
      (currentData: DepositData | undefined) => ({
        pendingDeposits: (currentData?.pendingDeposits || []).filter(
          (d) => d.id !== optimisticDeposit.id
        ),
        depositHistory: currentData?.depositHistory || [],
      }),
      false
    );

    return {
      success: false,
      message: lastError?.message || 'Failed to submit deposit after multiple attempts'
    };
  };

  return {
    deposits: data,
    isLoading,
    isError: error,
    mutate,
    submitDeposit,
  };
}
