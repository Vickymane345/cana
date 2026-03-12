'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import { useDeposits } from '@/lib/hooks/useDeposits';
import { addFundsSchema } from '@/lib/validation';
import { WALLETS } from '@/lib/config';
import { formatWithCommas, unformat } from '@/lib/utils/formatAmount';

// Add comma formatting
const formatMoney = (val: number) =>
  val?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function AddFundsPage() {
  const [selected, setSelected] = useState<any | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const { user } = useAuth();
  const router = useRouter();
  const { submitDeposit } = useDeposits(user?.email || null);

  const showAlert = (msg: string, autoClose = true) => {
    setAlertMsg(msg);
    if (autoClose) setTimeout(() => setAlertMsg(null), 3000);
  };

  const confirm = async () => {
    if (!selected) return showAlert('⚠️ Choose a wallet');
    const cleanAmount = unformat(amount);
    if (!cleanAmount || Number(cleanAmount) < 1000)
      return showAlert(`⚠️ Minimum investment is $${formatMoney(1000)}`);
    if (Number(cleanAmount) > 1000000)
      return showAlert(`⚠️ Maximum investment is $${formatMoney(1000000)}`);
    if (!user) return showAlert('⚠️ Please log in to continue');

    const validationResult = addFundsSchema.safeParse({
      user: user.email,
      amount: Number(cleanAmount),
      currency: selected.symbol,
      address: selected.address,
    });

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors.map((err: any) => err.message).join(', ');
      setError(errorMessage);
      showAlert(`❌ Validation Error: ${errorMessage}`);
      return;
    }

    const now = Date.now();
    if (isSubmitting || now - lastSubmissionTime < 2000) {
      return showAlert('⚠️ Please wait before submitting again');
    }

    setLoading(true);
    setError(null);
    setIsSubmitting(true);
    setLastSubmissionTime(now);

    try {
      const result = await submitDeposit(Number(cleanAmount), selected.symbol, selected.address);

      if (!result.success) {
        throw new Error(result.message);
      }

      setAmount('');
      setSelected(null);
      showAlert('✅ Deposit request sent for approval.');
      setTimeout(() => router.push('/dashboard'), 2500);
    } catch (err: unknown) {
      console.error('AddFunds error:', err);
      const errorMessage = (err as Error).message || 'Something went wrong';
      setError(errorMessage);
      showAlert(`❌ Submission Failed: ${errorMessage}`);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">Add Fund</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {WALLETS.map((w) => (
            <div
              key={w.symbol}
              className="bg-[#162446] p-6 rounded-xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <div className="w-20 h-20 rounded bg-slate-800 mb-4 flex items-center justify-center text-lg">
                {w.symbol}
              </div>
              <h3 className="font-semibold mb-1 text-center">{w.name}</h3>
              <button
                onClick={() => setSelected(w)}
                className="mt-3 bg-green-500 hover:bg-green-400 px-4 py-2 rounded text-black font-semibold w-full sm:w-auto"
              >
                Pay Now
              </button>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 sm:px-0">
            <div className="bg-[#0f2a57] p-6 sm:p-8 rounded-xl w-full max-w-sm sm:max-w-md shadow-2xl">
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-center sm:text-left">
                Send {selected.symbol}
              </h2>
              <p className="text-sm text-slate-300 mb-3">Send to this address:</p>

              <div className="bg-slate-800 p-3 rounded mb-4 break-all text-green-300 text-xs sm:text-sm relative">
                <span>{selected.address}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selected.address);
                    showAlert('📋 Wallet address copied to clipboard!');
                  }}
                  className="absolute top-1 right-1 bg-slate-700 hover:bg-slate-600 text-white px-2 py-1 rounded text-xs"
                >
                  Copy
                </button>
              </div>

              <input
                type="text"
                placeholder={`Enter USD amount min $${formatMoney(1000)}`}
                value={amount}
                onChange={(e) => {
                  const { formatted, newCursor } = formatWithCommas(
                    e.target.value,
                    e.target.selectionStart || 0
                  );
                  setAmount(formatted);
                  setTimeout(() => e.target.setSelectionRange(newCursor, newCursor), 0);
                }}
                className="w-full p-2 rounded bg-slate-800 mb-3 text-white text-sm"
              />

              <p className="text-yellow-400 text-xs sm:text-sm mb-4 text-center sm:text-left">
                ⚠️ Please transfer the <strong>exact amount</strong> you entered above. Incorrect
                amounts may lead to loss of funds.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={confirm}
                  disabled={loading}
                  className="flex-1 bg-green-500 py-2 rounded hover:bg-green-400 disabled:opacity-60 text-sm font-semibold"
                >
                  {loading ? 'Processing...' : 'Confirm'}
                </button>
                <button
                  onClick={() => {
                    setSelected(null);
                    setAmount('');
                    setError(null);
                  }}
                  className="flex-1 bg-red-500 py-2 rounded hover:bg-red-400 text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {alertMsg && (
          <div className="fixed bottom-6 right-6 bg-[#1b2b55] text-white px-6 py-3 rounded-lg shadow-lg border-l-4 border-green-400 animate-fade-in z-50 text-sm sm:text-base max-w-[90%] sm:max-w-sm">
            {alertMsg}
          </div>
        )}

        {error && (
          <div className="fixed bottom-20 right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg border-l-4 border-red-800 animate-fade-in z-50 text-sm sm:text-base max-w-[90%] sm:max-w-sm">
            <div className="flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
            <button
              onClick={() => setError(null)}
              className="absolute top-1 right-1 text-red-200 hover:text-white text-xs"
            >
              ✕
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
