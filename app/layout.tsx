import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://boarsama.github.io'),
  title: 'Seattle HR and Legal Professionals Association',
  description: 'A professional association supporting dialogue between human resources and legal professionals in the greater Seattle community.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Seattle HR and Legal Professionals Association',
    description: 'Where people, policy, and purpose meet.',
    type: 'website',
    url: 'https://boarsama.github.io/',
    images: [
      {
        url: 'https://boarsama.github.io/og.png',
        width: 1200,
        height: 630,
        alt: 'Seattle HR and Legal Professionals Association',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seattle HR and Legal Professionals Association',
    description: 'Where people, policy, and purpose meet.',
    images: ['https://boarsama.github.io/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
