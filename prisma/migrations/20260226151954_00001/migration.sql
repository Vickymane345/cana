-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "mainBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "investmentBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalEarn" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalWithdrawals" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "roi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "redeemedRoi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "speedInvest" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "completed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "interestBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rewardPoints" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalReferrals" INTEGER NOT NULL DEFAULT 0,
    "referredById" INTEGER,
    "privateKeyHash" TEXT,
    "termsAcceptedAt" TIMESTAMP(3),
    "termsAcceptedIP" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planName" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,
    "roi" DOUBLE PRECISION NOT NULL,
    "duration" TEXT NOT NULL,
    "durationDays" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "maturityDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Success',
    "paymentMethod" TEXT,
    "transactionRef" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdrawal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "address" TEXT,
    "currency" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RewardLedger" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "refId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RewardLedger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReferralReward" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "referredUserId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "redeemedAt" TIMESTAMP(3),

    CONSTRAINT "ReferralReward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'info',
    "relatedId" INTEGER,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Referral_code_key" ON "Referral"("code");

-- CreateIndex
CREATE INDEX "ReferralReward_userId_status_idx" ON "ReferralReward"("userId", "status");

-- CreateIndex
CREATE INDEX "ReferralReward_referredUserId_status_idx" ON "ReferralReward"("referredUserId", "status");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_referredById_fkey" FOREIGN KEY ("referredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RewardLedger" ADD CONSTRAINT "RewardLedger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReferralReward" ADD CONSTRAINT "ReferralReward_referredUserId_fkey" FOREIGN KEY ("referredUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReferralReward" ADD CONSTRAINT "ReferralReward_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
