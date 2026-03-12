import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AppError } from "./errorHandler";
import logger from "./logger";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
const BCRYPT_SALT_ROUNDS = 12; // Confirmed salt rounds

export interface JWTPayload {
  exp?: any;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface AccessTokenOnly {
  accessToken: string;
}

export class AuthService {
  // Add this method to check configuration
  static checkConfig() {
    if (!JWT_SECRET) {
      logger.error({ message: "JWT_SECRET is not configured in environment variables" });
      throw new AppError("Server configuration error: JWT_SECRET missing", 500);
    }
    if (!JWT_REFRESH_SECRET) {
      logger.error({ message: "JWT_REFRESH_SECRET is not configured in environment variables" });
      throw new AppError("Server configuration error: JWT_REFRESH_SECRET missing", 500);
    }
    logger.info({ message: "Auth configuration check passed" });
  }

  static async hashPassword(password: string): Promise<string> {
    try {
      const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
      logger.info({ message: "Password hashed successfully", saltRounds: BCRYPT_SALT_ROUNDS });
      return hashedPassword;
    } catch (error) {
      logger.error({ message: "Password hashing failed", error });
      throw new AppError("Password hashing failed", 500);
    }
  }

  static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
      const isValid = await bcrypt.compare(password, hashedPassword);
      logger.info({ message: "Password verification completed", isValid });
      return isValid;
    } catch (error) {
      logger.error({ message: "Password verification failed", error });
      throw new AppError("Password verification failed", 500);
    }
  }

  static generateTokenPair(payload: JWTPayload): TokenPair {
    this.checkConfig(); // Check before generating

    try {
      const accessToken = jwt.sign(payload, JWT_SECRET!, { expiresIn: JWT_EXPIRES_IN } as any);
      const refreshToken = jwt.sign({ userId: payload.userId }, JWT_REFRESH_SECRET!, {
        expiresIn: JWT_REFRESH_EXPIRES_IN,
      } as any);

      logger.info({
        message: "Token pair generated",
        userId: payload.userId,
        email: payload.email,
        secretLength: JWT_SECRET!.length,
        usingEnvSecret: !!process.env.JWT_SECRET
      });
      return { accessToken, refreshToken };
    } catch (error) {
      logger.error({ message: "Token generation failed", error, userId: payload.userId });
      throw new AppError("Token generation failed", 500);
    }
  }

  static generateAccessTokenOnly(payload: JWTPayload): AccessTokenOnly {
    this.checkConfig(); // Check before generating

    try {
      const accessToken = jwt.sign(payload, JWT_SECRET!, { expiresIn: JWT_EXPIRES_IN } as any);

      logger.info({ message: "Access token generated", userId: payload.userId, email: payload.email });
      return { accessToken };
    } catch (error) {
      logger.error({ message: "Access token generation failed", error, userId: payload.userId });
      throw new AppError("Access token generation failed", 500);
    }
  }

  static verifyAccessToken(token: string): JWTPayload {
    this.checkConfig(); // Check before verifying

    try {
      console.log('🔐 Verifying token with secret length:', JWT_SECRET!.length);
      console.log('Token to verify:', token.substring(0, 50) + '...');

      const decoded = jwt.verify(token, JWT_SECRET!) as JWTPayload;

      logger.info({
        message: "Access token verified",
        userId: decoded.userId,
        email: decoded.email,
        tokenExpiry: decoded.exp ? new Date(decoded.exp * 1000).toISOString() : 'unknown'
      });
      return decoded;
    } catch (error) {
      console.error('❌ Token verification error:', error);

      if (error instanceof jwt.TokenExpiredError) {
        logger.warn({
          message: "Access token expired",
          error: error.message,
          expiredAt: error.expiredAt
        });
        throw new AppError("Access token expired", 401);
      }
      if (error instanceof jwt.JsonWebTokenError) {
        logger.warn({
          message: "Invalid access token",
          error: error.message,
          secretUsedLength: JWT_SECRET!.length,
          usingFallback: !process.env.JWT_SECRET
        });
        throw new AppError("Invalid access token", 401);
      }
      logger.error({ message: "Access token verification failed", error });
      throw new AppError("Token verification failed", 500);
    }
  }

  static verifyRefreshToken(token: string): { userId: string } {
    this.checkConfig(); // Check before verifying

    try {
      const decoded = jwt.verify(token, JWT_REFRESH_SECRET!) as { userId: string };
      logger.info({ message: "Refresh token verified", userId: decoded.userId });
      return decoded;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        logger.warn({ message: "Refresh token expired", error: error.message });
        throw new AppError("Refresh token expired", 401);
      }
      if (error instanceof jwt.JsonWebTokenError) {
        logger.warn({ message: "Invalid refresh token", error: error.message });
        throw new AppError("Invalid refresh token", 401);
      }
      logger.error({ message: "Refresh token verification failed", error });
      throw new AppError("Token verification failed", 500);
    }
  }

  static refreshAccessToken(refreshToken: string): TokenPair {
    try {
      const { userId } = this.verifyRefreshToken(refreshToken);

      // In a real implementation, you'd fetch user data from DB here
      // For now, we'll create a minimal payload and note that user data should be refreshed
      const payload: JWTPayload = {
        userId: userId.toString(),
        email: "", // Would be fetched from DB
        firstName: "",
        lastName: "",
        username: "",
        exp: undefined
      };

      const tokenPair = this.generateTokenPair(payload);
      logger.info({ message: "Access token refreshed", userId });
      return tokenPair;
    } catch (error) {
      logger.error({ message: "Token refresh failed", error });
      throw error;
    }
  }
}

// NextAuth Options for getServerSession
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is a placeholder - the actual auth is handled in the signin API route
        // We need this for getServerSession to work
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
