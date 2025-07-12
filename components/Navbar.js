import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-white hover:text-purple-300 transition">
          Bujji 💖 Chat
        </Link>

        {/* Menu Links */}
        <div className="flex gap-6 text-sm sm:text-base">
          <Link href="/" className="hover:underline hover:text-purple-300 transition">
            Home
          </Link>
          <Link href="/founder" className="hover:underline hover:text-purple-300 transition">
            Founder
          </Link>
        </div>
      </div>
    </nav>
  );
} 