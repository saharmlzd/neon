'use client';

import { useUsers } from '@/contexts/UserContext';
import { useDebounce } from '@/hooks/useDebounce';
import { DEBOUNCE_DELAY } from '@/constants';
import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar() {
  const { updateFilter, filter } = useUsers();
  const [searchInput, setSearchInput] = useState(filter.searchQuery);
  const debouncedSearch = useDebounce(searchInput, DEBOUNCE_DELAY);

  useEffect(() => {
    updateFilter({ searchQuery: debouncedSearch });
  }, [debouncedSearch, updateFilter]);

  const handleClear = () => {
    setSearchInput('');
  };

  return (
    <div className="relative group">
      {/* Search Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-primary-600 dark:text-gray-500 dark:group-focus-within:text-primary-400" />
      </div>

      {/* Input Field */}
      <input
        type="search"
        placeholder="Search users by name..."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-12 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 hover:border-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:hover:border-gray-600 dark:focus:border-primary-400 dark:focus:ring-primary-400/25 dark:[color-scheme:dark]"
        aria-label="Search users"
      />

      {/* Clear Button */}
      {searchInput && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          aria-label="Clear search"
        >
          <span className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <X className="h-4 w-4" />
          </span>
        </button>
      )}
    </div>
  );
}
