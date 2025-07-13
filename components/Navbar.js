"use client";
import Link from "next/link";
import CurrencySelector from "../app/components/CurrencySelector";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-primary via-accent to-primary text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src="/bujji-logo.svg" alt="Bujji Chat Logo" className="w-10 h-10 rounded-full shadow-lg" />
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg hover:text-accent transition">
            Bujji 💖 Chat
          </Link>
        </div>
        
        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-6 text-base">
          <Link href="/" className="hover:underline hover:text-accent transition">
            Home
          </Link>
          <Link href="/about" className="hover:underline hover:text-accent transition">
            About
          </Link>
          <Link href="/founder" className="hover:underline hover:text-accent transition">
            Founder
          </Link>
          <Link href="/blog" className="hover:underline hover:text-accent transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline hover:text-accent transition">
            Contact
          </Link>
          <Link href="/support" className="hover:underline hover:text-accent transition">
            Support
          </Link>
          <Link href="/privacy" className="hover:underline hover:text-accent transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline hover:text-accent transition">
            Terms
          </Link>
          <Link href="/admin" className="hover:underline hover:text-accent transition">
            Admin
          </Link>
          <Link href="/services" className="hover:underline hover:text-accent transition">
            Services
          </Link>
          <Link href="/subscriptions" className="hover:underline hover:text-accent transition">
            Subscriptions
          </Link>
          <Link href="/pricing" className="hover:underline hover:text-accent transition">
            Pricing
          </Link>
          <Link href="/comparison" className="hover:underline hover:text-accent transition">
            Compare
          </Link>
          <Link href="/ai-tools" className="hover:underline hover:text-accent transition">
            AI Tools
          </Link>
          <Link href="/global-trend-analyzer" className="hover:underline hover:text-accent transition">
            Trends
          </Link>
          <Link href="/wallet" className="hover:underline hover:text-accent transition">
            Wallet
          </Link>
          <Link href="/earnings" className="hover:underline hover:text-accent transition">
            Earnings
          </Link>
          <Link href="/analytics" className="hover:underline hover:text-accent transition">
            Analytics
          </Link>
        </div>

        {/* Currency Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          <CurrencySelector />
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-accent transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden hidden mt-4 pb-4">
        <div className="flex flex-col gap-3 text-base">
          <Link href="/" className="hover:underline hover:text-accent transition px-4 py-2">
            Home
          </Link>
          <Link href="/about" className="hover:underline hover:text-accent transition px-4 py-2">
            About
          </Link>
          <Link href="/founder" className="hover:underline hover:text-accent transition px-4 py-2">
            Founder
          </Link>
          <Link href="/blog" className="hover:underline hover:text-accent transition px-4 py-2">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline hover:text-accent transition px-4 py-2">
            Contact
          </Link>
          <Link href="/support" className="hover:underline hover:text-accent transition px-4 py-2">
            Support
          </Link>
          <Link href="/privacy" className="hover:underline hover:text-accent transition px-4 py-2">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline hover:text-accent transition px-4 py-2">
            Terms
          </Link>
          <Link href="/admin" className="hover:underline hover:text-accent transition px-4 py-2">
            Admin
          </Link>
          <Link href="/services" className="hover:underline hover:text-accent transition px-4 py-2">
            Services
          </Link>
          <Link href="/subscriptions" className="hover:underline hover:text-accent transition px-4 py-2">
            Subscriptions
          </Link>
          <Link href="/pricing" className="hover:underline hover:text-accent transition px-4 py-2">
            Pricing
          </Link>
          <Link href="/comparison" className="hover:underline hover:text-accent transition px-4 py-2">
            Compare
          </Link>
          <Link href="/ai-tools" className="hover:underline hover:text-accent transition px-4 py-2">
            AI Tools
          </Link>
          <Link href="/global-trend-analyzer" className="hover:underline hover:text-accent transition px-4 py-2">
            Trends
          </Link>
          <Link href="/wallet" className="hover:underline hover:text-accent transition px-4 py-2">
            Wallet
          </Link>
          <Link href="/earnings" className="hover:underline hover:text-accent transition px-4 py-2">
            Earnings
          </Link>
          <Link href="/analytics" className="hover:underline hover:text-accent transition px-4 py-2">
            Analytics
          </Link>
        </div>
      </div>
    </nav>
  );
} 