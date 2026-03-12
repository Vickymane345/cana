import { NextRequest, NextResponse } from "next/server";
import { AuthService, JWTPayload } from "./auth";
import { logSecurityEvent } from "./logger";
import { AppError } from "./errorHandler";

export interface AuthenticatedRequest extends NextRequest {
  user?: JWTPayload;
}

export class AuthMiddleware {
  static async authenticateRequest(request: NextRequest): Promise<AuthenticatedRequest> {
    try {
      const authHeader = request.headers.get("authorization");

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        logSecurityEvent("missing_auth_header", {
          path: request.nextUrl.pathname,
          method: request.method,
        ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
        });
        throw new AppError("Authorization header missing or invalid", 401);
      }

      const token = authHeader.substring(7); // Remove "Bearer " prefix
      const user = AuthService.verifyAccessToken(token);

      // Add user to request object
      (request as AuthenticatedRequest).user = user;

      return request as AuthenticatedRequest;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      logSecurityEvent("token_verification_failed", {
        path: request.nextUrl.pathname,
        method: request.method,
        error: error instanceof Error ? error.message : "Unknown error",
      });
      throw new AppError("Authentication failed", 401);
    }
  }

  static async optionalAuthenticateRequest(request: NextRequest): Promise<AuthenticatedRequest> {
    try {
      return await this.authenticateRequest(request);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (error) {
      // For optional auth, we don't throw - just return request without user
      return request as AuthenticatedRequest;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static requireRole(requiredRole: string) {
    return async (request: AuthenticatedRequest): Promise<AuthenticatedRequest> => {
      if (!request.user) {
        throw new AppError("Authentication required", 401);
      }

      // TODO: Implement role-based access control
      // For now, assume all authenticated users have basic access
      // In the future, add role field to user model and check here

      return request;
    };
  }

  static requireOwnership(resourceUserId: string) {
    return async (request: AuthenticatedRequest): Promise<AuthenticatedRequest> => {
      if (!request.user) {
        throw new AppError("Authentication required", 401);
      }

      if (String(request.user.userId) !== String(resourceUserId)) {
        logSecurityEvent("ownership_violation", {
          userId: request.user.userId,
          resourceUserId,
          path: request.nextUrl.pathname,
        });
        throw new AppError("Access denied: resource ownership required", 403);
      }

      return request;
    };
  }
}

// Higher-order function to wrap API route handlers with authentication
export function withAuth<T extends any[]>(
  handler: (request: NextRequest, user: JWTPayload, ...args: T) => Promise<NextResponse>,
  options: {
    requireAuth?: boolean;
    requiredRole?: string;
    requireOwnership?: string;
  } = {}
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    try {
      let authenticatedRequest: AuthenticatedRequest;

      if (options.requireAuth !== false) {
        authenticatedRequest = await AuthMiddleware.authenticateRequest(request);
      } else {
        authenticatedRequest = await AuthMiddleware.optionalAuthenticateRequest(request);
      }

      if (options.requiredRole) {
        authenticatedRequest = await AuthMiddleware.requireRole(options.requiredRole)(authenticatedRequest);
      }

      if (options.requireOwnership !== undefined) {
        authenticatedRequest = await AuthMiddleware.requireOwnership(options.requireOwnership)(authenticatedRequest);
      }

      return await handler(request, authenticatedRequest.user!, ...args);
    } catch (error) {
      if (error instanceof AppError) {
        return NextResponse.json(
          {
            success: false,
            message: error.message,
            code: error.code,
            statusCode: error.statusCode,
          },
          { status: error.statusCode }
        );
      }

      logSecurityEvent("middleware_error", {
        error: error instanceof Error ? error.message : "Unknown error",
        path: request.nextUrl.pathname,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Authentication middleware error",
          statusCode: 500,
        },
        { status: 500 }
      );
    }
  };
}

// Utility function to get user from authenticated request
export function getUserFromRequest(request: AuthenticatedRequest): JWTPayload {
  if (!request.user) {
    throw new AppError("User not authenticated", 401);
  }
  return request.user;
}
