import { randomBytes } from 'crypto';

export class CSRFProtection {
  private static secret = process.env.CSRF_SECRET || 'fallback-secret-change-in-production';

  static generateToken(): string {
    return randomBytes(32).toString('hex');
  }

  static validateToken(token: string): boolean {
    // In a real implementation, you'd store tokens in a secure store
    // and validate against them. For now, we'll do basic validation.
    return !!(token && token.length === 64); // 32 bytes = 64 hex chars
  }

  static getCSRFToken(): string {
    return this.generateToken();
  }
}
