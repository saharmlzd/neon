interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div>
      <h2 className="text-primary mb-4 text-xl font-semibold">{title}</h2>
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
      <dt className="text-muted text-sm font-medium">{label}</dt>
      <dd className="text-primary mt-1">
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
