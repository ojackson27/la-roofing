import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat-var' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var' });

export const metadata: Metadata = {
  title: 'LA Roofing',
  description: 'Professional roofing services in Los Angeles',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
