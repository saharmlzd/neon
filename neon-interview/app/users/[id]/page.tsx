'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { User } from '@/types/user';
import { fetchUserById } from '@/services/userService';
import { useToast } from '@/contexts/ToastContext';
import {
  UserDetailLoading,
  UserDetailError,
} from '@/components/features/users';
import { UserDetailContent } from '@/components/features/users';

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { showToast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    setIsOffline(!navigator.onLine);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      if (isOffline) {
        setError('You are offline. Please check your internet connection.');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const userData = await fetchUserById(Number(params.id));
        setUser(userData);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to load';
        if (msg.includes('404') || msg.includes('not found')) {
          setError(
            'Oops! This user seems to have vanished into the digital void. 🚀'
          );
        } else {
          setError(msg);
        }
        showToast(msg, 'error');
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, [params.id, showToast, isOffline]);

  if (isLoading) return <UserDetailLoading />;
  if (error || !user) {
    const displayError =
      error ||
      "🔍 Hmm... This user doesn't exist in our universe. Maybe they're in another dimension?";
    return (
      <UserDetailError error={displayError} onBack={() => router.push('/')} />
    );
  }

  return <UserDetailContent user={user} />;
}
