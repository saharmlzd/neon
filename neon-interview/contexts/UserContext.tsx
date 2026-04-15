'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { User, UserListFilter } from '@/types/user';
import { fetchUsers } from '@/services/userService';

interface UserContextType {
  users: User[];
  filteredUsers: User[];
  isLoading: boolean;
  error: string | null;
  filter: UserListFilter;
  companies: string[];
  loadUsers: () => Promise<void>;
  updateFilter: (filter: Partial<UserListFilter>) => void;
  retryLoad: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<UserListFilter>({
    searchQuery: '',
    companyFilter: '',
  });

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load users');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateFilter = useCallback((newFilter: Partial<UserListFilter>) => {
    setFilter(prev => ({ ...prev, ...newFilter }));
  }, []);

  const retryLoad = useCallback(async () => {
    await loadUsers();
  }, [loadUsers]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(filter.searchQuery.toLowerCase());
    const matchesCompany =
      !filter.companyFilter || user.company.name === filter.companyFilter;
    return matchesSearch && matchesCompany;
  });

  const companies = Array.from(new Set(users.map(u => u.company.name))).sort();

  return (
    <UserContext.Provider
      value={{
        users,
        filteredUsers,
        isLoading,
        error,
        filter,
        companies,
        loadUsers,
        updateFilter,
        retryLoad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within UserProvider');
  }
  return context;
}
