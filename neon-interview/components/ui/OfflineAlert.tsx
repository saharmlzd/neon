export function OfflineAlert() {
  return (
    <div className="mb-6 rounded-lg border border-yellow-400 bg-yellow-50 p-4 text-center dark:border-yellow-700 dark:bg-yellow-900/20">
      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
        📡 You&apos;re currently offline. Some features may not work.
      </p>
    </div>
  );
}
