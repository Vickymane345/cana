'use client';
import Accordion from './Accordion';

const faqItems = [
  {
    id: 'general-support-ticketing-1',
    title: 'What information should I include when opening a support ticket?',
    content:
      'Submit your name, email, a concise problem statement, and any screenshots or reference IDs. This accelerates triage and enables faster root-cause diagnostics.',
  },
  {
    id: 'general-support-ticketing-2',
    title: 'How fast will I get a response to my ticket?',
    content:
      'Standard response SLA is under 24 hours. All updates are dispatched directly to your email through the Nodemailer communication pipeline.',
  },
  {
    id: 'general-support-ticketing-3',
    title: 'Will the admin see my problem details?',
    content:
      'Yes. The ticketing module automatically routes your username, email, and issue details to the admin for direct review and mail-based resolution.',
  },
  {
    id: 'trading-issues-1',
    title: 'Why is my trade not executing?',
    content:
      'Execution is gated by market availability, liquidity routing, and platform load. When network liquidity is thin or price feeds experience volatility spikes, orders may fall outside executable thresholds.',
  },
  {
    id: 'platform-usage-dashboard-1',
    title: "I approved a transaction but it's not reflected.",
    content:
      'The confirmation pipeline may be waiting on blockchain finality or delayed network confirmations. Provide your transaction ID through a ticket so the admin can run a ledger audit and manually refresh your dashboard state.',
  },
  {
    id: 'deposits-withdrawals-1',
    title: 'My deposit is not showing in my dashboard. Why?',
    content:
      'Deposits are queued in the settlement workflow and require confirmation before being allocated to your account. Timelines vary by payment rail. Submit a ticket with your transaction reference for accelerated reconciliation.',
  },
  {
    id: 'deposits-withdrawals-2',
    title: 'Why was my withdrawal rejected?',
    content:
      'Withdrawals are blocked when compliance, liquidity, or account-integrity checks fail. The rejection notice includes a status code. Open a ticket if you need clarification or a re-evaluation.',
  },
  {
    id: 'deposits-withdrawals-3',
    title: 'How long do withdrawals take?',
    content:
      'Withdrawals run through a multi-stage approval pipeline. Standard SLA is 24–48 hours, depending on current transaction volume and verification cycles.',
  },
];

export default function FAQAccordion() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
      <Accordion items={faqItems} />
    </div>
  );
}
