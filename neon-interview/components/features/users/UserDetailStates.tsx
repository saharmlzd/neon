export function UserDetailLoading() {
  return (
    <div className="bg-page flex min-h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400"></div>
    </div>
  );
}

interface UserDetailErrorProps {
  error: string;
  onBack: () => void;
}

export function UserDetailError({ error, onBack }: UserDetailErrorProps) {
  const isNotFound =
    error.includes('vanished') || error.includes("doesn't exist");
  const emoji = isNotFound ? '👻' : '⚠️';

  return (
    <div className="bg-page flex min-h-screen items-center justify-center p-4">
      <div className="card max-w-md p-8 text-center">
        <div className="mb-4 text-6xl">{emoji}</div>
        <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          {isNotFound ? 'User Not Found' : 'Oops!'}
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{error}</p>
        <button onClick={onBack} className="btn-primary">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
