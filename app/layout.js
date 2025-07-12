import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bujji Chat',
  description: 'AI-powered chat for your empire',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bujji Chat – Built for Empires</title>
        <meta name="description" content="AI-powered emotional chat built by King Srinivas for the future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI chat, Bujji, King Srinivas, emotional AI, business, empire, chatbot, India, SaaS" />
        <meta name="author" content="King Srinivas" />
        <meta property="og:title" content="Bujji Chat – Built for Empires" />
        <meta property="og:description" content="AI-powered emotional chat built by King Srinivas for the future." />
        <meta property="og:image" content="/bujji-logo.svg" />
        <meta property="og:url" content="https://your-vercel-project.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
