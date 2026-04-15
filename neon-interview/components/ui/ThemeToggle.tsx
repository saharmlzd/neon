'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-button bg-gray-200 shadow-input dark:bg-gray-700"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-button bg-white p-2.5 shadow-input transition-all hover:shadow-input-focus dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
