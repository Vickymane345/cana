'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TicketCreation from './TicketCreation';
import ChatFeed from '@/components/ChatFeed';
import FAQAccordion from '@/components/FAQAccordion';

export default function SupportClient() {
  const searchParams = useSearchParams();
  const ticketIdParam = searchParams.get('ticketId');
  const [activeTicketId, setActiveTicketId] = useState<number | null>(null);

  useEffect(() => {
    if (ticketIdParam) {
      const ticketId = parseInt(ticketIdParam);
      if (!isNaN(ticketId)) {
        setActiveTicketId(ticketId);
      }
    }
  }, [ticketIdParam]);

  const handleTicketCreated = (ticketId: number) => {
    setActiveTicketId(ticketId);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Support Center</h1>
          <p className="text-gray-400 text-lg">Get help with your account and trading issues</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Ticket Creation or Chat */}
          <div className="space-y-6">
            {activeTicketId ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">Support Chat</h2>
                  <button
                    onClick={() => setActiveTicketId(null)}
                    className="text-blue-400 hover:text-blue-300 text-sm underline"
                  >
                    Create New Ticket
                  </button>
                </div>
                <ChatFeed ticketId={activeTicketId} />
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Create Support Ticket</h2>
                <TicketCreation onTicketCreated={handleTicketCreated} />
              </div>
            )}
          </div>

          {/* Right Column: FAQ */}
          <div>
            <FAQAccordion />
          </div>
        </div>

        {/* Status Indicator */}
        {activeTicketId && (
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Active Support Session - Ticket #{activeTicketId}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
