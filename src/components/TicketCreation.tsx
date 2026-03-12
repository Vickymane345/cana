'use client';
import { useState } from 'react';
import { useAuth } from './context/AuthContext';

interface TicketCreationProps {
  onTicketCreated?: (ticketId: number) => void;
}

export default function TicketCreation({ onTicketCreated }: TicketCreationProps) {
  const { user, accessToken } = useAuth();
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    if (!user?.id) {
      setMessage('You must be logged in to create a ticket');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/support/create-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Ticket created successfully!');
        setFormData({ subject: '', message: '' });
        if (onTicketCreated && data.ticket.id) {
          onTicketCreated(data.ticket.id);
        }
      } else {
        setMessage(data.error || 'Failed to create ticket');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-[#121528] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Create Support Ticket</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes('successfully') ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief description of the issue"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Please provide detailed information about your issue..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isSubmitting ? 'Creating Ticket...' : 'Create Ticket'}
        </button>
      </form>
    </div>
  );
}
