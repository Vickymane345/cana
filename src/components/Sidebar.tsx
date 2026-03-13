'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import {
  FaWallet,
  FaHistory,
  FaPlusCircle,
  FaMoneyBillWave,
  FaListAlt,
  FaPaperPlane,
  FaUserFriends,
  FaCopy,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaHeadset,
  FaEllipsisH,
} from 'react-icons/fa';
import { useDashboard } from '@/lib/hooks/useDashboard';

export default function Sidebar() {
  const { user, logout, refreshUser, setUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { dashboard, isLoading } = useDashboard(user?.email || null);

  const [showReferralModal, setShowReferralModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  // reactive referral link (updates when user.referralCode changes)
  const [refLink, setRefLink] = useState<string>('');

  useEffect(() => {
    console.log('=== SIDEBAR USER STATE ===');
    console.log('User:', user);
    console.log('Has referralCode?', !!user?.referralCode);
    console.log('Referral code value:', user?.referralCode);
    console.log('LocalStorage user:', localStorage.getItem('currentUser'));
    console.log('==========================');
  }, [user]);

  useEffect(() => {
    document.body.style.overflow = mobileMoreOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMoreOpen]);

  useEffect(() => {
    // If user exists but no referralCode yet, try to refresh once
    if (user?.id && !user.referralCode) {
      refreshUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  useEffect(() => {
    console.log('🔍 Checking referral code...', {
      hasUser: !!user,
      hasReferralCode: !!user?.referralCode,
      userEmail: user?.email,
    });

    if (user?.referralCode) {
      const link = `https://tradeglobalfx.org/signup?ref=${encodeURIComponent(user.referralCode)}`;
      setRefLink(link);
      console.log('✅ Using existing referral code:', user.referralCode);
    } else if (user?.email) {
      console.log('🔄 User exists but no referral code, fetching...');
      fetchReferralCodeDirectly();
    } else {
      setRefLink('');
      console.log('⚠️ No user or email available');
    }
  }, [user?.referralCode, user?.email]);

  const fetchReferralCodeDirectly = async () => {
    try {
      console.log('🔄 Fetching referral code directly...');

      if (!user?.id) {
        console.error('❌ No user ID available');
        return null;
      }

      const response = await fetch(`/api/user/referral?userId=${user.id}`);

      if (response.ok) {
        const data = await response.json();
        console.log('📦 Referral data received:', data);

        if (data.referralCode) {
          const newLink = `https://tradeglobalfx.org/signup?ref=${encodeURIComponent(data.referralCode)}`;
          setRefLink(newLink);

          if (setUser) {
            setUser((prev) =>
              prev
                ? {
                    ...prev,
                    referralCode: data.referralCode,
                  }
                : prev
            );
          }

          const currentUser = localStorage.getItem('currentUser');
          if (currentUser) {
            const userData = JSON.parse(currentUser);
            userData.referralCode = data.referralCode;
            localStorage.setItem('currentUser', JSON.stringify(userData));
          }

          console.log('✅ Referral link updated:', newLink);
          return data.referralCode;
        } else {
          console.warn('⚠️ No referral code found in response');
        }
      } else {
        const errorText = await response.text();
        console.error('❌ Failed to fetch referral code:', response.status, errorText);
      }
    } catch (error) {
      console.error('❌ Error fetching referral code:', error);
    }
    return null;
  };

  const copyReferralLink = async (link: string) => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('copyReferralLink error:', err);
    }
  };

  const formatMoney = (val: any) =>
    typeof val === 'number' && !isNaN(val)
      ? val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : '0.00';

  const balanceFields = [
    { label: 'Main Balance', key: 'mainBalance' },
    { label: 'Interest Balance', key: 'interestBalance' },
    { label: 'Total Deposit', key: 'totalDeposit' },
    { label: 'Total Earn', key: 'totalEarn' },
  ];

  const navItems = [
    { icon: <FaWallet />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaWallet />, label: 'Portfolio', path: '/portfolio' },
    { icon: <FaMoneyBillWave />, label: 'Plans', path: '/investmentPlans' },
    { icon: <FaListAlt />, label: 'Transactions', path: '/transaction' },
  ];

  const otherLinks = [
    { icon: <FaPlusCircle />, label: 'Add Funds', path: '/addFunds' },
    { icon: <FaHistory />, label: 'Deposit History', path: '/depositHistory' },
    { icon: <FaPaperPlane />, label: 'Withdrawal', path: '/withdrawal' },
    { icon: <FaPaperPlane />, label: 'Withdrawal History', path: '/withdrawalHistory' },
    { icon: <FaUserFriends />, label: 'Referral', path: 'referral' },
    { icon: <FaHeadset />, label: 'Support', path: '/support' },
  ];

  return (
    <div className="bg-[#0b1130]">
      {/* ─── DESKTOP SIDEBAR ─── */}
      <aside
        className={`hidden md:flex fixed md:static top-0 left-0 z-40
          transition-all duration-300
          ${collapsed ? 'w-20' : 'w-72'}
          bg-[#0f1a36] text-slate-200 flex-col justify-between
          shadow-2xl border-r border-slate-800 h-screen`}
      >
        <div className="flex-1 px-3 overflow-y-auto">
          <div className="flex justify-end mb-4 mt-5">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-slate-400 hover:text-white"
            >
              {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>

          <div className="mb-8 border rounded-lg p-4 bg-[#0f2a57]">
            {!collapsed && (
              <>
                <h4 className="text-sm text-slate-300">
                  Account Balance{' '}
                  <span className="ml-2 text-xs px-2 py-1 bg-yellow-400 text-black rounded">
                    USD
                  </span>
                </h4>

                {isLoading ? (
                  <p className="text-sm text-slate-400 mt-3">Loading balances...</p>
                ) : (
                  balanceFields.map(({ label, key }) => (
                    <div key={key} className="mt-3">
                      <p className="text-xs text-slate-300">{label}</p>
                      <p className="text-lg font-semibold mt-1">
                        ${formatMoney((dashboard as any)?.[key] || 0)}
                      </p>
                    </div>
                  ))
                )}

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => router.push('/addFunds')}
                    className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
                  >
                    Deposit
                  </button>
                  <button
                    onClick={() => router.push('/investmentPlans')}
                    className="flex-1 bg-slate-700 text-white py-2 rounded hover:bg-slate-600"
                  >
                    Invest
                  </button>
                </div>
              </>
            )}
          </div>

          <nav className="space-y-4">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => router.push(item.path)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                  pathname === item.path
                    ? 'bg-green-600 text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </div>
            ))}

            {!collapsed && <div className="border-t border-slate-700 my-4"></div>}

            {otherLinks.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (item.path === 'referral') {
                    setShowReferralModal(true);
                  } else {
                    router.push(item.path);
                  }
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                  pathname === item.path
                    ? 'bg-green-600 text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </div>
            ))}
          </nav>
        </div>

        <div
          onClick={() => logout()}
          className="flex items-center gap-3 px-3 py-4 cursor-pointer text-red-400 hover:bg-red-500/10 rounded-lg transition-all mx-3 mb-3"
        >
          <FaSignOutAlt />
          {!collapsed && <span>Logout</span>}
        </div>
      </aside>

      {/* ─── MOBILE BOTTOM TAB BAR ─── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f1a36] border-t border-slate-700 flex items-center justify-around px-1 py-2 shadow-2xl">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => router.push(item.path)}
            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg text-xs transition-all min-w-0 flex-1 ${
              pathname === item.path
                ? 'text-green-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className={`text-lg ${pathname === item.path ? 'text-green-400' : ''}`}>
              {item.icon}
            </span>
            <span className="truncate w-full text-center">{item.label}</span>
          </button>
        ))}

        {/* More tab */}
        <button
          onClick={() => setMobileMoreOpen(true)}
          className="flex flex-col items-center gap-1 px-2 py-1 rounded-lg text-xs text-slate-400 hover:text-slate-200 transition-all flex-1"
        >
          <span className="text-lg"><FaEllipsisH /></span>
          <span>More</span>
        </button>
      </nav>

      {/* ─── MOBILE "MORE" BOTTOM SHEET ─── */}
      {mobileMoreOpen && (
        <>
          <div
            onClick={() => setMobileMoreOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f1a36] rounded-t-2xl border-t border-slate-700 shadow-2xl pb-6 pt-4 px-4 animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-semibold text-base">More Options</h3>
              <button onClick={() => setMobileMoreOpen(false)} className="text-slate-400 hover:text-white">
                <FaTimes size={18} />
              </button>
            </div>

            {/* Balance summary strip */}
            <div className="bg-[#0f2a57] rounded-lg p-3 mb-4 grid grid-cols-2 gap-2">
              {isLoading ? (
                <p className="text-xs text-slate-400 col-span-2">Loading balances...</p>
              ) : (
                balanceFields.map(({ label, key }) => (
                  <div key={key}>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="text-sm font-semibold text-white">
                      ${formatMoney((dashboard as any)?.[key] || 0)}
                    </p>
                  </div>
                ))
              )}
              <div className="col-span-2 flex gap-2 mt-2">
                <button
                  onClick={() => { router.push('/addFunds'); setMobileMoreOpen(false); }}
                  className="flex-1 bg-green-500 text-white py-1.5 rounded text-sm hover:bg-green-600"
                >
                  Deposit
                </button>
                <button
                  onClick={() => { router.push('/investmentPlans'); setMobileMoreOpen(false); }}
                  className="flex-1 bg-slate-700 text-white py-1.5 rounded text-sm hover:bg-slate-600"
                >
                  Invest
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {otherLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (item.path === 'referral') {
                      setShowReferralModal(true);
                    } else {
                      router.push(item.path);
                    }
                    setMobileMoreOpen(false);
                  }}
                  className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-xs transition-all ${
                    pathname === item.path
                      ? 'bg-green-600 text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-center leading-tight">{item.label}</span>
                </button>
              ))}

              {/* Logout tile */}
              <button
                onClick={() => { logout(); setMobileMoreOpen(false); }}
                className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-xs bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
              >
                <span className="text-base"><FaSignOutAlt /></span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* ─── REFERRAL MODAL (unchanged) ─── */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#0f1a36] p-6 rounded-lg w-96 text-white relative shadow-2xl border border-slate-700 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-2 text-center text-green-400">
              Invite. Earn. Grow.
            </h2>
            <p className="text-sm text-slate-300 mb-4 text-center">
              Turn your network into income. Share your unique referral link and earn real cash
              whenever your friends deposit or invest.
            </p>

            <div className="mb-5">
              <h3 className="font-semibold text-lg mb-2 text-green-400">How it works:</h3>
              <ul className="space-y-3 text-sm text-slate-300 list-disc list-inside">
                <li>
                  <span className="font-semibold text-white">Share your link —</span> Send it to
                  friends, family, or anyone ready to start trading.
                </li>
                <li>
                  <span className="font-semibold text-white">They join and invest —</span> When they
                  make their first qualifying deposit or investment, you get rewarded.
                </li>
                <li>
                  <span className="font-semibold text-white">You earn automatically —</span> Earn up
                  to <span className="text-green-400 font-semibold">$150 per referral</span>,
                  credited straight to your balance.
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h3 className="font-semibold text-lg mb-2 text-green-400">Why it matters:</h3>
              <ul className="space-y-3 text-sm text-slate-300 list-disc list-inside">
                <li>
                  <span className="font-semibold text-white">Unlimited referrals —</span> the more
                  you invite, the more you earn.
                </li>
                <li>
                  <span className="font-semibold text-white">Instant credit —</span> rewards hit
                  your wallet in real time.
                </li>
                <li>
                  <span className="font-semibold text-white">Transparent tracking —</span> monitor
                  your invites and earnings directly in your dashboard.
                </li>
              </ul>
            </div>

            <p className="text-sm text-slate-300 mb-4 text-center">
              Start building your network and watch your balance grow.
            </p>

            <div className="bg-[#0f2a57] px-3 py-2 rounded flex justify-between items-center mb-4">
              <span className={`truncate text-xs ${!refLink ? 'text-slate-400' : ''}`}>
                {refLink || 'Your referral link will appear here when available.'}
              </span>
              <button
                title="Copy referral link"
                onClick={() => copyReferralLink(refLink)}
                className={`ml-2 ${refLink ? 'text-green-400 hover:text-green-300' : 'text-slate-600 cursor-not-allowed'}`}
                disabled={!refLink}
              >
                <FaCopy />
              </button>
            </div>

            {copied && (
              <p className="text-green-400 text-xs mb-3 animate-pulse text-center">
                ✅ Referral link copied!
              </p>
            )}

            <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-2 font-medium">Debug Information:</p>
              <div className="text-xs space-y-1">
                <p className="text-green-400">✓ User: {user?.email || 'Not logged in'}</p>
                <p className={`${user?.referralCode ? 'text-green-400' : 'text-yellow-400'}`}>
                  ↳ Referral Code: {user?.referralCode || 'Not loaded'}
                </p>
                <p className="text-blue-400">🔗 Generated Link: {refLink || 'No link'}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={fetchReferralCodeDirectly}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
                  >
                    Refresh Referral Code
                  </button>
                  <button
                    onClick={() => refreshUser()}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs"
                  >
                    Refresh User Data
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowReferralModal(false)}
              className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}