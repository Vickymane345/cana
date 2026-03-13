'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import { useAssets } from '@/lib/hooks/useAssets';
import {
  FaWallet,
  FaChartLine,
  FaMoneyBillWave,
  FaCoins,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Image from 'next/image';
import logo from '@/app/assets/navbar/Tradelogo.png';
import PortfolioDonut from '@/components/PortfolioDonut';
import ROIProjectionChart from '@/components/ROIProjectionChart';
import PortfolioHealth from '@/components/PortfolioHealth';

const formatMoney = (val: number) =>
  val?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function AssetsPage() {
  // ✅ FIX: pull isLoading from auth context and rename to authLoading
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const { assets, isLoading, isError, mutate } = useAssets(user?.email || null);
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  useEffect(() => {
    // ✅ FIX: only redirect AFTER auth has finished reading from localStorage.
    // Without !authLoading, user is null for ~1 render tick while the context
    // hydrates from localStorage — causing an immediate false redirect to sign-in.
    if (!authLoading && !user) {
      router.push('/screens/auth/Signin');
    }
  }, [authLoading, user, router]);

  // Show spinner while auth context is still hydrating
  if (authLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0b1130] text-white space-y-6">
        <AiOutlineLoading3Quarters className="animate-spin" size={40} />
        <Image src={logo} alt="Trades Global FX" width={160} height={60} />
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0b1130] text-white">
        Redirecting to sign in...
      </div>
    );

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0b1130] text-white space-y-6">
        <AiOutlineLoading3Quarters className="animate-spin" size={40} />
        <Image src={logo} alt="Trades Global FX" width={160} height={60} />
        <p className="text-slate-400 text-sm">Loading your assets...</p>
      </div>
    );

  if (isError || !assets)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1130] text-red-400 space-y-3">
        <FaExclamationTriangle size={40} />
        <p className="text-lg font-semibold">⚠️ Failed to load assets</p>
        <button
          onClick={() => mutate()}
          className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-500 transition"
        >
          Retry
        </button>
      </div>
    );

  const summary = assets.summary;
  const activeInvestments = assets.activeInvestments;
  const completedInvestments = assets.completedInvestments;

  const planMetadata = {
    Mining: { roi: 30, duration: '1 month' },
    Premium: { roi: 40, duration: '1 month' },
    Gold: { roi: 55, duration: '1 month' },
  };

  const renderInvestmentTable = (investments: any[], type: 'active' | 'completed') => {
    if (investments.length === 0) {
      return (
        <div className="text-center py-12">
          <FaCoins className="mx-auto text-slate-500 mb-4" size={48} />
          <p className="text-slate-400 text-lg">No {type} investments found</p>
          <p className="text-slate-500 text-sm mt-2">
            {type === 'active'
              ? 'Start investing to see your active investments here.'
              : 'Completed investments will appear here once they mature.'}
          </p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-slate-300">Plan</th>
              <th className="text-left py-3 px-4 text-slate-300">Amount</th>
              <th className="text-left py-3 px-4 text-slate-300">Start Date</th>
              {type === 'active' && (
                <th className="text-left py-3 px-4 text-slate-300">Maturity</th>
              )}
              {type === 'completed' && (
                <th className="text-left py-3 px-4 text-slate-300">Completed</th>
              )}
              <th className="text-left py-3 px-4 text-slate-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv) => (
              <tr key={inv.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <FaCoins className="text-yellow-400" />
                    <span className="font-medium">{inv.planName}</span>
                  </div>
                </td>
                <td className="py-3 px-4">${formatMoney(inv.amount)}</td>
                <td className="py-3 px-4">{new Date(inv.startDate).toLocaleDateString()}</td>
                {type === 'active' && (
                  <td className="py-3 px-4">{new Date(inv.maturityDate).toLocaleDateString()}</td>
                )}
                {type === 'completed' && (
                  <td className="py-3 px-4">
                    {inv.endDate ? new Date(inv.endDate).toLocaleDateString() : 'N/A'}
                  </td>
                )}
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      type === 'active'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {type === 'active' ? 'Active' : 'Completed'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />

      {/* pb-20 on mobile gives space above the fixed bottom tab bar */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative pb-20 md:pb-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold">My Assets</h1>
        </div>

        {/* Portfolio Summary */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#0f274f] p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaWallet className="text-blue-400" size={24} />
              <h3 className="text-sm text-slate-300">Total Invested</h3>
            </div>
            <p className="text-2xl font-bold">${formatMoney(summary.totalInvested)}</p>
          </div>

          <div className="bg-[#0f274f] p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaChartLine className="text-green-400" size={24} />
              <h3 className="text-sm text-slate-300">Total ROI Earned</h3>
            </div>
            <p className="text-2xl font-bold text-green-400">
              ${formatMoney(summary.totalRoiEarned)}
            </p>
          </div>

          <div className="bg-[#0f274f] p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaClock className="text-yellow-400" size={24} />
              <h3 className="text-sm text-slate-300">Active Investments</h3>
            </div>
            <p className="text-2xl font-bold">{summary.activeInvestments}</p>
          </div>

          <div className="bg-[#0f274f] p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaMoneyBillWave className="text-purple-400" size={24} />
              <h3 className="text-sm text-slate-300">Pending Payouts</h3>
            </div>
            <p className="text-2xl font-bold text-purple-400">
              ${formatMoney(summary.pendingPayouts)}
            </p>
          </div>
        </section>

        {/* Plan Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Investment Plans Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(planMetadata).map(([plan, meta]) => {
              const activeCount = activeInvestments[plan]?.length || 0;
              const completedCount = completedInvestments[plan]?.length || 0;
              const totalInvested = [
                ...(activeInvestments[plan] || []),
                ...(completedInvestments[plan] || []),
              ].reduce((sum, inv) => sum + inv.amount, 0);

              return (
                <div key={plan} className="bg-[#0f274f] p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-yellow-400">{plan}</h3>
                    <FaCoins className="text-yellow-400" size={20} />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300">
                      ROI: <span className="text-green-400 font-semibold">{meta.roi}%</span>
                    </p>
                    <p className="text-slate-300">
                      Duration: <span className="font-semibold">{meta.duration}</span>
                    </p>
                    <p className="text-slate-300">
                      Active: <span className="text-blue-400 font-semibold">{activeCount}</span>
                    </p>
                    <p className="text-slate-300">
                      Completed:{' '}
                      <span className="text-green-400 font-semibold">{completedCount}</span>
                    </p>
                    <p className="text-slate-300">
                      Total Invested:{' '}
                      <span className="font-semibold">${formatMoney(totalInvested)}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Investments Tabs */}
        <section className="mb-8">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === 'active'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Active Investments ({summary.activeInvestments})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === 'completed'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Completed Investments ({Object.values(completedInvestments).flat().length})
            </button>
          </div>

          <div className="bg-[#0f274f] rounded-xl p-6">
            {activeTab === 'active' ? (
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaClock className="text-blue-400" />
                  Active Investments
                </h3>
                {renderInvestmentTable(Object.values(activeInvestments).flat(), 'active')}
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  Completed Investments
                </h3>
                {renderInvestmentTable(Object.values(completedInvestments).flat(), 'completed')}
              </div>
            )}
          </div>
        </section>

        {/* Portfolio Analytics */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200">Portfolio Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PortfolioDonut />
            <ROIProjectionChart />
          </div>
          <div className="mt-6">
            <PortfolioHealth />
          </div>
        </section>
      </main>
    </div>
  );
}