'use client';

import React, { useState, useMemo } from 'react';
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaCoins,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaEye,
} from 'react-icons/fa';
import { useDashboard } from '@/lib/hooks/useDashboard';
import { useAuth } from '@/components/context/AuthContext';

interface ActivityItem {
  id: number;
  type: string;
  amount: number;
  description: string;
  status: string;
  createdAt: Date;
}

const ActivityFeed: React.FC = () => {
  const { user } = useAuth();
  const { dashboard } = useDashboard(user?.email || null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const activities = dashboard?.recentActivities || [];

  // Filter activities based on active filter
  const filteredActivities = useMemo(() => {
    if (activeFilter === 'All') return activities;
    return activities.filter((activity) => {
      // Use lowercase comparison for type to handle variations like 'deposit' vs 'Deposit'
      const activityType = activity.type?.toLowerCase() || '';
      switch (activeFilter) {
        case 'Deposits':
          return activityType === 'deposit';
        case 'Withdrawals':
          return activityType === 'withdraw' || activityType === 'withdrawal';
        case 'Investments':
          return activityType === 'invest' || activityType === 'investment';
        case 'ROI Credited':
          return activityType === 'roi';
        default:
          return true;
      }
    });
  }, [activities, activeFilter]);

  // Get icon for activity type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <FaArrowDown className="text-green-400" />;
      case 'withdraw':
        return <FaArrowUp className="text-red-400" />;
      case 'invest':
        return <FaCoins className="text-blue-400" />;
      case 'roi':
        return <FaDollarSign className="text-emerald-400" />;
      case 'interest':
        return <FaWallet className="text-purple-400" />;
      default:
        return <FaClock className="text-gray-400" />;
    }
  };

  // Get status icon and color
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'Success':
        return { icon: <FaCheckCircle className="text-green-400" />, color: 'text-green-400' };
      case 'Pending':
        return { icon: <FaClock className="text-yellow-400" />, color: 'text-yellow-400' };
      case 'Failed':
        return { icon: <FaTimesCircle className="text-red-400" />, color: 'text-red-400' };
      default:
        return {
          icon: <FaExclamationTriangle className="text-orange-400" />,
          color: 'text-orange-400',
        };
    }
  };

  // Format time with urgency indicators
  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffHours < 1) {
      return { text: 'Just now', urgent: true, color: 'text-red-400' };
    } else if (diffHours < 24) {
      return {
        text: `${Math.floor(diffHours)}h ago`,
        urgent: diffHours < 2,
        color: diffHours < 2 ? 'text-orange-400' : 'text-gray-400',
      };
    } else if (diffDays < 7) {
      return { text: `${Math.floor(diffDays)}d ago`, urgent: false, color: 'text-gray-400' };
    } else {
      return { text: new Date(date).toLocaleDateString(), urgent: false, color: 'text-gray-500' };
    }
  };

  // Format amount with sign
  const formatAmount = (amount: number, type: string) => {
    const sign = type === 'withdraw' ? '-' : '+';
    const color = type === 'withdraw' ? 'text-red-400' : 'text-green-400';
    return { text: `${sign}$${amount.toLocaleString()}`, color };
  };

  const filterTabs = ['All', 'Deposits', 'Withdrawals', 'Investments', 'ROI Credited'];

  return (
    <div className="bg-neutral-900 h-[50vh] rounded-xl border border-neutral-800 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-neutral-800">
        <h3 className="text-lg font-semibold text-white mb-3">Activity Feed</h3>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                activeFilter === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Activity List */}
      <div className="max-h-96 overflow-y-auto">
        {filteredActivities.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No activities found for {activeFilter.toLowerCase()}
          </div>
        ) : (
          filteredActivities.map((activity) => {
            const timeInfo = formatTime(activity.createdAt);
            const amountInfo = formatAmount(activity.amount, activity.type);
            const statusInfo = getStatusInfo(activity.status);
            const isUrgent = timeInfo.urgent || activity.status === 'Pending';

            return (
              <div
                key={activity.id}
                className="p-4 border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-neutral-800 rounded-lg">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{activity.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs ${timeInfo.color}`}>{timeInfo.text}</span>
                        <span className="text-gray-600">•</span>
                        <div className="flex items-center gap-1">
                          {statusInfo.icon}
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              activity.status === 'Success'
                                ? 'bg-green-900/50 text-green-400'
                                : activity.status === 'Pending'
                                  ? 'bg-yellow-900/50 text-yellow-400'
                                  : activity.status === 'Failed'
                                    ? 'bg-red-900/50 text-red-400'
                                    : 'bg-gray-900/50 text-gray-400'
                            }`}
                          >
                            {activity.status}
                          </span>
                        </div>
                        {isUrgent && (
                          <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse">
                            URGENT
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${amountInfo.color}`}>{amountInfo.text}</p>
                    <button
                      className="text-gray-400 hover:text-white mt-1"
                      aria-label="View transaction details"
                    >
                      <FaEye size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-900 rounded-xl p-6 max-w-md w-full mx-4 border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Transaction Details</h3>
              <button
                onClick={() => setSelectedActivity(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  {getActivityIcon(selectedActivity.type)}
                </div>
                <div>
                  <p className="text-white font-medium">{selectedActivity.description}</p>
                  <p className="text-gray-400 text-sm">ID: {selectedActivity.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Amount</p>
                  <p
                    className={`font-semibold ${formatAmount(selectedActivity.amount, selectedActivity.type).color}`}
                  >
                    {formatAmount(selectedActivity.amount, selectedActivity.type).text}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                  <div className="flex items-center gap-2">
                    {getStatusInfo(selectedActivity.status).icon}
                    <span className={`text-sm ${getStatusInfo(selectedActivity.status).color}`}>
                      {selectedActivity.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Date & Time</p>
                <p className="text-white">
                  {new Date(selectedActivity.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
