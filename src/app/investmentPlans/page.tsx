'use client';
import { useAuth } from '@/components/context/AuthContext';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

// Add money formatter (ONLY new addition)
const formatMoney = (val: number) =>
  val?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// Updated plans with full descriptions
const plans = [
  {
    name: 'Mining',
    roi: '30%',
    duration: '1 month',
    min: 1000,
    max: 19999,
    description:
      'Jumpstart your portfolio with the Mining Plan. Designed for fast returns, this plan provides consistent daily ROI over a month. Perfect for first-time investors or those looking to grow their capital quickly.',
  },
  {
    name: 'Premium',
    roi: '40%',
    duration: '1 month',
    min: 20000,
    max: 99999,
    description:
      'Take your investments to the next level with the Premium Plan. Offering a higher ROI over a month, this plan is tailored for ambitious investors ready to scale their earnings. Ideal for building a stronger portfolio in a short timeframe.',
  },
  {
    name: 'Gold',
    roi: '55%',
    duration: '1 month',
    min: 100000,
    max: 1000000,
    description:
      'The Gold Plan is our flagship investment, delivering maximum returns over a month. Strategically designed for seasoned investors seeking high-yield growth and substantial capital gains.',
  },
];

export default function InvestmentPlansPage() {
  const { user, updateBalances } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  async function handleInvest() {
    if (!user || !selectedPlan) return;

    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) return setMessage('Please enter a valid amount.');
    if (numericAmount < selectedPlan.min || numericAmount > selectedPlan.max)
      return setMessage(
        `Amount must be between $${formatMoney(selectedPlan.min)} and $${formatMoney(
          selectedPlan.max
        )}.`
      );

    try {
      setLoading(true);
      setMessage('');
      setShowConfirmModal(false);

      const res = await fetch('/api/investmentPlans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan.name,
          amount: numericAmount,
          user: user.email,
        }),
      });

      const json: any = await res.json();

      if (json.error) {
        setShowErrorModal(true);
      } else {
        updateBalances({
          mainBalance: json.updatedBalances.mainBalance,
          investmentBalance: json.updatedBalances.investmentBalance,
        });
        setShowSuccessModal(true);
      }

      setSelectedPlan(null);
      setAmount('');
    } catch (err) {
      console.error('Investment failed', err);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  }

  function handleCancel() {
    setSelectedPlan(null);
    setMessage('');
    setAmount('');
  }

  function openConfirmModal() {
    if (!amount) return setMessage('Please enter an amount first.');
    setShowConfirmModal(true);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
          Investment Plans
        </h1>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className="bg-slate-800/50 p-6 rounded text-center shadow-md hover:scale-[1.02] transition-transform"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-slate-400 mb-1">ROI: {p.roi}</p>
              <p className="text-slate-400 mb-1">Duration: {p.duration}</p>

              {/* Updated to use formatMoney */}
              <p className="text-slate-300 mb-3 text-sm sm:text-base">
                Min: ${formatMoney(p.min)} — Max: ${formatMoney(p.max)}
              </p>

              <p className="text-slate-400 text-sm mb-4">{p.description}</p>
              <button
                onClick={() => setSelectedPlan(p)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold text-sm sm:text-base"
              >
                Invest
              </button>
            </div>
          ))}
        </div>

        {/* Investment Input Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3">
            <div className="bg-slate-800 rounded-xl p-6 w-full max-w-sm shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Start Growing with the {selectedPlan.name} Plan 🚀
              </h2>
              <p className="text-sm text-slate-400 mb-2">
                ROI: {selectedPlan.roi} | Duration: {selectedPlan.duration}
              </p>
              <p className="text-slate-300 text-sm mb-4">{selectedPlan.description}</p>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Enter amount $${formatMoney(selectedPlan.min)}`}
                className="w-full p-2 rounded bg-slate-900 text-slate-200 border border-slate-700 mb-3 text-sm sm:text-base"
              />

              {message && <p className="text-sm text-center text-yellow-400 mb-3">{message}</p>}

              <div className="flex justify-end gap-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={openConfirmModal}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50 text-sm sm:text-base"
                >
                  {loading ? 'Processing...' : 'Confirm'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] px-3">
            <div className="bg-slate-800 rounded-xl p-6 w-full max-w-sm shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-4">Confirm Investment</h3>
              <p className="text-slate-300 mb-6">
                Are you sure you want to invest{' '}
                <span className="font-semibold text-white">${formatMoney(Number(amount))}</span> in
                the <span className="font-semibold text-white">{selectedPlan?.name}</span> plan?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
                >
                  No, go back
                </button>
                <button
                  onClick={handleInvest}
                  disabled={loading}
                  className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Yes, confirm'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[70] px-3">
            <div className="bg-green-700 rounded-xl p-6 w-full max-w-sm text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Investment Successful 🎉</h3>
              <p className="text-green-100 mb-6">
                Your investment has been successfully processed!
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-4 py-2 bg-green-900 rounded hover:bg-green-800 text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showErrorModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[70] px-3">
            <div className="bg-red-700 rounded-xl p-6 w-full max-w-sm text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Investment Failed</h3>
              <p className="text-red-100 mb-6">Please check your balance or try again later.</p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="px-4 py-2 bg-red-900 rounded hover:bg-red-800 text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
