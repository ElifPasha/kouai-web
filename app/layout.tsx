import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'KOU AI — Kocaeli Üniversitesi Yapay Zekâ Kulübü',
  description: 'Kocaeli Üniversitesi Yapay Zekâ Kulübü: öğren, üret, paylaş.',
  openGraph: {
    title: 'KOU AI — Kocaeli Üniversitesi Yapay Zekâ Kulübü',
    description: 'Geleceği birlikte üretiyoruz.',
    images: ['/og.png'],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOU AI — Kocaeli Üniversitesi Yapay Zekâ Kulübü',
    description: 'Geleceği birlikte üretiyoruz.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
