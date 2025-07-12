import Link from "next/link";

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
        {/* Menu Links */}
        <div className="flex gap-6 text-base">
          <Link href="/" className="hover:underline hover:text-accent transition">
            Home
          </Link>
          <Link href="/founder" className="hover:underline hover:text-accent transition">
            Founder
          </Link>
          <Link href="/admin" className="hover:underline hover:text-accent transition">
            Admin
          </Link>
          <Link href="/services" className="hover:underline hover:text-accent transition">
            Services
          </Link>
          <Link href="/pricing" className="hover:underline hover:text-accent transition">
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
} 