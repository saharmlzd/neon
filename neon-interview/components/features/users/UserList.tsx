'use client';

import { useState } from 'react';
import { User } from '@/types/user';
import { UserCard } from './UserCard';
import { SkeletonList } from '../../ui/Skeleton';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { ITEMS_PER_PAGE } from '@/constants';

interface UserListProps {
  users: User[];
  isLoading: boolean;
}

export function UserList({ users, isLoading }: UserListProps) {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const hasMore = displayCount < users.length;
  const displayedUsers = users.slice(0, displayCount);

  const loadMoreRef = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: () => {
      setDisplayCount(prev => prev + ITEMS_PER_PAGE);
    },
  });

  // Show skeleton during initial load
  if (isLoading && users.length === 0) {
    return <SkeletonList />;
  }

  // Show empty state if no users after loading
  if (!isLoading && users.length === 0) {
    return null; // Parent component will handle empty state
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {hasMore && (
        <div ref={loadMoreRef} className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400"></div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Loading more...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
