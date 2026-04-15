function SkeletonCard() {
  return (
    <div className="h-full animate-pulse overflow-hidden rounded-xl border border-gray-300 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-gray-200 dark:bg-gray-600" />

        <div className="flex-1 space-y-2">
          <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-600" />
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600" />
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600" />
        <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-600" />
      </div>
    </div>
  );
}

export function SkeletonList({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
