'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import logo from '@/app/assets/navbar/Tradelogo.png';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  phone: yup.string().optional(),
  referralCode: yup.string().optional(),
});

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivateKeyModal, setShowPrivateKeyModal] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [formData, setFormData] = useState<any>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsScrolled, setTermsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [understandLoss, setUnderstandLoss] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });

  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setValue('referralCode', ref);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: any) => {
    setFormData(data);
    setShowTermsModal(true);
  };

  const handleTermsAccept = async () => {
    if (!termsAccepted || !termsScrolled) return;

    setShowTermsModal(false);
    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          termsAccepted: true,
          termsAcceptedIP: '',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setPrivateKey(result.privateKey);
        setShowPrivateKeyModal(true);
      } else {
        setModal({
          open: true,
          message: result.error || 'Signup failed. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      setModal({
        open: true,
        message: 'Signup failed. Please try again.',
        type: 'error',
      });
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(privateKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadKey = () => {
    const blob = new Blob([privateKey], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'private-key.txt';
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  const handleContinue = () => {
    if (!copied && !downloaded) return;
    if (!understandLoss) return;
    router.push('/screens/auth/Signin');
  };

  return (
    // ─── LAYOUT SHELL ── only new wrapper + background added ───────────────────
    <div
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(16,36,100,0.95) 0%, #070d24 55%, #0b1130 100%)',
      }}
    >
      {/* ── decorative background blobs (new, purely visual) ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* top-left glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* bottom-right glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-60px',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* subtle dot-grid pattern */}
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', inset: 0, opacity: 0.035 }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* ── two-column flex container ── */}
      <div
        className="relative flex flex-col lg:flex-row items-stretch justify-center min-h-screen"
        style={{ zIndex: 1 }}
      >

        {/* ══════════════════════════════════════════════════════════════
            LEFT PANEL — new addition, no existing code touched
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hidden lg:flex flex-col justify-center items-start px-16 py-16"
          style={{
            flex: '0 0 48%',
            maxWidth: '580px',
            background:
              'linear-gradient(135deg, rgba(20,33,61,0.60) 0%, rgba(7,13,36,0.30) 100%)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* brand mark */}
          <div className="flex items-center gap-3 mb-12">
             <Image
            src={logo}
            alt="Logo"
            className="w-28 sm:w-32 md:w-36 h-auto"
            priority
          />
          
          </div>

          {/* main illustration */}
          <div className="w-full mb-12" style={{ maxWidth: '420px' }}>
            <svg
              viewBox="0 0 420 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto' }}
            >
              {/* background card */}
              <rect x="20" y="30" width="380" height="280" rx="24" fill="rgba(20,33,61,0.7)" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>

              {/* chart area */}
              <rect x="44" y="60" width="332" height="160" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

              {/* chart grid lines */}
              {[90, 115, 140, 165, 190].map((y, i) => (
                <line key={i} x1="64" y1={y} x2="356" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 6"/>
              ))}

              {/* chart line — BTC curve */}
              <polyline
                points="64,185 100,162 136,170 172,135 208,118 244,128 280,95 316,110 352,80"
                stroke="url(#lineGradGreen)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* area fill under line */}
              <polygon
                points="64,185 100,162 136,170 172,135 208,118 244,128 280,95 316,110 352,80 352,200 64,200"
                fill="url(#areaFillGreen)"
                opacity="0.35"
              />

              {/* chart line — ETH curve (secondary) */}
              <polyline
                points="64,175 100,178 136,160 172,165 208,145 244,155 280,140 316,150 352,130"
                stroke="url(#lineGradBlue)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.65"
              />

              {/* peak dot */}
              <circle cx="352" cy="80" r="5" fill="#22c55e" opacity="0.9"/>
              <circle cx="352" cy="80" r="10" fill="#22c55e" opacity="0.15"/>

              {/* y-axis labels */}
              <text x="48" y="93" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">$68k</text>
              <text x="48" y="168" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">$54k</text>
              <text x="48" y="198" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">$48k</text>

              {/* x-axis labels */}
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'].map((m, i) => (
                <text key={m} x={64 + i * 36} y={218} fill="rgba(255,255,255,0.22)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">{m}</text>
              ))}

              {/* legend */}
              <circle cx="68" cy="240" r="5" fill="#22c55e"/>
              <text x="78" y="244" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="sans-serif">BTC/USD</text>
              <circle cx="148" cy="240" r="5" fill="#3b82f6"/>
              <text x="158" y="244" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="sans-serif">ETH/USD</text>

              {/* stats row */}
              {[
                { label: 'Portfolio', value: '+38.4%', color: '#22c55e', x: 44 },
                { label: 'Active Plans', value: '3', color: '#facc15', x: 168 },
                { label: 'Total Yield', value: '$12.8k', color: '#3b82f6', x: 280 },
              ].map(({ label, value, color, x }) => (
                <g key={label}>
                  <rect x={x} y="262" width="112" height="36" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <text x={x + 56} y="276" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="sans-serif" textAnchor="middle">{label}</text>
                  <text x={x + 56} y="290" fill={color} fontSize="13" fontWeight="700" fontFamily="monospace" textAnchor="middle">{value}</text>
                </g>
              ))}

              {/* gradient defs */}
              <defs>
                <linearGradient id="lineGradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id="lineGradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="1"/>
                </linearGradient>
                <linearGradient id="areaFillGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* headline copy */}
          <div style={{ maxWidth: '400px' }}>
            <h2
              style={{
                fontFamily: "'Sora', 'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '1.75rem',
                lineHeight: 1.25,
                color: '#ffffff',
                marginBottom: '0.85rem',
                letterSpacing: '-0.01em',
              }}
            >
              Your gateway to smarter
              <br />
              <span style={{ color: '#22c55e' }}>crypto investments.</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.48)',
                maxWidth: '340px',
              }}
            >
              Join thousands of investors earning structured ROI on BTC, ETH, and
              more — with transparent plans, secure wallets, and real-time tracking.
            </p>
          </div>

          {/* trust badges */}
          <div className="flex items-center gap-6 mt-10">
            {[
              { icon: '🔒', label: 'Bank-grade security' },
              { icon: '⚡', label: 'Instant deposits' },
              { icon: '📈', label: 'Up to 55% ROI' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span style={{ fontSize: '1rem' }}>{icon}</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.38)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            RIGHT PANEL — wraps existing code WITHOUT altering a single line
        ══════════════════════════════════════════════════════════════ */}
        <div
          className="flex flex-col items-center justify-center flex-1 px-6 py-10"
          style={{ minHeight: '100vh' }}
        >

          {/* ── YOUR ORIGINAL CODE BELOW — ZERO MODIFICATIONS ── */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#14213d]/90 backdrop-blur-sm p-8 rounded-2xl w-full max-w-md shadow-2xl"
          >
            <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('firstName')}
                  placeholder="First Name"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register('lastName')}
                  placeholder="Last Name"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mt-3">
              <input
                {...register('email')}
                placeholder="Email"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Username */}
            <div className="mt-3">
              <input
                {...register('username')}
                placeholder="Username"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.username && (
                <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative mt-3">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Password"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-xs text-blue-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative mt-3">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Confirm Password"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-xs text-blue-600"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="mt-3">
              <input
                {...register('phone')}
                placeholder="Phone (optional)"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-500 hover:bg-green-600 py-3 rounded mt-5 font-semibold transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>

            <p className="text-sm mt-6 text-center text-gray-300">
              Already have an account?{' '}
              <a href="/screens/auth/Signin" className="text-blue-400 underline hover:text-blue-300">
                Login
              </a>
            </p>
          </motion.form>

          {/* Alert Modal */}
          <AnimatePresence>
            {modal.open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-[#14213d] text-white rounded-2xl shadow-2xl p-6 w-80 text-center border-2 ${
                    modal.type === 'success' ? 'border-green-500' : 'border-red-500'
                  }`}
                >
                  <h2
                    className={`text-lg font-semibold mb-3 ${
                      modal.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {modal.type === 'success' ? 'Success' : 'Error'}
                  </h2>
                  <p className="text-slate-300 mb-5">{modal.message}</p>
                  <button
                    onClick={() => setModal((prev) => ({ ...prev, open: false }))}
                    className={`px-4 py-2 rounded font-semibold ${
                      modal.type === 'success'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    OK
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TERMS MODAL (FULL TEXT INSERTED HERE) */}
          <AnimatePresence>
            {showTermsModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#14213d] text-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto"
                >
                  <h2 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h2>

                  {/* REPLACED CONTENT STARTS HERE */}
                  {/* REPLACED CONTENT STARTS HERE */}

                  <div className="text-slate-300 text-sm space-y-6 overflow-y-auto flex-1 mb-6">
                    {/* Header */}
                    <div className="text-center border-b border-gray-700 pb-4">
                      <h1 className="text-xl font-bold mb-2">TradesGlobalFX</h1>
                      <p className="text-gray-400">Last Updated: 6th October 2025</p>
                    </div>

                    {/* Introduction */}
                    <section>
                      <p>
                        These Terms and Conditions ("Terms") define the operating framework for
                        TradesGlobalFX ("the Platform," "we," "us," "our"). By accessing, onboarding, or
                        transacting on the Platform, the user ("you," "your") acknowledges these Terms
                        as the governing standard for all interactions.
                      </p>
                    </section>

                    {/* Section 1: Platform Definition & Scope */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        1. Platform Definition & Scope
                      </h3>
                      <p>
                        TradesGlobalFX is a full-stack cryptocurrency investment platform enabling users
                        to deposit digital assets, execute investment plans, track ROI, and manage
                        withdrawals in a secure, automated environment. The Platform includes all web
                        assets, API services, dashboards, and system-driven notifications.
                      </p>
                    </section>

                    {/* Section 2: Eligibility & User Onboarding */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        2. Eligibility & User Onboarding
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Minimum age requirement: 18 years.</li>
                        <li>Cryptocurrency engagements must be legal in your jurisdiction.</li>
                        <li>Registration requires accurate, up-to-date identity information.</li>
                        <li>
                          We reserve full discretion to decline, suspend, or terminate any account.
                        </li>
                      </ul>
                    </section>

                    {/* Section 3: User Accounts & Security */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        3. User Accounts & Security
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Users are responsible for securing login credentials and devices.</li>
                        <li>Unauthorized activities must be reported immediately.</li>
                        <li>
                          The Platform employs industry-standard security measures (hashing,
                          rate-limiting, CSRF protection, audit logging).
                        </li>
                        <li>
                          No digital system is immune to compromise; by using the Platform, you
                          acknowledge residual operational risk.
                        </li>
                      </ul>
                    </section>

                    {/* Section 4: Deposits */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">4. Deposits</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Supported assets: BTC, ETH, USDT (ERC20, BSC), SOL, XRP.</li>
                        <li>Minimum deposit: $1,000 USD, maximum: $1,000,000 USD.</li>
                        <li>All deposits require admin approval after blockchain confirmation.</li>
                        <li>
                          Deposits sent to incorrect wallet addresses are irreversible; we do not
                          recover or replace misdirected funds.
                        </li>
                        <li>The Platform may impose deposit fees, clearly stated before processing.</li>
                      </ul>
                    </section>

                    {/* Section 5: Withdrawals */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">5. Withdrawals</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>All withdrawal requests move through an admin approval workflow.</li>
                        <li>
                          Users must provide accurate external wallet addresses. Incorrect entries
                          resulting in loss are borne solely by the user.
                        </li>
                        <li>
                          Processing times vary based on network conditions, compliance checks, security
                          reviews, and operational capacity.
                        </li>
                        <li>Withdrawal fees—where applicable—will be disclosed prior to execution.</li>
                      </ul>
                    </section>

                    {/* Section 6: Investment Plans */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">6. Investment Plans</h3>
                      <p className="mb-3">
                        Users may allocate funds into the following structured plans:
                      </p>

                      <div className="overflow-x-auto mb-3">
                        <table className="min-w-full border border-gray-600">
                          <thead>
                            <tr className="bg-gray-800">
                              <th className="border border-gray-600 px-4 py-2">Plan</th>
                              <th className="border border-gray-600 px-4 py-2">Duration</th>
                              <th className="border border-gray-600 px-4 py-2">ROI</th>
                              <th className="border border-gray-600 px-4 py-2">Min</th>
                              <th className="border border-gray-600 px-4 py-2">Max</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-600 px-4 py-2">Mining</td>
                              <td className="border border-gray-600 px-4 py-2">30 days</td>
                              <td className="border border-gray-600 px-4 py-2">30%</td>
                              <td className="border border-gray-600 px-4 py-2">$1,000</td>
                              <td className="border border-gray-600 px-4 py-2">$19,999</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-600 px-4 py-2">Premium</td>
                              <td className="border border-gray-600 px-4 py-2">60 days</td>
                              <td className="border border-gray-600 px-4 py-2">40%</td>
                              <td className="border border-gray-600 px-4 py-2">$20,000</td>
                              <td className="border border-gray-600 px-4 py-2">$99,999</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-600 px-4 py-2">Gold</td>
                              <td className="border border-gray-600 px-4 py-2">90 days</td>
                              <td className="border border-gray-600 px-4 py-2">55%</td>
                              <td className="border border-gray-600 px-4 py-2">$100,000</td>
                              <td className="border border-gray-600 px-4 py-2">$1,000,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="font-semibold mb-2">Key investment rules:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Funds are locked for the duration of the plan.</li>
                        <li>
                          Early termination—when permitted—will incur penalties or forfeiture of accrued
                          ROI.
                        </li>
                        <li>ROI accrual is automated and credited at maturity.</li>
                        <li>Past performance does not guarantee future results.</li>
                      </ul>
                    </section>

                    {/* Section 7: Market Risk Disclosure */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        7. Market Risk Disclosure
                      </h3>
                      <p className="mb-2">
                        Cryptocurrency markets are inherently volatile. By investing, you acknowledge:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>You may lose part or all of your invested capital.</li>
                        <li>TradesGlobalFX does not offer financial, legal, or tax advice.</li>
                        <li>
                          System performance may be impacted by network issues, regulatory actions, or
                          third-party service disruptions.
                        </li>
                        <li>You are solely responsible for your investment decisions.</li>
                      </ul>
                    </section>

                    {/* Section 8: Referral & Rewards Program */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        8. Referral & Rewards Program
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reward points are granted based on verified, successful referrals.</li>
                        <li>
                          Abuse, manipulation, or fraudulent referral activity leads to suspension and
                          point forfeiture.
                        </li>
                        <li>
                          TradesGlobalFX may modify or discontinue the rewards framework at any time.
                        </li>
                      </ul>
                    </section>

                    {/* Section 9: Support & Escalation */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">9. Support & Escalation</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          All support requests must flow through the in-platform ticketing system.
                        </li>
                        <li>Response prioritization aligns with issue severity.</li>
                        <li>Our decisions on disputes and account reviews are final.</li>
                      </ul>
                    </section>

                    {/* Section 10: Prohibited Conduct */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">10. Prohibited Conduct</h3>
                      <p className="mb-2">Users are strictly barred from:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Money laundering, fraud, phishing, or illegal financial activity.</li>
                        <li>
                          Attempting to manipulate balances, exploit bugs, or bypass security protocols.
                        </li>
                        <li>Submitting forged documentation or misleading information.</li>
                        <li>Reverse-engineering or disrupting platform infrastructure.</li>
                      </ul>
                      <p className="mt-2">
                        Violations result in account suspension, asset freeze, and reporting to relevant
                        authorities.
                      </p>
                    </section>

                    {/* Section 11: Account Suspension & Termination */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        11. Account Suspension & Termination
                      </h3>
                      <p className="mb-2">We retain the right to:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Suspend accounts under investigation.</li>
                        <li>
                          Terminate accounts for breaches, regulatory obligations, or suspicious
                          activity.
                        </li>
                        <li>Withhold withdrawals pending KYC, AML, or security reviews.</li>
                      </ul>
                      <p className="mt-2">
                        Users may deactivate accounts at any time, subject to the resolution of
                        outstanding balances and requests.
                      </p>
                    </section>

                    {/* Section 12: Liability Framework */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">12. Liability Framework</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Our liability is capped at the total amount of verified deposits in your
                          Platform account.
                        </li>
                        <li>
                          We are not responsible for:
                          <ul className="list-circle pl-5 mt-1 space-y-1">
                            <li>Network failures</li>
                            <li>Market volatility</li>
                            <li>User errors (e.g., wrong wallet address)</li>
                            <li>Third-party service disruptions</li>
                          </ul>
                        </li>
                        <li>
                          We do not provide indemnity for consequential, indirect, or incidental
                          damages.
                        </li>
                      </ul>
                      <p className="mt-2">
                        Users agree to indemnify TradesGlobalFX against claims resulting from misuse of
                        the Platform.
                      </p>
                    </section>

                    {/* Section 13: Data Usage & Privacy */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        13. Data Usage & Privacy
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          We collect and process data to support authentication, compliance, analytics,
                          and operations.
                        </li>
                        <li>
                          Data handling follows industry-standard principles for security and regulatory
                          alignment.
                        </li>
                        <li>
                          Details are outlined in our separate <strong>Privacy Policy</strong>.
                        </li>
                      </ul>
                    </section>

                    {/* Section 14: Jurisdiction & Legal Governance */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        14. Jurisdiction & Legal Governance
                      </h3>
                      <p className="mb-2">
                        Cryptocurrency operates in a multi-jurisdictional global environment with no
                        unified regulatory framework. Each country maintains its own rules, standards,
                        and supervisory expectations.
                      </p>
                      <p>TradesGlobalFX adopts a governance stance aligned with:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          International AML/CFT guidelines issued by the Financial Action Task Force
                          (FATF)
                        </li>
                        <li>Industry-standard compliance practices</li>
                      </ul>
                    </section>

                    {/* Section 15: Amendments & Versioning */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        15. Amendments & Versioning
                      </h3>
                      <p>
                        TradesGlobalFX may update these Terms periodically. Continued platform usage
                        signals acceptance of revised Terms. Major updates will be communicated via
                        in-app notifications or email.
                      </p>
                    </section>

                    {/* Section 16: Contact & Compliance */}
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        16. Contact & Compliance
                      </h3>
                      <ul className="space-y-1">
                        <li>
                          Email:{' '}
                          <a
                            href="mailto:support@tradesglobalfx.com"
                            className="text-blue-400 hover:underline"
                          >
                            support@tradesglobalfx.org
                          </a>
                        </li>
                        <li>
                          Website:{' '}
                          <a
                            href="https://www.tradesglobalfx.org"
                            className="text-blue-400 hover:underline"
                          >
                            https://www.tradesglobalfx.org
                          </a>
                        </li>
                      </ul>
                    </section>

                    {/* Privacy Policy Section */}
                    <section className="border-t border-gray-700 pt-6">
                      <h2 className="text-xl font-bold text-white mb-4">
                        TradesGlobalFX Privacy Policy
                      </h2>
                      <p className="text-gray-400 mb-4">Last Updated: 6th October 2025</p>

                      <p className="mb-4">
                        This Privacy Policy outlines how TradesGlobalFX ("we," "us," "our") collects,
                        processes, stores, and protects user data across our investment platform.
                      </p>

                      <h3 className="text-lg font-semibold text-white mb-2">1. Data We Collect</h3>
                      <p className="mb-2">We collect the following categories of data:</p>

                      <h4 className="font-semibold mt-3 mb-1">Account & Identity Data</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Name</li>
                        <li>Email</li>
                      </ul>

                      <h4 className="font-semibold mt-3 mb-1">Financial & Transactional Data</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Deposit information</li>
                        <li>Wallet addresses</li>
                        <li>Investment history</li>
                        <li>Withdrawal activity</li>
                        <li>Transaction logs</li>
                      </ul>

                      <h4 className="font-semibold mt-3 mb-1">Technical Data</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>IP address</li>
                        <li>Device identifiers</li>
                        <li>Browser metadata</li>
                        <li>Usage statistics</li>
                        <li>Security logs</li>
                      </ul>

                      <h4 className="font-semibold mt-3 mb-1">Support & Communications</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Messages sent via tickets</li>
                        <li>Email correspondence</li>
                        <li>System notifications</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        2. How We Use Your Data
                      </h3>
                      <p>
                        Data is processed to improve platform integrity and deliver operational value:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Account creation and authentication</li>
                        <li>Fraud prevention and AML/CFT compliance</li>
                        <li>Transaction execution</li>
                        <li>Investment allocation and ROI processing</li>
                        <li>Customer support and dispute resolution</li>
                        <li>System diagnostics and performance optimization</li>
                        <li>Regulatory obligations, when applicable</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        3. Data Storage & Security
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Encrypted databases</li>
                        <li>Hashed credentials</li>
                        <li>Rate-limiting and CSRF protection</li>
                        <li>Audit trails and access logs</li>
                        <li>Role-based admin permissions</li>
                      </ul>
                      <p className="mt-2">
                        We maintain best-practice security standards but cannot guarantee absolute
                        immunity from cyber threats.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">4. Data Sharing</h3>
                      <p className="mb-2">We do not sell user data.</p>
                      <p className="mb-2">We may share necessary data with:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Regulatory authorities (if legally required)</li>
                        <li>Payment and blockchain infrastructure providers</li>
                        <li>Security and compliance tools</li>
                        <li>Internal admin personnel</li>
                      </ul>
                      <p className="mt-2">
                        All sharing follows strict necessity and security protocols.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">5. Data Retention</h3>
                      <p className="mb-2">We retain data for as long as reasonably required for:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Regulatory obligations</li>
                        <li>Financial auditing</li>
                        <li>Dispute resolution</li>
                        <li>Operational analysis</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">6. User Rights</h3>
                      <p className="mb-2">Where supported by local law, users may request:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data access</li>
                        <li>Data correction</li>
                        <li>Account deletion</li>
                        <li>Processing limitations</li>
                      </ul>
                      <p className="mt-2">Requests must go through our support system.</p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        7. International Data Transfers
                      </h3>
                      <p>
                        Due to the global nature of cryptocurrency systems, data may be processed or
                        stored across jurisdictions. We apply standard safeguards to maintain security
                        and compliance.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">8. Policy Updates</h3>
                      <p>
                        We may revise this Privacy Policy. Continued use of the platform signifies
                        acceptance of updates.
                      </p>
                    </section>

                    {/* Risk Disclosure Section */}
                    <section className="border-t border-gray-700 pt-6">
                      <h2 className="text-xl font-bold text-white mb-4">
                        TradesGlobalFX – Risk Disclosure Statement
                      </h2>
                      <p className="text-gray-400 mb-4">Last Updated: 6th October 2025</p>

                      <p className="mb-4">
                        Cryptocurrency investments carry high risk. Users must evaluate personal risk
                        tolerance before participating.
                      </p>

                      <h3 className="text-lg font-semibold text-white mb-2">1. Market Volatility</h3>
                      <p>
                        Digital assets can experience extreme price fluctuations. ROI is not guaranteed.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        2. Technological Risks
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Blockchain congestion</li>
                        <li>Smart-contract or protocol failures</li>
                        <li>Network splits, forks, or disruptions</li>
                        <li>Wallet compatibility issues</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        3. Regulatory Risks
                      </h3>
                      <p className="mb-2">Crypto laws vary globally. New regulations may impact:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Asset availability</li>
                        <li>Withdrawal permissions</li>
                        <li>Platform operations</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        4. Cybersecurity Risks
                      </h3>
                      <p className="mb-2">While we deploy best-practice controls, risks include:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Phishing</li>
                        <li>Account compromise</li>
                        <li>Malware</li>
                        <li>Third-party system failures</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">5. Liquidity Risks</h3>
                      <p>Certain assets may face low liquidity, impacting withdrawals or pricing.</p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        6. Operational Risks
                      </h3>
                      <p>These include:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Technical outages</li>
                        <li>Scheduled and unscheduled maintenance</li>
                        <li>Third-party dependency failures</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        7. No Financial Advice
                      </h3>
                      <p>
                        TradesGlobalFX does not offer investment, tax, or legal advice. All investment
                        decisions are self-directed.
                      </p>
                    </section>

                    {/* User Agreement Section */}
                    <section className="border-t border-gray-700 pt-6">
                      <h2 className="text-xl font-bold text-white mb-4">
                        TradesGlobalFX User Agreement
                      </h2>
                      <p className="text-gray-400 mb-4">Last Updated: 6th October 2025</p>

                      <p className="mb-4">
                        This User Agreement governs the relationship between TradesGlobalFX and its
                        users.
                      </p>

                      <h3 className="text-lg font-semibold text-white mb-2">1. Acceptance</h3>
                      <p>
                        Using the Platform constitutes acceptance of this Agreement, the Terms &
                        Conditions, the Privacy Policy, and any other supporting governance documents.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        2. Account Responsibilities
                      </h3>
                      <p className="mb-2">Users agree to:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Provide accurate registration details</li>
                        <li>Maintain account confidentiality</li>
                        <li>Avoid multi-accounting or fraudulent activities</li>
                        <li>Comply with security instructions issued by the Platform</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        3. Platform Responsibilities
                      </h3>
                      <p className="mb-2">TradesGlobalFX will:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Maintain operational availability when possible</li>
                        <li>Process transactions in alignment with platform logic</li>
                        <li>Apply security best practices</li>
                        <li>Provide ticket-based customer support</li>
                      </ul>
                      <p className="mt-2">
                        We are not responsible for third-party disruptions beyond our operational
                        control.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        4. Transactions & Investments
                      </h3>
                      <p className="mb-2">Users acknowledge:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>All deposits and withdrawals require admin approval</li>
                        <li>Blockchain transactions are irreversible</li>
                        <li>Investment plans have fixed durations</li>
                        <li>ROI projections are estimates, not guarantees</li>
                        <li>Early exit rules and penalties apply</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">5. Prohibited Use</h3>
                      <p className="mb-2">Users may not:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Engage in illegal or suspicious transactions</li>
                        <li>Use the Platform for money laundering, fraud, or terrorist financing</li>
                        <li>Spam, hack, or manipulate system functions</li>
                        <li>Interfere with security protocols</li>
                        <li>Attempt chargebacks after legitimate deposits</li>
                      </ul>
                      <p className="mt-2">Violations result in immediate suspension or termination.</p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        6. Dispute Resolution
                      </h3>
                      <p>
                        All disputes must be initiated via the support ticket system. TradesGlobalFX
                        reserves the right to make final determinations.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        7. Platform Modifications
                      </h3>
                      <p>
                        We may modify services, investment plans, fees, or operational mechanisms at our
                        discretion. Users will receive notices where appropriate.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">8. Liability</h3>
                      <p className="mb-2">
                        Liability is limited to the value of verified user deposits.
                      </p>
                      <p className="mb-2">We are not liable for:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Lost private keys</li>
                        <li>Incorrect wallet addresses</li>
                        <li>Market losses</li>
                        <li>Force majeure events</li>
                        <li>Regulatory actions impacting service continuity</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">9. Termination</h3>
                      <p className="mb-2">We may suspend or terminate accounts for:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Non-compliance</li>
                        <li>Suspicious activity</li>
                        <li>Violations of platform policies</li>
                      </ul>
                      <p className="mt-2">
                        Users may also close accounts, subject to the settlement of outstanding
                        balances.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                        10. Governing Law & Jurisdiction
                      </h3>
                      <p className="mb-2">
                        Cryptocurrency operates in a multi-jurisdictional global environment with no
                        unified regulatory framework. Each country maintains its own rules, standards,
                        and supervisory expectations.
                      </p>
                      <p>TradesGlobalFX adopts a governance stance aligned with:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          International AML/CFT guidelines issued by the Financial Action Task Force
                          (FATF)
                        </li>
                        <li>Industry-standard compliance practices</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4 mb-2">11. Contact</h3>
                      <ul className="space-y-1">
                        <li>
                          Email:{' '}
                          <a
                            href="mailto:support@tradesglobalfx.org"
                            className="text-blue-400 hover:underline"
                          >
                            support@tradesglobalfx.org
                          </a>
                        </li>
                        <li>
                          Website:{' '}
                          <a
                            href="https://www.tradesglobalfx.org"
                            className="text-blue-400 hover:underline"
                          >
                            https://www.tradesglobalfx.org
                          </a>
                        </li>
                      </ul>
                    </section>

                    {/* Acknowledgment Footer */}
                    <div className="border-t border-gray-700 pt-6 mt-6 text-center">
                      <p className="text-sm">
                        By using TradesGlobalFX, you acknowledge that you have read, understood, and
                        agree to be bound by all the above Terms and Conditions, Privacy Policy, Risk
                        Disclosure Statement, and User Agreement.
                      </p>
                    </div>
                  </div>

                  {/* END OF INSERTED TERMS */}

                  {/* END OF INSERTED TERMS */}

                  <div className="flex items-center mb-4 mt-6">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="termsAccepted" className="text-sm">
                      I have read and agree to the Terms and Conditions
                    </label>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="termsScrolled"
                      checked={termsScrolled}
                      onChange={(e) => setTermsScrolled(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="termsScrolled" className="text-sm">
                      I confirm I have scrolled through the entire document
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setShowTermsModal(false)}
                      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleTermsAccept}
                      disabled={!termsAccepted || !termsScrolled}
                      className={`px-4 py-2 rounded font-semibold ${
                        termsAccepted && termsScrolled
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Accept & Continue
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Private Key Modal */}
          <AnimatePresence>
            {showPrivateKeyModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#14213d] text-white rounded-2xl shadow-2xl p-6 w-full max-w-lg"
                >
                  <h2 className="text-2xl font-bold mb-4 text-center text-yellow-400">
                    ⚠️ Important: Save Your Private Key
                  </h2>
                  <p className="text-slate-300 mb-4">
                    Your private key is crucial for account access. Please save it securely. You will
                    need it to log in.
                  </p>
                  <div className="bg-gray-800 p-4 rounded mb-4">
                    <p className="text-xs text-gray-400 mb-2">Private Key:</p>
                    <p className="font-mono text-sm break-all">{privateKey}</p>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
                    >
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                    <button
                      onClick={downloadKey}
                      className="flex-1 bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
                    >
                      {downloaded ? 'Downloaded!' : 'Download as File'}
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="understandLoss"
                      checked={understandLoss}
                      onChange={(e) => setUnderstandLoss(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="understandLoss" className="text-sm">
                      I understand that if I lose this key, I may not be able to access my account
                    </label>
                  </div>
                  <button
                    onClick={handleContinue}
                    disabled={!understandLoss || (!copied && !downloaded)}
                    className={`w-full px-4 py-2 rounded font-semibold ${
                      understandLoss && (copied || downloaded)
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continue to Sign In
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* ── END OF YOUR ORIGINAL CODE ── */}

        </div>{/* end right panel */}
      </div>{/* end two-column container */}
    </div>/* end layout shell */
  );
}