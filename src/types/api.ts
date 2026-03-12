// src/types/api.ts
export interface AddFundsResponse {
  success: boolean;
  message: string;
  transactionRef?: string;
}

export interface WithdrawalResponse {
  success: boolean;
  message: string;
  withdrawal?: any;
}

export interface ProfitAccrueResponse {
  success: boolean;
  message: string;
}

export interface DepositRecord {
  id: number;
  amount: number;
  currency: string;
  address: string;
  status: string;
  createdAt: string;
}

export interface DepositData {
  pendingDeposits: DepositRecord[];
  depositHistory: DepositRecord[];
}

export interface DepositHistoryItem {
  id: number;
  amount: number;
  status: string;
  createdAt: Date;
  type: string;
  currency: string;
  address: string;
}

export interface WithdrawalHistoryItem {
  id: number;
  amount: number;
  status: string;
  createdAt: Date;
  type: string;
  description?: string;
  paymentMethod?: string;
}

export interface InvestmentHistoryItem {
  id: number;
  planName: string;
  amount: number;
  roi: number;
  duration: string;
  status: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}
