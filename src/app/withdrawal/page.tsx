'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import Sidebar from '@/components/Sidebar';
import { formatWithCommas, unformat } from '@/lib/utils/formatAmount';

export default function WithdrawalPage() {
  const { user } = useAuth();
  const [userId, setUserId] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: 'success' | 'error' | 'warning';
    message: string;
  } | null>(null);

  // Auto-hide alert after 3 seconds
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  // ✅ Fixed: Type-safe fetch for user ID
  useEffect(() => {
    const fetchUserId = async () => {
      // Try multiple sources for user email
      let userEmail = user?.email;

      if (!userEmail) {
        // Check localStorage as fallback
        try {
          const storedUser = localStorage.getItem('currentUser') || localStorage.getItem('user');
          if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            userEmail = parsedUser.email;
            console.log('📧 Got email from localStorage:', userEmail);
          }
        } catch (e) {
          console.warn('Failed to parse localStorage user:', e);
        }
      }

      if (!userEmail) {
        console.error('❌ No user email available from any source');
        return;
      }

      try {
        // Try to get userId from localStorage first (faster, no API call)
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser.id) {
            setUserId(parsedUser.id);
            console.log('✅ Got userId from localStorage:', parsedUser.id);
            return;
          }
        }

        // Fallback: Use simple API endpoint (no session required)
        console.log('🔄 Fetching userId from API...');

        // Use the simple endpoint we created earlier
        const res = await fetch(`/api/user/simple?email=${encodeURIComponent(userEmail)}`);

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          console.error('❌ Failed to fetch user ID:', res.status, errorData);

          // Alternative: Extract from user object directly
          if (user?.id) {
            setUserId(user.id);
            console.log('✅ Using userId from user context:', user.id);
          }
          return;
        }

        const data = await res.json();
        if (data.id) {
          setUserId(data.id);
          console.log('✅ Got userId from API:', data.id);

          // Update localStorage with the ID if missing
          if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (!userData.id) {
              userData.id = data.id;
              localStorage.setItem('currentUser', JSON.stringify(userData));
            }
          }
        }
      } catch (error) {
        console.error('❌ Error fetching user ID:', error);

        // Last resort: try to get from user context
        if (user?.id) {
          setUserId(user.id);
          console.log('✅ Using userId from context as fallback:', user.id);
        }
      }
    };

    // Only fetch if we have user data
    if (user || localStorage.getItem('currentUser') || localStorage.getItem('user')) {
      fetchUserId();
    } else {
      console.log('⏳ Waiting for user authentication...');
    }
  }, [user]); // Add user as dependency

  const showAlert = (type: 'success' | 'error' | 'warning', message: string) => {
    setAlert({ type, message });
  };

  async function handleWithdraw() {
    if (!amount || !address) return showAlert('warning', '⚠️ Please fill all fields.');
    if (!userId) return showAlert('error', '❌ User not found.');

    const payload = {
      userId,
      amount: parseFloat(unformat(amount)),
      currency,
      address,
    };

    setLoading(true);
    try {
      const res = await fetch('/api/withdrawal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // ✅ Typed response
      const data: { success?: boolean; message?: string } = await res.json();

      if (res.ok && data.success) {
        showAlert('success', '✅ Withdrawal submitted successfully!');
        setTimeout(() => {
          window.location.href = '/withdrawalHistory';
        }, 2000);
      } else {
        showAlert('error', data.message || '❌ Failed to submit withdrawal.');
      }
    } catch (err) {
      console.error('⚠️ Network error:', err);
      showAlert('error', '⚠️ Network error, please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        <div className="max-w-lg mx-auto w-full bg-[#162446]/60 p-6 sm:p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
            Withdraw Funds
          </h1>

          <div className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-slate-300">Amount (USD)</label>
              <input
                title="number"
                type="text"
                value={amount}
                onChange={(e) => {
                  const { formatted, newCursor } = formatWithCommas(
                    e.target.value,
                    e.target.selectionStart || 0
                  );
                  setAmount(formatted);
                  setTimeout(() => e.target.setSelectionRange(newCursor, newCursor), 0);
                }}
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">Method</label>
              <select
                title="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="BTC">Bitcoin</option>
                <option value="USDT">Tether (ERC20)</option>
                <option value="ETH">Ethereum</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">Wallet Address</label>
              <input
                title="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
              />

              {/* ⚠️ Warning message */}
              <p className="mt-2 text-xs sm:text-sm text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
                ⚠️ Please double-check your wallet address before submitting. Transactions are
                irreversible — sending to the wrong address may result in a permanent loss of funds.
              </p>
            </div>

            <button
              disabled={loading || !userId}
              onClick={handleWithdraw}
              className={`w-full mt-2 py-2 rounded font-semibold transition ${
                loading || !userId
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {loading ? 'Submitting...' : !userId ? 'Loading user...' : 'Submit Withdrawal'}
            </button>
          </div>
        </div>

        {/* ✅ Alert Popup */}
        {alert && (
          <div
            className={`fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-lg border-l-4 animate-fade-in z-50 ${
              alert.type === 'success'
                ? 'bg-green-500/20 border-green-400 text-green-300'
                : alert.type === 'error'
                  ? 'bg-red-500/20 border-red-400 text-red-300'
                  : 'bg-yellow-500/20 border-yellow-400 text-yellow-300'
            }`}
          >
            {alert.message}
          </div>
        )}
      </main>
    </div>
  );
}
