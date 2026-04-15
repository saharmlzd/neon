'use client';

import { User } from '@/types/user';
import Link from 'next/link';
import {
  UserCardAvatar,
  ContactInfo,
  CardFooter,
} from '@/components/features/users/UserCardElements';

interface UserCardProps {
  user: User;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function UserCard({ user }: UserCardProps) {
  const initials = getInitials(user.name);

  return (
    <Link href={`/users/${user.id}`}>
      <article className="card-interactive group h-full overflow-hidden rounded-3xl ring-1 ring-gray-200/70 shadow-sm shadow-gray-900/5 transition-[ring-color,box-shadow,transform] hover:shadow-md hover:shadow-gray-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 dark:ring-gray-700/70 dark:shadow-black/20 dark:hover:shadow-black/30 dark:hover:ring-primary-500/40 dark:focus-visible:ring-primary-400/30">
        <div className="flex h-full flex-col p-6">
          {/* Header with avatar and name */}
          <div className="mb-5 flex items-center gap-4">
            <UserCardAvatar initials={initials} />
            <div className="flex-1 overflow-hidden">
              <h2 className="text-primary mb-1 text-lg font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {user.name}
              </h2>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                @{user.username}
              </p>
            </div>
          </div>

          {/* Contact info section */}
          <ContactInfo email={user.email} companyName={user.company.name} />

          {/* Footer with location */}
          <CardFooter city={user.address.city} />
        </div>
      </article>
    </Link>
  );
}
