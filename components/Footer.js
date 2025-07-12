import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-primary via-accent to-primary text-white px-6 py-8 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src="/bujji-logo.svg" alt="Bujji Chat Logo" className="w-10 h-10 rounded-full shadow-lg" />
          <span className="text-2xl font-extrabold tracking-tight drop-shadow-lg">Bujji Chat</span>
        </div>
        {/* Footer Links */}
        <nav className="flex gap-6 text-base">
          <Link href="/" className="hover:underline hover:text-accent transition">Home</Link>
          <Link href="/founder" className="hover:underline hover:text-accent transition">Founder</Link>
          <Link href="/admin" className="hover:underline hover:text-accent transition">Admin</Link>
          <Link href="/services" className="hover:underline hover:text-accent transition">Services</Link>
        </nav>
        {/* Copyright */}
        <span className="text-sm text-white/80">© {new Date().getFullYear()} Bujji Chat. All rights reserved.</span>
      </div>
    </footer>
  );
} 