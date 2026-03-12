'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import { useDashboard } from '@/lib/hooks/useDashboard';
import {
  FaWallet,
  FaChartLine,
  FaMoneyBillWave,
  FaCoins,
  FaExclamationTriangle,
  FaArrowUp,
  FaPiggyBank,
  FaPercent,
  FaUserCircle,
  FaClock as FaClockIcon,
} from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import NotificationButton from '@/components/NotificationButton';
import Image from 'next/image';
import logo from '@/app/assets/navbar/Tradelogo.png';
import OperationalInsights from '@/components/OperationalInsights';
import StatCard from '@/components/StatCard';
import MarketChart from '@/components/MarketChart';
import VolatilityMeter from '@/components/VolatilityMeter';
import MarketIndex from '@/components/MarketIndex';
import MarketNews from '@/components/MarketNews';

// Format money
const formatMoney = (val: number) =>
  val?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { dashboard, isLoading, isError, mutate } = useDashboard(user?.email || null);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/screens/auth/Signin');
      return;
    }
  }, [user, router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <p className="text-slate-400 text-sm">Loading your dashboard...</p>
      </div>
    );

  if (isError || !dashboard)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1130] text-red-400 space-y-3">
        <FaExclamationTriangle size={40} />
        <p className="text-lg font-semibold">⚠️ Failed to load dashboard</p>
        <button
          onClick={() => mutate()}
          className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-500 transition"
        >
          Retry
        </button>
      </div>
    );

  const fullName = `${user.firstName} ${user.lastName}`.trim();

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            <NotificationButton />

            {/* User dropdown */}
            <div className="relative">
              <button
                type="button"
                title='button'
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <FaUserCircle size={24} className="text-slate-400" />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg border border-slate-700 z-50">
                  {/* User info */}
                  <div className="px-4 py-3 space-y-1 border-b border-slate-700">
                    <p className="text-sm font-medium text-white">{fullName || 'No Name'}</p>
                    <p className="text-xs text-slate-400">@{user.username || 'username'}</p>
                    <p className="text-xs text-slate-400 truncate">{user.email}</p>
                  </div>

                  {/* Portfolio */}

                  {/* Logout */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      logout();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200"></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Main Balance"
              value={`$${formatMoney(dashboard.mainBalance)}`}
              icon={<FaWallet />}
              accentColor="text-blue-400"
              changeLabel="vs last month"
            />
            <StatCard
              title="Interest Balance"
              value={`$${formatMoney(dashboard.interestBalance)}`}
              icon={<FaChartLine />}
              accentColor="text-green-400"
              changeLabel="vs last month"
            />
            <StatCard
              title="Total Deposit"
              value={`$${formatMoney(dashboard.totalDeposit)}`}
              icon={<FaMoneyBillWave />}
              accentColor="text-purple-400"
              changeLabel="vs last month"
            />
            <StatCard
              title="Total Earned"
              value={`$${formatMoney(dashboard.totalEarn)}`}
              icon={<FaCoins />}
              accentColor="text-yellow-400"
              changeLabel="vs last month"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <StatCard
              title="Active Investments"
              value={dashboard.activeInvestmentsCount?.toString() || '0'}
              icon={<FaPiggyBank />}
              accentColor="text-indigo-400"
              changeLabel=""
            />

            <StatCard
              title="Pending Payouts"
              value={`$${formatMoney(
                dashboard.pendingWithdrawals?.reduce((sum, w) => sum + (w.amount || 0), 0) || 0
              )}`}
              icon={<FaClockIcon />}
              accentColor="text-orange-400"
              changeLabel="vs last month"
            />

            <StatCard
              title="Average ROI"
              value={`${
                typeof dashboard.roiCompleted === 'number'
                  ? dashboard.roiCompleted.toFixed(1)
                  : Number(dashboard.roiCompleted || 0).toFixed(1)
              }%`}
              icon={<FaPercent />}
              accentColor="text-emerald-400"
              changeLabel=""
            />

            <StatCard
              title="24h Profit Accrued"
              value={`$${formatMoney(dashboard.recentROITotal || 0)}`}
              icon={<FaArrowUp />}
              accentColor="text-cyan-400"
              changeLabel=""
            />
          </div>
        </section>

        {/* Operational */}
        <section className="mb-8">
          <OperationalInsights />
        </section>

        {/* Market */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200">Market Intelligence</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MarketChart />
            </div>
            <div className="space-y-6">
              <VolatilityMeter />
              <MarketIndex />
            </div>
          </div>
        </section>

        {/* Market News */}
        <section className="mb-8">
          <MarketNews />
        </section>
      </main>
    </div>
  );
}
