'use client';
import { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';

interface Ticket {
  id: number;
  subject: string;
  status: 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  hasUnread: boolean;
  lastMessage: {
    sender: 'user' | 'admin';
    content: string;
    timestamp: string;
  } | null;
}

interface TicketListProps {
  onTicketSelect: (ticketId: number) => void;
  activeTicketId: number | null;
  refreshTrigger?: number;
}

export default function TicketList({
  onTicketSelect,
  activeTicketId,
  refreshTrigger,
}: TicketListProps) {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

  const fetchTickets = async () => {
    if (!user?.id) return;

    try {
      const response = await fetch(`/api/support/get-tickets?userId=${user.id}`);
      const data = await response.json();

      if (response.ok) {
        setTickets(data.tickets);
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseTicket = async (ticketId: number) => {
    try {
      const response = await fetch(`/api/support/${ticketId}/close`, {
        method: 'PATCH',
      });

      if (response.ok) {
        await fetchTickets(); // Refresh the list
      }
    } catch (error) {
      console.error('Error closing ticket:', error);
    }
  };

  const handleReopenTicket = async (ticketId: number) => {
    try {
      const response = await fetch(`/api/support/${ticketId}/reopen`, {
        method: 'PATCH',
      });

      if (response.ok) {
        await fetchTickets(); // Refresh the list
      }
    } catch (error) {
      console.error('Error reopening ticket:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [user?.id, refreshTrigger]);

  const filteredTickets = tickets.filter((ticket) => {
    if (filter === 'all') return true;
    return ticket.status === filter;
  });

  if (isLoading) {
    return (
      <div className="bg-[#121528] rounded-lg p-6 shadow-lg">
        <div className="text-white text-center">Loading tickets...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#121528] rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">Your Support Tickets</h2>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          {(['all', 'open', 'closed'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                filter === filterType
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              {filterType !== 'all' && (
                <span className="ml-1">
                  ({tickets.filter((t) => t.status === filterType).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {filteredTickets.length === 0 ? (
          <div className="p-6 text-center text-gray-400">
            {filter === 'all'
              ? 'No support tickets yet. Create your first ticket to get help!'
              : `No ${filter} tickets found.`}
          </div>
        ) : (
          <div className="divide-y divide-gray-700">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className={`p-4 hover:bg-gray-700 cursor-pointer transition duration-200 ${
                  activeTicketId === ticket.id ? 'bg-blue-900 border-l-4 border-blue-500' : ''
                }`}
                onClick={() => onTicketSelect(ticket.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="text-white font-medium truncate">{ticket.subject}</h3>
                    <p className="text-sm text-gray-400">
                      Ticket #{ticket.id} • {ticket.messageCount} messages
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ticket.status === 'open'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-600 text-gray-300'
                      }`}
                    >
                      {ticket.status}
                    </span>
                    {ticket.hasUnread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                </div>

                {ticket.lastMessage && (
                  <p className="text-sm text-gray-400 truncate mb-2">
                    {ticket.lastMessage.sender === 'user' ? 'You' : 'Support'}:{' '}
                    {ticket.lastMessage.content}
                  </p>
                )}

                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Updated: {new Date(ticket.updatedAt).toLocaleDateString()}</span>
                  {ticket.status === 'open' ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseTicket(ticket.id);
                      }}
                      className="text-red-400 hover:text-red-300 underline"
                    >
                      Close
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReopenTicket(ticket.id);
                      }}
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      Reopen
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
