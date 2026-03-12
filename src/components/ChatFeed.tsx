'use client';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  ticketId: number;
  sender: 'user' | 'admin';
  message: string;
  createdAt: string;
}

interface Ticket {
  id: number;
  username: string;
  email: string;
  subject: string;
  problem: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ChatFeedProps {
  ticketId: number;
}

export default function ChatFeed({ ticketId }: ChatFeedProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/api/support/get-messages?ticketId=${ticketId}`);
      const data = await response.json();

      if (response.ok) {
        setMessages(data.messages);
        setTicket(data.ticket);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || isSending) return;

    setIsSending(true);
    try {
      const response = await fetch('/api/support/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticketId,
          sender: 'user', // Assuming user for now, could be made configurable
          message: newMessage.trim(),
        }),
      });

      if (response.ok) {
        setNewMessage('');
        await fetchMessages(); // Refresh messages
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    // Poll for new messages every 5 seconds
    intervalRef.current = setInterval(fetchMessages, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [ticketId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (isLoading) {
    return (
      <div className="bg-[#121528] rounded-lg p-6 shadow-lg">
        <div className="text-white text-center">Loading chat...</div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="bg-[#121528] rounded-lg p-6 shadow-lg">
        <div className="text-red-400 text-center">Ticket not found</div>
      </div>
    );
  }

  return (
    <div className="bg-[#121528] rounded-lg shadow-lg flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">{ticket.subject}</h3>
        <p className="text-sm text-gray-400">
          Ticket #{ticket.id} • {ticket.status}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Created: {new Date(ticket.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-200' : 'text-gray-400'
                  }`}
                >
                  {new Date(message.createdAt).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-700">
        <form onSubmit={sendMessage} className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSending}
          />
          <button
            type="submit"
            disabled={isSending || !newMessage.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSending ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
