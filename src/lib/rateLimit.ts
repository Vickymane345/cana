import rateLimit from 'express-rate-limit';
import logger from './logger';

// Rate limiter for authentication endpoints
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many authentication attempts, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter: Math.ceil((15 * 60 * 1000) / 1000), // seconds
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn({
      message: 'Rate limit exceeded for auth endpoint',
      ip: req.ip || req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      path: req.path,
      method: req.method,
    });
    res.status(429).json({
      success: false,
      message: 'Too many authentication attempts, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: Math.ceil((15 * 60 * 1000) / 1000),
    });
  },
});

// Rate limiter for general API endpoints
export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter: Math.ceil((15 * 60 * 1000) / 1000),
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn({
      message: 'Rate limit exceeded for API endpoint',
      ip: req.ip || req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      path: req.path,
      method: req.method,
    });
    res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: Math.ceil((15 * 60 * 1000) / 1000),
    });
  },
});

// Rate limiter for transaction endpoints (more restrictive)
export const transactionRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 transaction requests per windowMs
  message: {
    success: false,
    message: 'Too many transaction requests, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter: Math.ceil((15 * 60 * 1000) / 1000),
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn({
      message: 'Rate limit exceeded for transaction endpoint',
      ip: req.ip || req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      path: req.path,
      method: req.method,
    });
    res.status(429).json({
      success: false,
      message: 'Too many transaction requests, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: Math.ceil((15 * 60 * 1000) / 1000),
    });
  },
});

// Rate limiter for withdrawal endpoints (most restrictive)
export const withdrawalRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 withdrawal requests per hour
  message: {
    success: false,
    message: 'Too many withdrawal requests, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter: Math.ceil((60 * 60 * 1000) / 1000),
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn({
      message: 'Rate limit exceeded for withdrawal endpoint',
      ip: req.ip || req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      path: req.path,
      method: req.method,
    });
    res.status(429).json({
      success: false,
      message: 'Too many withdrawal requests, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: Math.ceil((60 * 60 * 1000) / 1000),
    });
  },
});

// Rate limiter for investment endpoints
export const investmentRateLimit = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 10, // Limit each IP to 10 investment requests per 30 minutes
  message: {
    success: false,
    message: 'Too many investment requests, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter: Math.ceil((30 * 60 * 1000) / 1000),
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn({
      message: 'Rate limit exceeded for investment endpoint',
      ip: req.ip || req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      path: req.path,
      method: req.method,
    });
    res.status(429).json({
      success: false,
      message: 'Too many investment requests, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: Math.ceil((30 * 60 * 1000) / 1000),
    });
  },
});
