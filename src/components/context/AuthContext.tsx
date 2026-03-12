'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

/* ==========================
   USER TYPES
========================== */
interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  username?: string;

  mainBalance: number;
  investmentBalance?: number;
  totalDeposit: number;
  totalEarn?: number;
  totalWithdrawals?: number;
  roi?: number;
  redeemedRoi?: number;
  speedInvest?: number;
  completed?: number;

  referralCode?: string | null;
  referrals?: any;
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;

  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;

  login: (email: string, password: string) => Promise<boolean>;
  signup: (formData: any) => Promise<boolean>;
  logout: () => void;

  refreshUser: () => Promise<void>;
  updateBalances: (balances: Partial<User>) => void;

  verifyCredentials: (email: string, password: string) => Promise<any>;
  verifyPrivateKey: (userId: number, privateKey: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ==========================
   NORMALIZE USER
========================== */
const normalizeUser = (u: any, existingReferral?: string | null): User => {
  const referral = u?.referralCode ?? existingReferral ?? null;

  return {
    id: u?.id,
    email: u?.email ?? '',
    firstName: u?.firstName ?? '',
    lastName: u?.lastName ?? '',
    username: u?.username ?? '',

    mainBalance: u?.mainBalance ?? 0,
    investmentBalance: u?.investmentBalance ?? 0,
    totalDeposit: u?.totalDeposit ?? 0,
    totalWithdrawals: u?.totalWithdrawals ?? 0,
    totalEarn: u?.totalEarn ?? 0,
    roi: u?.roi ?? 0,
    redeemedRoi: u?.redeemedRoi ?? 0,
    speedInvest: u?.speedInvest ?? 0,
    completed: u?.completed ?? 0,

    referralCode: referral,
    referrals: u?.referrals ?? undefined,
  };
};

/* ==========================
   PROVIDER
========================== */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  /* =========================================
     LOAD FROM LOCALSTORAGE WITHOUT BLOCKING
  ========================================== */
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('currentUser');
      const savedToken = localStorage.getItem('auth_token');

      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedToken) setAccessToken(savedToken);
    } catch (err) {
      console.error('AuthProvider localStorage error:', err);
    }

    // 🔥 The critical fix: stop loading immediately
    setIsLoading(false);
  }, []);

  /* ======================
     LOGIN
  ======================= */
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) return false;

      const data = await res.json();
      const normalized = normalizeUser(data.user);

      setUser(normalized);
      localStorage.setItem('currentUser', JSON.stringify(normalized));

      if (data.accessToken) {
        setAccessToken(data.accessToken);
        localStorage.setItem('auth_token', data.accessToken);
      }

      // 🚫 Do NOT block login by calling refreshUser here
      // await refreshUser();

      return true;
    } catch (err) {
      console.error('Login error:', err);
      return false;
    }
  };

  /* ======================
     SIGNUP
  ======================= */
  const signup = async (formData: any) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) return false;

      const data = await res.json();
      const normalized = normalizeUser(data.user);

      setUser(normalized);
      localStorage.setItem('currentUser', JSON.stringify(normalized));

      return true;
    } catch (err) {
      console.error('Signup error:', err);
      return false;
    }
  };

  /* ======================
     LOGOUT
  ======================= */
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('auth_token');

    router.push('/screens/auth/Signin');
  };

  /* ======================
     UPDATE BALANCES
  ======================= */
  const updateBalances = (balances: Partial<User>) =>
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...balances };
      localStorage.setItem('currentUser', JSON.stringify(updated));
      return updated;
    });

  /* ======================
     REFRESH USER  
     - Safe
     - Non-blocking
     - Uses /api/user
  ======================= */
  const refreshUser = async () => {
    if (!user?.email) return;
    if (!accessToken) return;

    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 6000);

      // GET /api/user (your route exists)
      const res = await fetch(`/api/user?email=${encodeURIComponent(user.email)}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        signal: controller.signal,
      });

      if (!res.ok) {
        console.warn('refreshUser: backend returned', res.status);
        return;
      }

      const data = await res.json();

      const referral = data.referralCode ?? user.referralCode ?? null;

      const merged = normalizeUser(
        {
          ...user,
          ...data,
          referralCode: referral,
        },
        referral
      );

      setUser(merged);
      localStorage.setItem('currentUser', JSON.stringify(merged));
    } catch (err) {
      console.error('refreshUser error:', err);
    }
  };

  /* ======================
     VERIFY LOGIN PASSWORD
  ======================= */
  const verifyCredentials = async (email: string, password: string) => {
    const res = await fetch('/api/auth/verifyCredentials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    return res.json();
  };

  /* ======================
     VERIFY PRIVATE KEY
  ======================= */
  const verifyPrivateKey = async (userId: number, privateKey: string) => {
    const res = await fetch('/api/auth/verifyPrivateKey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, privateKey }),
    });

    const data = await res.json();

    if (data.success && data.token && data.user) {
      const normalized = normalizeUser(data.user);
      setUser(normalized);
      setAccessToken(data.token);

      localStorage.setItem('currentUser', JSON.stringify(normalized));
      localStorage.setItem('auth_token', data.token);
    }

    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoading,

        setUser,
        setAccessToken,

        login,
        signup,
        logout,
        refreshUser,
        updateBalances,

        verifyCredentials,
        verifyPrivateKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* ==========================
   HOOK
========================== */
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
