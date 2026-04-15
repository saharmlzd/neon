interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-4">
      <div className="max-w-md rounded-card bg-red-50 p-8 text-center dark:bg-red-900/20">
        <div className="mb-4 text-6xl">⚠️</div>
        <h3 className="mb-2 text-xl font-semibold text-red-900 dark:text-red-100">
          Error Loading Data
        </h3>
        <p className="mb-6 text-red-700 dark:text-red-300">{message}</p>
        <button
          onClick={onRetry}
          className="btn rounded-button bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700 focus:ring-red-500"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
