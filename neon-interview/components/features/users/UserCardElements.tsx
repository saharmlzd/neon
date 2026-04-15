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
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 dark:bg-primary-500 dark:ring-white/10">
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
    <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
        <LocationIcon />
        <span>{city}</span>
      </div>
      <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm transition-colors group-hover:border-gray-300 group-hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:group-hover:border-gray-600 dark:group-hover:bg-gray-700/60">
        <span>View profile</span>
        <ArrowIcon />
      </div>
    </div>
  );
}
