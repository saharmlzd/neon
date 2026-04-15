import { ThemeToggle } from '../ui/ThemeToggle';

export function PageHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Dashboard
          </h1>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
