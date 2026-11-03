import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GoodEnough Energy | Advanced BESS Gigafactory & Energy Storage Solutions',
  description: 'GoodEnough Energy operates India’s leading BESS gigafactory, delivering liquid-cooled StorEDGE commercial and utility battery energy storage systems.',
  keywords: 'GoodEnough Energy, BESS, Battery Energy Storage Systems, StorEDGE, India BESS Gigafactory, Clean Energy, Renewable Energy Storage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

