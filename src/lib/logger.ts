import pino from "pino";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  formatters: {
    level: (label: string) => {
      return { level: label };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

// Enhanced logging functions for structured logging
export const logPrismaError = (error: unknown, context: string) => {
  if (error instanceof PrismaClientKnownRequestError) {
    logger.error({
      message: `Prisma known request error in ${context}`,
      code: error.code,
      meta: error.meta,
      error: error.message,
    });
  } else if (error instanceof PrismaClientValidationError) {
    logger.error({
      message: `Prisma validation error in ${context}`,
      error: error.message,
    });
  } else {
    logger.error({
      message: `Prisma error in ${context}`,
      error,
    });
  }
};

export const logApiRequest = (method: string, url: string, payload?: any) => {
  logger.info({
    message: "API request",
    method,
    url,
    ...payload,
  });
};

export const logApiResponse = (method: string, url: string, statusCode: number, duration: number, userId?: number) => {
  logger.info({
    message: "API response",
    method,
    url,
    statusCode,
    duration,
    userId,
  });
};

export const logSecurityEvent = (event: string, details: Record<string, unknown>) => {
  logger.warn({
    message: `Security event: ${event}`,
    ...details,
  });
};

export const logError = (message: string, details?: Record<string, unknown>) => {
  logger.error({
    message,
    ...details,
  });
};

export default logger;
