import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CurrencyProvider } from './context/CurrencyContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bujji Empire - World\'s Most Advanced AI Ecosystem',
  description: 'Premium AI platform with 100+ intelligent tools. Experience the future of automation with Queen Bujji AI, King Wallet, CyberSecurity Empire, and revolutionary financial tools. Built by King Srinivas Makam.',
  keywords: 'AI ecosystem, Bujji Empire, Queen Bujji AI, King Wallet, artificial intelligence, automation tools, cybersecurity, financial AI, King Srinivas Makam, premium AI platform, business automation',
  authors: [{ name: 'King Srinivas Makam' }],
  creator: 'King Srinivas Makam',
  publisher: 'Bujji Empire',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bujjiempire.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bujji Empire - World\'s Most Advanced AI Ecosystem',
    description: 'Premium AI platform with 100+ intelligent tools. Experience the future of automation with Queen Bujji AI and revolutionary business tools.',
    url: 'https://bujjiempire.com',
    siteName: 'Bujji Empire',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bujji Empire - Royal AI Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bujji Empire - World\'s Most Advanced AI Ecosystem',
    description: 'Premium AI platform with 100+ intelligent tools. Built by King Srinivas Makam.',
    images: ['/og-image.jpg'],
    creator: '@bujjiempire',
    site: '@bujjiempire',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CurrencyProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
