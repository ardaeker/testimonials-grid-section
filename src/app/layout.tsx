import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Barlow_Semi_Condensed } from 'next/font/google';

const font = Barlow_Semi_Condensed({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600'],
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ecf2f8',
};

export const metadata: Metadata = {
  title: 'Frontend Mentor - Testimonials grid section',
  description:
    'This website is a solution for the Testimonials grid section challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'Testimonials grid section',
    'Testimonials grid section solution',
    'Testimonials grid section challenge',
    'Testimonials grid section challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Frontend Mentor - Testimonials grid section',
    description:
      'This website is a solution to the Testimonials grid section challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - Testimonials grid section',
    images: [
      {
        url: 'opengraph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'http://localhost:3000',
  },
  icons: {
    icon: '/favicon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
