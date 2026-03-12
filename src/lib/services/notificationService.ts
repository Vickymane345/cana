import { prisma } from "@/lib/prisma";

export class NotificationService {
  /**
   * Create a notification for a user
   */
  static async createNotification(
    userId: number,
    type: string,
    message: string,
    status: "success" | "warning" | "error" | "info" = "info",
    relatedId?: number
  ) {
    try {
      const notification = await prisma.notification.create({
        data: {
          userId,
          type,
          message,
          status,
          relatedId,
        },
      });
      return notification;
    } catch (error) {
      console.error("Failed to create notification:", error);
      throw error;
    }
  }

  /**
   * Create a notification for a user by email
   */
  static async createNotificationByEmail(
    userEmail: string,
    type: string,
    message: string,
    status: "success" | "warning" | "error" | "info" = "info",
    relatedId?: number
  ) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: userEmail },
        select: { id: true },
      });

      if (!user) {
        throw new Error(`User with email ${userEmail} not found`);
      }

      return await this.createNotification(user.id, type, message, status, relatedId);
    } catch (error) {
      console.error("Failed to create notification by email:", error);
      throw error;
    }
  }

  /**
   * Create deposit approval notification
   */
  static async notifyDepositApproved(userId: number, amount: number, currency: string = "USD") {
    const message = `Your deposit of $${amount.toFixed(2)} ${currency} has been approved and added to your account.`;
    return await this.createNotification(userId, "deposit", message, "success");
  }

  /**
   * Create deposit rejection notification
   */
  static async notifyDepositRejected(userId: number, amount: number, currency: string = "USD") {
    const message = `Your deposit of $${amount.toFixed(2)} ${currency} has been rejected. Please contact support for more information.`;
    return await this.createNotification(userId, "deposit", message, "error");
  }

  /**
   * Create withdrawal approval notification
   */
  static async notifyWithdrawalApproved(userId: number, amount: number, currency: string = "USD") {
    const message = `Your withdrawal request of $${amount.toFixed(2)} ${currency} has been approved and processed.`;
    return await this.createNotification(userId, "withdrawal", message, "success");
  }

  /**
   * Create withdrawal rejection notification
   */
  static async notifyWithdrawalRejected(userId: number, amount: number, currency: string = "USD") {
    const message = `Your withdrawal request of $${amount.toFixed(2)} ${currency} has been rejected. Please contact support for more information.`;
    return await this.createNotification(userId, "withdrawal", message, "error");
  }

  /**
   * Create profit accrual notification
   */
  static async notifyProfitAccrued(userId: number, amount: number, planName: string) {
    const message = `$${amount.toFixed(2)} profit has been added to your account from ${planName} investment plan.`;
    return await this.createNotification(userId, "profit", message, "success");
  }

  /**
   * Create referral reward notification
   */
  static async notifyReferralReward(userId: number, amount: number, referredUser: string) {
    const message = `You earned $${amount.toFixed(2)} referral reward for bringing ${referredUser} to the platform!`;
    return await this.createNotification(userId, "referral", message, "success");
  }

  /**
   * Create investment plan completion notification
   */
  static async notifyInvestmentCompleted(userId: number, planName: string, totalReturn: number) {
    const message = `Congratulations! Your ${planName} investment plan has completed with a total return of $${totalReturn.toFixed(2)}.`;
    return await this.createNotification(userId, "investment", message, "success");
  }

  /**
   * Create general system notification
   */
  static async notifySystemMessage(userId: number, message: string, status: "success" | "warning" | "error" | "info" = "info") {
    return await this.createNotification(userId, "system", message, status);
  }

  /**
   * Notify admin about new user signup
   */
  static async notifyAdminNewSignup(firstName: string, lastName: string, username: string, email: string, phone?: string) {
    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (!adminEmail) {
        console.warn("Admin email not configured, skipping admin notification");
        return null;
      }

      const admin = await prisma.user.findUnique({
        where: { email: adminEmail },
        select: { id: true },
      });

      if (!admin) {
        console.warn("Admin user not found, skipping admin notification");
        return null;
      }

      const message = `New user registered: ${firstName} ${lastName} (@${username}) - ${email}`;
      return await this.createNotification(admin.id, "new_signup", message, "info");
    } catch (error) {
      console.error("Failed to create admin signup notification:", error);
      return null;
    }
  }
}
