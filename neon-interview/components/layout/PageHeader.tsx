import { ThemeToggle } from '../ui/ThemeToggle';

export function PageHeader() {
  return (
    <header className="header-glass sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm dark:bg-gray-900/60 dark:ring-gray-700">
          <h1 className="text-primary text-3xl font-bold">User Dashboard</h1>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
