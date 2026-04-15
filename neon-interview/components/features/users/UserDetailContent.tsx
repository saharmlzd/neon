'use client';

import Link from 'next/link';
import { User } from '@/types/user';
import { ThemeToggle } from '@/components/ui';
import { InfoItem, InfoSection } from './UserDetailComponents';

interface UserDetailContentProps {
  user: User;
}

export function UserDetailContent({ user }: UserDetailContentProps) {
  return (
    <div className="bg-page min-h-screen">
      <header className="header-glass shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              ← Back to Dashboard
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="card p-8">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoSection title="Contact Information">
              <InfoItem label="Email" value={user.email} />
              <InfoItem label="Phone" value={user.phone} />
              <InfoItem label="Website" value={user.website} isLink />
            </InfoSection>

            <InfoSection title="Address">
              <InfoItem label="Street" value={user.address.street} />
              <InfoItem label="Suite" value={user.address.suite} />
              <InfoItem label="City" value={user.address.city} />
              <InfoItem label="Zipcode" value={user.address.zipcode} />
            </InfoSection>

            <InfoSection title="Company">
              <InfoItem label="Name" value={user.company.name} />
              <InfoItem label="Catch Phrase" value={user.company.catchPhrase} />
            </InfoSection>
          </div>
        </div>
      </main>
    </div>
  );
}
