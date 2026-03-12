'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import {
  FaUserFriends,
  FaCopy,
  FaShareAlt,
  FaCoins,
  FaUsers,
  FaLink,
  FaCheck,
  FaExclamationTriangle,
  FaUserCircle,
  FaTimes,
} from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import NotificationButton from '@/components/NotificationButton';
import Image from 'next/image';
import logo from '@/app/assets/navbar/Tradelogo.png';
import { useReferralStats } from '@/lib/hooks/useReferralStats';

export default function ReferralPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [refLink, setRefLink] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(true); // Modal is now visible by default on page
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Use the referral stats hook
  const { data: referralStats, isLoading, isError } = useReferralStats(user?.id);

  useEffect(() => {
    if (!user) {
      router.push('/screens/auth/Signin');
      return;
    }

    // Generate referral link
    if (user?.referralCode) {
      const link = `https://tradeglobalfx.org/signup?ref=${encodeURIComponent(user.referralCode)}`;
      setRefLink(link);
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

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(refLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const shareReferralLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Trade Global FX',
          text: 'Sign up with my referral link and start investing!',
          url: refLink,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyReferralLink();
    }
  };

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0b1130] text-white">
        Redirecting to sign in...
      </div>
    );

  if (isLoading || !referralStats)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0b1130] text-white space-y-6">
        <AiOutlineLoading3Quarters className="animate-spin" size={40} />
        <Image src={logo} alt="Trades Global FX" width={160} height={60} />
        <p className="text-slate-400 text-sm">Loading referral program...</p>
      </div>
    );

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0b1130] text-white space-y-6">
        <FaExclamationTriangle className="text-red-400" size={40} />
        <p className="text-slate-400 text-sm">Failed to load referral stats. Please try again.</p>
      </div>
    );
  }

  const fullName = `${user.firstName} ${user.lastName}`.trim();

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />

      {/* Modal - Now shown by default on page */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#0f1a36] p-6 rounded-lg w-full max-w-md text-white relative shadow-2xl border border-slate-700 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

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

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <FaUserFriends className="text-blue-400" size={28} />
            <h1 className="text-2xl md:text-3xl font-semibold">Referral Program</h1>
          </div>

          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            <NotificationButton />

            {/* User dropdown */}
            <div className="relative">
              <button
                type="button"
                title="User menu"
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

        {/* Referral Stats */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200">Your Referral Performance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <FaUsers className="text-blue-400" size={20} />
                <h3 className="text-lg font-medium">Total Referrals</h3>
              </div>
              <p className="text-3xl font-bold text-white">{referralStats?.totalReferrals || 0}</p>
              <p className="text-sm text-slate-400 mt-1">People you've brought to the platform</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <FaCoins className="text-green-400" size={20} />
                <h3 className="text-lg font-medium">Total Earnings</h3>
              </div>
              <p className="text-3xl font-bold text-white">
                ${(referralStats?.totalEarnings || 0).toFixed(2)}
              </p>
              <p className="text-sm text-slate-400 mt-1">From successful referrals</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <FaCoins className="text-yellow-400" size={20} />
                <h3 className="text-lg font-medium">Pending Rewards</h3>
              </div>
              <p className="text-3xl font-bold text-white">
                ${(referralStats?.pendingRewards || 0).toFixed(2)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Awaiting approval</p>
            </div>
          </div>
        </section>

        {/* Referral Link Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200">Your Referral Link</h2>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <FaLink className="text-purple-400" size={20} />
              <h3 className="text-lg font-medium">Share this link to earn rewards</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-slate-900 rounded-lg p-4 border border-slate-600">
                <p className="text-sm text-slate-300 break-all font-mono">{refLink}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={copyReferralLink}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-lg transition-colors"
                >
                  {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>

                <button
                  onClick={shareReferralLink}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-3 rounded-lg transition-colors"
                >
                  <FaShareAlt />
                  Share
                </button>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-700">
              <p className="text-sm text-blue-300">
                <strong></strong> Share your unique referral link with friends and
                family. When they sign up and make their first deposit, you earn up to $150 in
                referral rewards!
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - Replacing the existing section with your write-up */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200">How It Works</h2>

          <div className="bg-[#0f1a36] p-6 rounded-lg w-full text-white relative shadow-2xl border border-slate-700 overflow-y-auto">
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
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-slate-200">Important Terms</h2>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <div className="flex items-start gap-3 mb-3">
              <FaExclamationTriangle className="text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium mb-2">Referral Program Rules</h3>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• You cannot use your own referral code</li>
                  <li>• Rewards are granted only for verified, successful referrals</li>
                  <li>• Abuse, manipulation, or fraudulent activity leads to suspension</li>
                  <li>
                    • Referral rewards are processed after the referred user's first deposit is
                    approved
                  </li>
                  <li>• The referral program is subject to change at any time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
