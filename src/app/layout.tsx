import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Man',
  description: 'Website for managing projects'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <div id="modals"></div>
        <div id="loaders"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
}
