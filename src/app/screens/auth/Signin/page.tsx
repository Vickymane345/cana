'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PrivateKeyModal from '@/components/PrivateKeyModal';
import Image from 'next/image';
import logo from '@/app/assets/navbar/Tradelogo.png';
import { FaGlobe, FaKey, FaShieldVirus } from 'react-icons/fa';

const schema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function SigninPage() {
  const router = useRouter();
  const { login, verifyCredentials, verifyPrivateKey } = useAuth();
  const [credentialError, setCredentialError] = useState<string>('');
  const [privateKeyError, setPrivateKeyError] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pendingUser, setPendingUser] = useState<{ id: number; email: string } | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isVerifyingKey, setIsVerifyingKey] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setCredentialError('');

    const result = await verifyCredentials(data.email.toLowerCase(), data.password);
    setIsSubmitting(false);

    if (!result.success) {
      setCredentialError(result.message || 'Invalid email or password. Please try again.');
      return;
    }

    // Store pending user and show private key modal
    setPendingUser({ id: result.userId!, email: result.email! });
    setShowModal(true);
    setRetryCount(0);
    setPrivateKeyError('');
  };

 const handlePrivateKeySubmit = async (privateKey: string) => {
  if (!pendingUser) return;

  setIsVerifyingKey(true);
  setPrivateKeyError('');

  const result = await verifyPrivateKey(pendingUser.id, privateKey);
  setIsVerifyingKey(false);

  if (!result.success) {
    const newRetryCount = retryCount + 1;
    setRetryCount(newRetryCount);
    setPrivateKeyError(result.message || 'Invalid private key. Please try again.');

    if (newRetryCount >= 3) {
      setPrivateKeyError(
        'Maximum retry attempts reached. Please contact support for assistance.'
      );
    }
    return;
  }

  // SUCCESS: close modal first
  setShowModal(false);

  // small delay ensures modal unmounts before navigation
  setTimeout(() => {
    router.push('/dashboard');
  }, 100);
};

  const handleModalClose = () => {
    setShowModal(false);
    setPendingUser(null);
    setRetryCount(0);
    setPrivateKeyError('');
  };

  return (
    // ── NEW: layout shell with enhanced background ──────────────────────────────
    <div
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 75% 50%, rgba(16,36,100,0.95) 0%, #070d24 55%, #0b1130 100%)',
      }}
    >
      {/* ── NEW: decorative background elements ── */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
      >
        {/* top-right glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)',
            filter: 'blur(48px)',
          }}
        />
        {/* bottom-left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-60px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)',
            filter: 'blur(44px)',
          }}
        />
        {/* subtle dot-grid */}
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', inset: 0, opacity: 0.033 }}
        >
          <defs>
            <pattern id="signinDots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#signinDots)" />
        </svg>
      </div>

      {/* ── NEW: two-column flex container ── */}
      <div
        className="relative flex flex-col lg:flex-row items-stretch justify-center min-h-screen"
        style={{ zIndex: 1 }}
      >

        {/* ══════════════════════════════════════════════════════════════
            LEFT PANEL — new addition only
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hidden lg:flex flex-col justify-center items-start px-16 py-16"
          style={{
            flex: '0 0 48%',
            maxWidth: '580px',
            background: 'linear-gradient(135deg, rgba(20,33,61,0.55) 0%, rgba(7,13,36,0.25) 100%)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* brand mark */}
          <div className="flex items-center gap-3 mb-14">
             <Image
                      src={logo}
                      alt="Logo"
                      className="w-28 sm:w-32 md:w-36 h-auto"
                      priority
                    />
          </div>

          {/* illustration — secure vault / key + shield */}
          <div className="w-full mb-12" style={{ maxWidth: '400px' }}>
            <svg
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto' }}
            >
              {/* outer card */}
              <rect x="20" y="20" width="360" height="280" rx="24" fill="rgba(20,33,61,0.65)" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>

              {/* ── shield shape ── */}
              <path
                d="M200 58 L248 78 L248 128 Q248 168 200 188 Q152 168 152 128 L152 78 Z"
                fill="url(#shieldGrad)"
                stroke="rgba(59,130,246,0.4)"
                strokeWidth="1.5"
              />
              {/* shield inner highlight */}
              <path
                d="M200 68 L240 85 L240 128 Q240 162 200 180 Q160 162 160 128 L160 85 Z"
                fill="rgba(255,255,255,0.04)"
              />

              {/* lock body */}
              <rect x="184" y="118" width="32" height="26" rx="5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
              {/* lock shackle */}
              <path
                d="M190 118 L190 110 Q190 100 200 100 Q210 100 210 110 L210 118"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* lock keyhole */}
              <circle cx="200" cy="129" r="3.5" fill="rgba(59,130,246,0.7)"/>
              <rect x="198.5" y="129" width="3" height="6" rx="1" fill="rgba(59,130,246,0.7)"/>

              {/* checkmark inside shield bottom */}
              <path
                d="M190 156 L197 163 L212 148"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* ── floating key ── */}
              <g transform="translate(68, 190) rotate(-30)">
                {/* key head circle */}
                <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(250,204,21,0.7)" strokeWidth="2.5"/>
                <circle cx="16" cy="16" r="6" fill="rgba(250,204,21,0.15)" stroke="rgba(250,204,21,0.4)" strokeWidth="1.5"/>
                {/* key shaft */}
                <rect x="27" y="14" width="36" height="4" rx="2" fill="rgba(250,204,21,0.55)"/>
                {/* key teeth */}
                <rect x="43" y="18" width="4" height="7" rx="1.5" fill="rgba(250,204,21,0.55)"/>
                <rect x="53" y="18" width="4" height="5" rx="1.5" fill="rgba(250,204,21,0.55)"/>
              </g>

              {/* ── floating nodes / connection lines ── */}
              {/* node top-right */}
              <circle cx="318" cy="74" r="7" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5"/>
              <circle cx="318" cy="74" r="3" fill="rgba(59,130,246,0.6)"/>
              {/* node bottom-right */}
              <circle cx="330" cy="220" r="7" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5"/>
              <circle cx="330" cy="220" r="3" fill="rgba(34,197,94,0.6)"/>
              {/* node bottom-left */}
              <circle cx="58" cy="100" r="5" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5"/>
              <circle cx="58" cy="100" r="2.5" fill="rgba(168,85,247,0.55)"/>

              {/* dashed connector lines */}
              <line x1="248" y1="88" x2="311" y2="74" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="4 5"/>
              <line x1="248" y1="158" x2="323" y2="213" stroke="rgba(34,197,94,0.2)" strokeWidth="1" strokeDasharray="4 5"/>
              <line x1="152" y1="88" x2="63" y2="100" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="4 5"/>

              {/* ── bottom status bar ── */}
              <rect x="44" y="212" width="312" height="64" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

              {/* status items */}
              {[
                { label: 'Encryption', value: 'AES-256', color: '#22c55e', x: 64 },
                { label: '2-Step Auth', value: 'Active', color: '#3b82f6', x: 180 },
                { label: 'Last Login', value: 'Secure', color: '#facc15', x: 286 },
              ].map(({ label, value, color, x }) => (
                <g key={label}>
                  <text x={x} y="232" fill="rgba(255,255,255,0.32)" fontSize="9" fontFamily="sans-serif">{label}</text>
                  <text x={x} y="248" fill={color} fontSize="12" fontWeight="700" fontFamily="monospace">{value}</text>
                </g>
              ))}

              {/* gradient defs */}
              <defs>
                <linearGradient id="shieldGrad" x1="152" y1="58" x2="248" y2="188" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.28)"/>
                  <stop offset="100%" stopColor="rgba(29,78,216,0.12)"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* headline copy */}
          <div style={{ maxWidth: '380px' }}>
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
              Secure access to your
              <br />
              <span style={{ color: '#3b82f6' }}>investment portfolio.</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.45)',
                maxWidth: '320px',
              }}
            >
              Your account is protected with AES-256 encryption and private-key verification —
              ensuring only you can access your funds.
            </p>
          </div>

          {/* security badges */}
          <div className="flex items-center gap-6 mt-10">
            {[
              { icon:<FaShieldVirus/> , label: 'End-to-end encrypted' },
              { icon: <FaKey/>, label: 'Private key auth' },
              { icon: <FaGlobe/>, label: 'Global access' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span style={{ fontSize: '1rem' }}>{icon}</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.35)',
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
            RIGHT PANEL — your existing code, zero modifications
        ══════════════════════════════════════════════════════════════ */}
        <div
          className="flex flex-col items-center justify-center flex-1 px-6 py-10"
          style={{ minHeight: '100vh' }}
        >

          {/* ── YOUR ORIGINAL CODE BELOW — ZERO MODIFICATIONS ── */}
          {/* Signin Card */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#14213d]/90 backdrop-blur-sm p-8 rounded-2xl w-full max-w-md shadow-2xl"
          >
            <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

            {/* Email */}
            <div className="mb-4">
              <input
                {...register('email')}
                placeholder="Email"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                {...register('password')}
                placeholder="Password"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Credential Error */}
            {credentialError && (
              <div className="mb-4 p-3 bg-red-600/20 border border-red-600 rounded text-red-400 text-sm">
                {credentialError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition-all ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>

            {/* Signup link */}
            <p className="text-sm mt-6 text-center text-gray-300">
              Don't have an account?{' '}
              <a href="/screens/auth/Signup" className="text-blue-400 underline hover:text-blue-300">
                Sign up
              </a>
            </p>
          </motion.form>

          {/* Private Key Modal */}
          <PrivateKeyModal
            isOpen={showModal}
            onClose={handleModalClose}
            onSubmit={handlePrivateKeySubmit}
            email={pendingUser?.email || ''}
            error={privateKeyError}
            isLoading={isVerifyingKey}
            retryCount={retryCount}
            maxRetries={3}
          />
          {/* ── END OF YOUR ORIGINAL CODE ── */}

        </div>
      </div>
    </div>
  );
}