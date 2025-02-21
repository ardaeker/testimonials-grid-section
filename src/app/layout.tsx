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
  title: 'Arda Eker - Testimonials grid section',
  description:
    'A semantic and accessible grid layout with responsive design and SEO optimization.',
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
  metadataBase: new URL('https://testimonials-grid-section-flax-nu.vercel.app/'),
  openGraph: {
    title: 'Arda Eker - Testimonials grid section',
    description:
      'A semantic and accessible grid layout with responsive design and SEO optimization.',
    siteName: 'Arda Eker - Testimonials grid section',
    images: [
      {
        url: 'opengraph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://testimonials-grid-section-flax-nu.vercel.app',
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
