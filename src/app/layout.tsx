import type { Metadata } from 'next';

import { Header } from '~/components/Header';
import { NavigationBar } from '~/components/NavigationBar';

import './globals.css';

export const metadata: Metadata = {
  title: 'Project Man',
  description: 'Website for managing projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="drawer sm:drawer-open">
          <input id="navigation" type="checkbox" className="drawer-toggle" />

          <main className="drawer-content">{children}</main>

          <NavigationBar />
        </div>
      </body>
    </html>
  );
}
