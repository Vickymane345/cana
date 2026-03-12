import useSWR from 'swr';

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

interface NotificationsData {
  notifications: Notification[];
  unreadCount: number;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useNotifications(userEmail: string | null) {
  const { data, error, mutate } = useSWR<NotificationsData>(
    userEmail ? `/api/notifications?user=${encodeURIComponent(userEmail)}` : null,
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds for notifications
      revalidateOnFocus: true,
    }
  );

  return {
    notifications: data?.notifications || [],
    unreadCount: data?.unreadCount || 0,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
