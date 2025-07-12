import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 bg-gradient-to-br from-violet-500 via-fuchsia-400 to-pink-300 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-400 opacity-30 rounded-full blur-3xl animate-pulse" />
      </div>
      {/* Main Content */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg text-center z-10">
        Welcome to <span className="text-yellow-200">Bujji Chat</span>
      </h1>
      <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl text-center z-10 font-medium">
        The world’s most emotionally intelligent AI chat — built for visionaries, dreamers, and empire builders.
      </p>
      <button className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-violet-500 text-white font-bold text-lg shadow-xl hover:scale-105 transition z-10">
        Start Your Empire 💖
      </button>
    </section>
  );
}
