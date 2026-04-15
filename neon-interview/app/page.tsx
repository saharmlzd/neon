'use client';

import { useEffect } from 'react';
import { useUsers } from '@/contexts/UserContext';
import { useToast } from '@/contexts/ToastContext';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { PageHeader } from '@/components/layout';
import { OfflineAlert, EmptyState, ErrorState } from '@/components/ui';
import { FilterBar } from '@/components/features/filters';
import { UserList } from '@/components/features/users';

export default function HomePage() {
  const { filteredUsers, isLoading, error, loadUsers, retryLoad } = useUsers();
  const { showToast } = useToast();
  const isOffline = useNetworkStatus();

  // Handle network status changes
  useEffect(() => {
    const handleOnline = () => {
      showToast('You are back online! 🎉', 'success');
      loadUsers().catch(() => {
        showToast('Failed to load users', 'error');
      });
    };

    const handleOffline = () => {
      showToast('You are offline. Some features may not work. 📡', 'error');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [showToast, loadUsers]);

  // Load users on mount
  useEffect(() => {
    if (!isOffline) {
      loadUsers().catch(() => {
        showToast('Failed to load users', 'error');
      });
    }
  }, [loadUsers, showToast, isOffline]);

  return (
    <div className="min-h-screen">
      <PageHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {isOffline && <OfflineAlert />}

        <FilterBar />

        {error ? (
          <ErrorState message={error} onRetry={retryLoad} />
        ) : filteredUsers.length === 0 && !isLoading ? (
          <EmptyState
            title="No users found"
            description="Try adjusting your search or filter criteria"
            action={{
              label: 'Clear Filters',
              onClick: () => window.location.reload(),
            }}
          />
        ) : (
          <UserList users={filteredUsers} isLoading={isLoading} />
        )}
      </main>
    </div>
  );
}
