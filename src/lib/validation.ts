import { z } from "zod";
import { INVESTMENT_PLANS } from "./config/plans";

// User validation schemas
export const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  username: z.string().min(3, "Username must be at least 3 characters").max(30),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
  referralCode: z.string().optional(),
});

export const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Transaction validation schemas
export const addFundsSchema = z.object({
  user: z.string().email("Invalid email address"),
  amount: z.number().positive("Amount must be positive").max(1000000, "Amount cannot exceed $1,000,000"),
  currency: z.string().min(1, "Currency is required"),
  address: z.string().min(1, "Address is required"),
});

// Investment schema with plan enum and amount range
export const investmentSchema = z.object({
  user: z.string().email("Invalid email address"),
  plan: z.enum(["Mining", "Premium", "Gold"], {
    errorMap: () => ({ message: "Plan must be Mining, Premium, or Gold" }),
  }),
  amount: z.number()
    .min(1000, "Minimum investment amount is $1,000")
    .max(1000000, "Maximum investment amount is $1,000,000"),
});

// ROI calculation based on amount (returns decimal percentage)
export function getROI(planName: string) {
  const plan = INVESTMENT_PLANS[planName.toLowerCase()];
  if (!plan) return 0;
  return plan.roi; // 0.30, 0.40, 0.55
}

export const transactionSchema = z.object({
  userId: z.number().int().positive("Invalid user ID"),
  amount: z.number().positive("Amount must be positive").max(1000000, "Amount cannot exceed $1,000,000"),
  paymentMethod: z.string().min(1, "Payment method is required").max(50, "Payment method too long"),
  type: z.enum(["Deposit", "withdraw", "invest", "roi"], {
    errorMap: () => ({ message: "Invalid transaction type" }),
  }),
  status: z.enum(["Pending", "Approved", "Rejected", "Completed"]).optional(),
});

export const transactionResponseSchema = z.object({
  success: z.boolean(),
  transaction: z.object({
    id: z.number(),
    userId: z.number(),
    amount: z.number(),
    paymentMethod: z.string(),
    type: z.string(),
    status: z.string(),
    createdAt: z.date(),
  }).optional(),
  message: z.string().optional(),
});

export const withdrawalSchema = z.object({
  userId: z.number().int().positive("Invalid user ID"),
  amount: z.number().positive("Amount must be positive").max(1000000, "Amount cannot exceed $1,000,000"),
  paymentMethod: z.string().min(1, "Payment method is required").max(50, "Payment method too long"),
  walletAddress: z.string().min(1, "Wallet address is required"),
});

export const withdrawalResponseSchema = z.object({
  success: z.boolean(),
  withdrawal: z.object({
    id: z.number(),
    userId: z.number(),
    amount: z.number(),
    paymentMethod: z.string(),
    walletAddress: z.string(),
    status: z.string(),
    createdAt: z.date(),
  }).optional(),
  message: z.string().optional(),
});

// Approval schemas
export const approvalSchema = z.object({
  transactionId: z.string().regex(/^\d+$/, "Invalid transaction ID").transform(val => parseInt(val)),
  action: z.enum(["approve", "reject"], {
    errorMap: () => ({ message: "Action must be 'approve' or 'reject'" }),
  }),
});

export const withdrawalApprovalSchema = z.object({
  withdrawalId: z.string().regex(/^\d+$/, "Invalid withdrawal ID").transform(val => parseInt(val)),
  action: z.enum(["approve", "reject"], {
    errorMap: () => ({ message: "Action must be 'approve' or 'reject'" }),
  }),
});

// Reward validation schemas
export const redeemRewardSchema = z.object({
  userEmail: z.string().email("Invalid email address"),
  pointsToRedeem: z.number().int().min(100, "Minimum redemption is 100 points").max(1000000, "Cannot redeem more than 1,000,000 points"),
});

// Email validation schema
export const emailSchema = z.object({
  to_email: z.string().email("Invalid recipient email"),
  subject: z.string().min(1, "Subject is required").max(200, "Subject too long"),
  message: z.string().min(1, "Message is required").max(5000, "Message too long"),
  idempotencyKey: z.string().optional(),
});

// Dashboard and history schemas
export const userQuerySchema = z.object({
  user: z.string().email("Invalid email address"),
});

export const userIdQuerySchema = z.object({
  userId: z.string().regex(/^\d+$/, "Invalid user ID").transform(val => parseInt(val)),
});

// API response schemas
export const successResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
});

export const errorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  code: z.string().optional(),
  statusCode: z.number().optional(),
  details: z.any().optional(),
});

// Type exports
export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type AddFundsInput = z.infer<typeof addFundsSchema>;
export type InvestmentInput = z.infer<typeof investmentSchema>;
export type TransactionInput = z.infer<typeof transactionSchema>;
export type TransactionResponse = z.infer<typeof transactionResponseSchema>;
export type WithdrawalInput = z.infer<typeof withdrawalSchema>;
export type WithdrawalResponse = z.infer<typeof withdrawalResponseSchema>;
export type ApprovalInput = z.infer<typeof approvalSchema>;
export type WithdrawalApprovalInput = z.infer<typeof withdrawalApprovalSchema>;
export type RedeemRewardInput = z.infer<typeof redeemRewardSchema>;
export type EmailInput = z.infer<typeof emailSchema>;
export type UserQueryInput = z.infer<typeof userQuerySchema>;
export type UserIdQueryInput = z.infer<typeof userIdQuerySchema>;
export type SuccessResponse = z.infer<typeof successResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
