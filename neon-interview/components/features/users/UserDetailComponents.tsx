interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <dl className="space-y-3">{children}</dl>
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
  isLink?: boolean;
}

export function InfoItem({ label, value, isLink }: InfoItemProps) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {label}
      </dt>
      <dd className="mt-1 text-gray-900 dark:text-white">
        {isLink ? (
          <a
            href={`https://${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline dark:text-primary-400"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
