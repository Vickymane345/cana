import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import logger from "./logger";

export interface ApiError {
  message: string;
  code?: string;
  statusCode: number;
  details?: any;
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code?: string;
  public readonly details?: any;

  constructor(message: string, statusCode: number = 500, code?: string, details?: any) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

export function handleApiError(error: unknown): NextResponse<ApiError> {
  logger.error({ message: "API Error occurred", error });

  if (error instanceof AppError) {
    logger.warn({
      message: "AppError handled",
      statusCode: error.statusCode,
      code: error.code,
      details: error.details,
    });
    return NextResponse.json(
      {
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
        details: error.details,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof ZodError) {
    logger.warn({
      message: "Validation error",
      details: error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      })),
    });
    return NextResponse.json(
      {
        message: "Validation failed",
        code: "VALIDATION_ERROR",
        statusCode: 400,
        details: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      },
      { status: 400 }
    );
  }

  if (error instanceof PrismaClientKnownRequestError) {
    logger.error({
      message: "Prisma known request error",
      code: error.code,
      meta: error.meta,
      error: error.message,
    });

    // Handle specific Prisma error codes
    switch (error.code) {
      case "P2002":
        return NextResponse.json(
          {
            message: "A record with this information already exists",
            code: "DUPLICATE_ERROR",
            statusCode: 409,
          },
          { status: 409 }
        );
      case "P2025":
        return NextResponse.json(
          {
            message: "Record not found",
            code: "NOT_FOUND",
            statusCode: 404,
          },
          { status: 404 }
        );
      default:
        return NextResponse.json(
          {
            message: "Database operation failed",
            code: "DATABASE_ERROR",
            statusCode: 500,
          },
          { status: 500 }
        );
    }
  }

  if (error instanceof PrismaClientValidationError) {
    logger.error({
      message: "Prisma validation error",
      error: error.message,
    });
    return NextResponse.json(
      {
        message: "Invalid data provided",
        code: "VALIDATION_ERROR",
        statusCode: 400,
      },
      { status: 400 }
    );
  }

  if (error instanceof Error) {
    // Handle other known error types
    if (error.message.includes("Foreign key constraint")) {
      logger.warn({ message: "Foreign key constraint error", error: error.message });
      return NextResponse.json(
        {
          message: "Referenced record does not exist",
          code: "FOREIGN_KEY_ERROR",
          statusCode: 400,
        },
        { status: 400 }
      );
    }

    logger.error({ message: "Unhandled error", error: error.message });
    return NextResponse.json(
      {
        message: error.message,
        code: "INTERNAL_ERROR",
        statusCode: 500,
      },
      { status: 500 }
    );
  }

  logger.error({ message: "Unknown error type", error });
  return NextResponse.json(
    {
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
      statusCode: 500,
    },
    { status: 500 }
  );
}

export function createSuccessResponse<T>(data: T, statusCode: number = 200): NextResponse<T> {
  return NextResponse.json(data, { status: statusCode });
}

// Wrapper function for consistent error handling in routes
export function withErrorHandling<T extends any[]>(
  handler: (...args: T) => Promise<NextResponse>
) {
  return async (...args: T): Promise<NextResponse> => {
    try {
      return await handler(...args);
    } catch (error) {
      return handleApiError(error);
    }
  };
}
