import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'A minimal Next.js starter with Tailwind CSS, ESLint, and Prettier configured.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 font-sans antialiased">{children}</body>
    </html>
  );
}
