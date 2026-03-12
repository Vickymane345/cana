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
  FaBars,
  FaTimes,
  FaHeadset,
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
  const [mobileOpen, setMobileOpen] = useState(false);

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
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

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
      // If we have referral code, use it
      const link = `https://tradeglobalfx.org/signup?ref=${encodeURIComponent(user.referralCode)}`;
      setRefLink(link);
      console.log('✅ Using existing referral code:', user.referralCode);
    } else if (user?.email) {
      // If user exists but no referral code, fetch it
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

      // Use userId instead of session-based endpoint
      const response = await fetch(`/api/user/referral?userId=${user.id}`);

      if (response.ok) {
        const data = await response.json();
        console.log('📦 Referral data received:', data);

        if (data.referralCode) {
          // Update the refLink
          const newLink = `https://tradeglobalfx.org/signup?ref=${encodeURIComponent(data.referralCode)}`;
          setRefLink(newLink);

          // Update user context
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

          // Update localStorage
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

    { icon: <FaMoneyBillWave />, label: 'Investment Plans', path: '/investmentPlans' },
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
      <div className="md:hidden  p-2 z-30">
        <button
          title="Open sidebar"
          onClick={() => setMobileOpen(true)}
          className="text-white bg-[#0f1a36] p-2 rounded-lg shadow-lg hover:bg-[#14244d] transition"
        >
          <FaBars size={22} />
        </button>
      </div>

      <aside
        className={`fixed md:static top-0 left-0 z-40
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-300
          ${collapsed ? 'w-20' : 'w-72'}
          bg-[#0f1a36] text-slate-200 flex flex-col justify-between
          shadow-2xl border-r border-slate-800
          md:overflow-hidden overflow-y-auto md:h-auto h-screen`}
      >
        <div className="flex justify-between items-center mb-4 mt-5 md:hidden px-3">
          <button
            title="close"
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-red-400"
          >
            <FaTimes size={20} />
          </button>
      </div>

        <div className="flex-1 px-3">
          <div className="hidden md:flex justify-end mb-4">
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
                onClick={() => {
                  if (item.path === 'referral') {
                    setShowReferralModal(true);
                  } else {
                    router.push(item.path);
                    setMobileOpen(false);
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

            {!collapsed && <div className="border-t border-slate-700 my-4"></div>}

            {otherLinks.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  router.push(item.path);
                  setMobileOpen(false);
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
          onClick={() => {
            logout();
            setMobileOpen(false);
          }}
          className="flex items-center gap-3 px-3 py-2 mt-6 cursor-pointer text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
        >
          <FaSignOutAlt />
          {!collapsed && <span>Logout</span>}
        </div>
      </aside>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden animate-fade-in"
        ></div>
      )}

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

            {/* Add this after the copy button section */}
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
              className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
                >
              Close
                </button>
              </div>
            </div>
      )}
    </div>
  );
}
