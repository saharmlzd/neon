import {
  EmailIcon,
  CompanyIcon,
  LocationIcon,
  ArrowIcon,
} from './UserCardIcons';

interface UserCardAvatarProps {
  initials: string;
}

export function UserCardAvatar({ initials }: UserCardAvatarProps) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white transition-transform group-hover:scale-105 dark:bg-blue-500">
      {initials}
    </div>
  );
}

interface ContactInfoProps {
  email: string;
  companyName: string;
}

export function ContactInfo({ email, companyName }: ContactInfoProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        <EmailIcon />
        <span className="truncate">{email}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        <CompanyIcon />
        <span className="truncate">{companyName}</span>
      </div>
    </div>
  );
}

interface CardFooterProps {
  city: string;
}

export function CardFooter({ city }: CardFooterProps) {
  return (
    <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-600">
      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
        <LocationIcon />
        <span>{city}</span>
      </div>
      <div className="flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        <span>View</span>
        <ArrowIcon />
      </div>
    </div>
  );
}
