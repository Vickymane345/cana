export interface InvestmentPlan {
  name: string;
  displayName: string;
  minAmount: number;
  maxAmount: number;
  roi: number;
  duration: string;
  durationDays: number;
}

export const INVESTMENT_PLANS: Record<string, InvestmentPlan> = {
  mining: {
    name: 'mining',
    displayName: 'Mining',
    minAmount: 1000,
    maxAmount: 19999,
    roi: 0.30,
    duration: '1 month',
    durationDays: 30,
  },
  premium: {
    name: 'premium',
    displayName: 'Premium',
    minAmount: 20000,
    maxAmount: 99999,
    roi: 0.40,
    duration: '1 month',
    durationDays: 30,
  },
  gold: {
    name: 'gold',
    displayName: 'Gold',
    minAmount: 100000,
    maxAmount: 1000000,
    roi: 0.55,
    duration: '1 month',
    durationDays: 30,
  },
};

export const getPlanByName = (planName: string): InvestmentPlan | undefined => {
  return INVESTMENT_PLANS[planName.toLowerCase()];
};

export const getAllPlans = (): InvestmentPlan[] => {
  return Object.values(INVESTMENT_PLANS);
};

export const getPlanNames = (): string[] => {
  return Object.keys(INVESTMENT_PLANS);
};
