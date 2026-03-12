import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import { AppError } from "@/lib/errorHandler";
import logger from "@/lib/logger";

export class UserService {
  static async createUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    phone?: string;
    referralCode?: string;
  }) {
    const { firstName, lastName, email, username, password, phone, referralCode } = data;

    // Check if user already exists
    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existing) {
      throw new AppError("User with this email already exists", 409);
    }

    // Handle referral if provided
    let referredById: number | null = null;
    if (referralCode) {
      const referrer = await prisma.referral.findUnique({
        where: { code: referralCode },
        include: { user: true },
      });
      if (referrer) {
        referredById = referrer.userId;
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email: email.toLowerCase(),
        password: hashedPassword,
        phone: phone || null,
        mainBalance: 0,
        investmentBalance: 0,
        totalEarn: 0,
        totalDeposit: 0,
        roi: 0,
        redeemedRoi: 0,
        speedInvest: 0,
        completed: 0,
        referredById,
      },
    });

    // Generate unique referral code for the new user
    const referralCodeGenerated = randomBytes(4).toString('hex').toUpperCase();
    await prisma.referral.create({
      data: {
        userId: newUser.id,
        code: referralCodeGenerated,
      },
    });

    logger.info({
      message: "User created successfully",
      userId: newUser.id,
      email: newUser.email,
      referredById,
    });

    return {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
      mainBalance: newUser.mainBalance,
      totalDeposit: newUser.totalDeposit,
      referralCode: referralCodeGenerated,
    };
  }

  static async authenticateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new AppError("Invalid credentials", 401);
    }

    logger.info({
      message: "User authenticated successfully",
      userId: user.id,
      email: user.email,
    });

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  static async getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      include: {
        referrals: {
          take: 1,
        },
      },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    // Extract referral code
    const referralCode = user.referrals && user.referrals.length > 0
      ? user.referrals[0].code
      : null;

    // Return user with referral code (remove sensitive data)
    const { password, ...userWithoutPassword } = user;

    return {
      ...userWithoutPassword,
      referrals: undefined, // Remove the full referrals array
      referralCode: referralCode, // Add just the code
    };
  }

  static async updateUserBalance(userId: number, updates: {
    mainBalance?: { increment: number } | number;
    investmentBalance?: { increment: number } | number;
    totalDeposit?: { increment: number } | number;
    rewardPoints?: { increment: number } | number;
  }) {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updates,
    });

    logger.info({
      message: "User balance updated",
      userId,
      updates,
    });

    return updatedUser;
  }
}
