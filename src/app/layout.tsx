import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Toaster } from 'react-hot-toast';
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Indian Driving License",
    "RTO Learner's License Test",
    "Road Signs India",
    "Traffic Fines MV Act 2019",
    "Learn Driving India",
    "Car Anatomy",
    "Car Buying Guide India",
    "Fuel Economy Calculator",
  ],
  authors: [{ name: 'RoadReady Team' }],
  metadataBase: new URL('https://roadready.in'),
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-navy-950 font-sans antialiased selection:bg-brand-500 selection:text-navy-950">
        <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
        <Navbar />
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb />
          <main className="pb-12">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
