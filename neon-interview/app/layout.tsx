import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@/contexts/UserContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/ui';
import { ErrorBoundary } from '@/components/common';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'User Dashboard',
  description: 'A modern dashboard for managing users',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-page flex min-h-full flex-col">
        <ErrorBoundary>
          <ToastProvider>
            <UserProvider>
              {children}
              <ToastContainer />
            </UserProvider>
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
