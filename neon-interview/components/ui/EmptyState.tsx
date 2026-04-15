interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="mb-4 text-6xl">🔍</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300\">{description}</p>
        {action && (
          <button onClick={action.onClick} className="btn-primary">
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}
