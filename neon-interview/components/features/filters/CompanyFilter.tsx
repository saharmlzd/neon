'use client';

import { useUsers } from '@/contexts/UserContext';
import { Building2, ChevronDown } from 'lucide-react';

export function CompanyFilter() {
  const { companies, updateFilter, filter } = useUsers();

  return (
    <div className="relative group">
      {/* Company Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Building2 className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-primary-600 dark:text-gray-500 dark:group-focus-within:text-primary-400" />
      </div>

      {/* Select Dropdown */}
      <select
        value={filter.companyFilter}
        onChange={e => updateFilter({ companyFilter: e.target.value })}
        className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-10 text-gray-900 shadow-sm transition-all hover:border-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:focus:border-primary-400 dark:focus:ring-primary-400/25 dark:[color-scheme:dark] sm:w-auto"
        aria-label="Filter by company"
      >
        <option value="">All Companies ({companies.length})</option>
        {companies.map(company => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>

      {/* Dropdown Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-focus-within:rotate-180 group-focus-within:text-primary-600 dark:text-gray-500 dark:group-focus-within:text-primary-400" />
      </div>
    </div>
  );
}
