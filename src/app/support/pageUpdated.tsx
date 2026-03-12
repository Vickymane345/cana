'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TicketList from '@/components/TicketList';
import TicketCreation from '@/components/TicketCreationUpdated';
import ChatFeed from '@/components/ChatFeed';
import FAQAccordion from '@/components/FAQAccordion';
import { useAuth } from '@/components/context/AuthContext';

export default function SupportPage() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const ticketIdParam = searchParams.get('ticketId');
  const [activeTicketId, setActiveTicketId] = useState<number | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    if (ticketIdParam) {
      const ticketId = parseInt(ticketIdParam);
      if (!isNaN(ticketId)) {
        setActiveTicketId(ticketId);
        setShowCreateForm(false);
      }
    }
  }, [ticketIdParam]);

  const handleTicketCreated = (ticketId: number) => {
    setActiveTicketId(ticketId);
    setShowCreateForm(false);
    setRefreshTrigger((prev) => prev + 1); // Trigger refresh of ticket list
  };

  const handleTicketSelect = (ticketId: number) => {
    setActiveTicketId(ticketId);
    setShowCreateForm(false);
  };

  const handleCreateNewTicket = () => {
    setShowCreateForm(true);
    setActiveTicketId(null);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
  };

  if (!user) {
    return (
      <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Support Center</h1>
            <p className="text-gray-400 text-lg">Please log in to access support tickets.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#0b1130] text-slate-200 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Support Center</h1>
          <p className="text-gray-400 text-lg">Get help with your account and trading issues</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column: Ticket List */}
          <div className="space-y-6">
            <TicketList
              onTicketSelect={handleTicketSelect}
              activeTicketId={activeTicketId}
              refreshTrigger={refreshTrigger}
            />

            {!showCreateForm && !activeTicketId && (
              <div className="text-center">
                <button
                  onClick={handleCreateNewTicket}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Create New Ticket
                </button>
              </div>
            )}
          </div>

          {/* Middle Column: Ticket Creation or Chat */}
          <div className="space-y-6">
            {showCreateForm ? (
              <TicketCreation onTicketCreated={handleTicketCreated} onCancel={handleCancelCreate} />
            ) : activeTicketId ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">Support Chat</h2>
                  <button
                    onClick={handleCreateNewTicket}
                    className="text-blue-400 hover:text-blue-300 text-sm underline"
                  >
                    New Ticket
                  </button>
                </div>
                <ChatFeed ticketId={activeTicketId} />
              </div>
            ) : (
              <div className="bg-[#121528] rounded-lg p-6 shadow-lg text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Select a Ticket</h3>
                <p className="text-gray-400">
                  Choose a ticket from the list to view the conversation, or create a new one.
                </p>
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
