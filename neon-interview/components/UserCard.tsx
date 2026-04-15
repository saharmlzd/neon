'use client';

import { User } from '@/types/user';
import Link from 'next/link';
import { UserCardAvatar, ContactInfo, CardFooter } from './UserCardElements';

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
      <article className="group h-full overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500">
        <div className="p-6">
          {/* Header with avatar and name */}
          <div className="mb-4 flex items-center gap-4">
            <UserCardAvatar initials={initials} />
            <div className="flex-1 overflow-hidden">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
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
