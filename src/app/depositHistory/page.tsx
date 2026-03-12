'use client';
import { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/components/context/AuthContext';
import { useDeposits } from '@/lib/hooks/useDeposits';
import type { DepositRecord } from '@/types/api';

export default function DepositHistoryPage() {
  const { user } = useAuth();
  const { deposits, isLoading, isError, mutate } = useDeposits(user?.email || null, 0); // No auto-refresh for history page

  useEffect(() => {
    if (!user) return;
  }, [user]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
          Deposit History
        </h1>

        {isLoading ? (
          <p className="text-slate-400 text-center">Loading...</p>
        ) : isError ? (
          <div className="text-center space-y-4">
            <p className="text-red-400">⚠️ Failed to load deposit history</p>
            <button
              onClick={() => mutate()}
              className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-500 transition"
            >
              Retry
            </button>
          </div>
        ) : !deposits?.depositHistory?.length ? (
          <p className="text-slate-400 text-center md:text-left">No deposits yet.</p>
        ) : (
          <div className="bg-slate-800/50 p-3 sm:p-4 rounded overflow-x-auto">
            {deposits.depositHistory.map((d: any) => (
              <div
                key={d.id}
                className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base text-slate-300 border-b border-slate-600/30 py-2 sm:py-3 space-y-1 sm:space-y-0"
              >
                <div className="break-all text-center sm:text-left">
                  ${d.amount.toFixed(2)} — {d.currency}
                </div>
                <div className="text-center sm:text-right text-slate-400">
                  {d.status} •{' '}
                  {new Date(d.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
