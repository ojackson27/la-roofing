import type { ReactNode } from 'react';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat-var' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var' });

export const metadata = {
  title: 'LA Roofing',
  description: 'Professional roofing services in Los Angeles',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
