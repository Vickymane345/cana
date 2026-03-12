'use client';

import { useState, useRef, useEffect } from 'react';
import { FaBell, FaUserShield } from 'react-icons/fa';
import { useNotifications } from '@/lib/hooks/useNotifications';
import { useAuth } from '@/components/context/AuthContext';
import Link from 'next/link';

interface Notification {
  id: number;
  userId: number;
  type: string;
  message: string;
  status: string;
  relatedId?: number;
  isRead: boolean;
  createdAt: string;
}

interface PendingCounts {
  pendingDeposits: number;
  pendingWithdrawals: number;
}

export default function NotificationButton() {
  const { user } = useAuth();
  const { notifications, unreadCount, mutate } = useNotifications(user?.email || null);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingCounts, setPendingCounts] = useState<PendingCounts>({ pendingDeposits: 0, pendingWithdrawals: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if user is admin
  const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  // Fetch pending counts for admin
  useEffect(() => {
    if (isAdmin) {
      const fetchPendingCounts = async () => {
        try {
          // Fetch pending deposits
          const depositsRes = await fetch('/api/deposits?user=' + process.env.NEXT_PUBLIC_ADMIN_EMAIL);
          const depositsData = await depositsRes.json();
          
          // Fetch pending withdrawals
          const withdrawalsRes = await fetch('/api/withdrawal');
          const withdrawalsData = await withdrawalsRes.json();
          
          const pendingDeposits = depositsData.pendingDeposits?.length || 0;
          const pendingWithdrawals = withdrawalsData.data?.filter((w: any) => w.status === 'Pending').length || 0;
          
          setPendingCounts({ pendingDeposits, pendingWithdrawals });
        } catch (error) {
          console.error('Error fetching pending counts:', error);
        }
      };
      
      fetchPendingCounts();
    }
  }, [isAdmin]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mark notifications as read when dropdown opens
  useEffect(() => {
    if (isOpen && unreadCount > 0 && user?.email) {
      fetch('/api/notifications/mark-read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user.email }),
      }).then(() => {
        mutate(); // Refresh notifications
      });
    }
  }, [isOpen, unreadCount, user?.email, mutate]);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-blue-400';
    }
  };

  const hasPendingItems = isAdmin && (pendingCounts.pendingDeposits + pendingCounts.pendingWithdrawals > 0);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-[#0f274f]"
      >
        <FaBell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-[#0f274f] rounded-lg shadow-xl border border-gray-600 z-50 max-h-96 overflow-hidden">
          <div className="p-4 border-b border-gray-600">
            <h3 className="text-white font-semibold">Notifications</h3>
          </div>

          {/* Admin Dashboard Link - Show when there are pending deposits or withdrawals */}
          {hasPendingItems && (
            <div className="p-3 border-b border-gray-600 bg-[#1a3a5c]">
              <Link
                href="/admin/dashboard"
                className="flex items-center justify-between w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <FaUserShield className="text-white" />
                  <span className="text-white font-medium">Admin Dashboard</span>
                </div>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {pendingCounts.pendingDeposits + pendingCounts.pendingWithdrawals}
                </span>
              </Link>
              <div className="mt-2 text-xs text-gray-400">
                {pendingCounts.pendingDeposits} pending deposit(s), {pendingCounts.pendingWithdrawals} pending withdrawal(s)
              </div>
            </div>
          )}

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-gray-400 text-center">No notifications yet</div>
            ) : (
              notifications.map((notification: Notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-700 hover:bg-[#1a3a5c] transition-colors duration-150 ${
                    !notification.isRead ? 'bg-[#0a1f3d]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className={`text-sm ${getStatusColor(notification.status)}`}>
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTime(notification.createdAt)}
                      </p>
                    </div>
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-600 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
