"use client";
import { useState } from "react";

export default function PluginStorePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-pink-50 to-yellow-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary max-w-5xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
          🧩 Plugin Store
        </h1>
        <p className="text-lg text-subtle mb-8 text-center">
          Discover, install, and earn from world-class plugins. Trending, new, and exclusive tools for your empire!
        </p>

        {/* Categories */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow">AI</span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-semibold shadow">Analytics</span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 text-white font-semibold shadow">Marketing</span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-400 to-yellow-400 text-white font-semibold shadow">Social</span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-white font-semibold shadow">Trending</span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-primary text-white font-semibold shadow">Day 1</span>
          </div>
        </div>

        {/* Trending/Day 1 Plugins */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">🔥 Trending Plugins (Day 1)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Plugin Card */}
            <div className="bg-white/80 rounded-xl shadow p-6 border border-violet-100 flex flex-col items-center">
              <span className="text-3xl mb-2">🤖</span>
              <h3 className="font-bold text-primary mb-1">AI Content Writer</h3>
              <p className="text-subtle text-center mb-2 text-sm">Generate blogs, ads, and more with AI.</p>
              <span className="text-xs text-yellow-500 mb-2">Trending • Day 1</span>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow hover:scale-105 transition">
                Earn Now
              </button>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-6 border border-yellow-100 flex flex-col items-center">
              <span className="text-3xl mb-2">📊</span>
              <h3 className="font-bold text-primary mb-1">Analytics Booster</h3>
              <p className="text-subtle text-center mb-2 text-sm">Real-time insights for your business.</p>
              <span className="text-xs text-yellow-500 mb-2">Trending • Day 1</span>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-semibold shadow hover:scale-105 transition">
                Earn Now
              </button>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-6 border border-pink-100 flex flex-col items-center">
              <span className="text-3xl mb-2">💬</span>
              <h3 className="font-bold text-primary mb-1">Social Auto-Poster</h3>
              <p className="text-subtle text-center mb-2 text-sm">Schedule and post to all socials.</p>
              <span className="text-xs text-yellow-500 mb-2">Trending • Day 1</span>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 text-white font-semibold shadow hover:scale-105 transition">
                Earn Now
              </button>
            </div>
          </div>
        </div>

        {/* All Plugins */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">All Plugins</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Repeat plugin cards here for all available plugins */}
            <div className="bg-white/80 rounded-xl shadow p-6 border border-violet-100 flex flex-col items-center">
              <span className="text-3xl mb-2">🔗</span>
              <h3 className="font-bold text-primary mb-1">Affiliate Linker</h3>
              <p className="text-subtle text-center mb-2 text-sm">Auto-insert affiliate links in your content.</p>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow hover:scale-105 transition">
                Install
              </button>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-6 border border-yellow-100 flex flex-col items-center">
              <span className="text-3xl mb-2">🛒</span>
              <h3 className="font-bold text-primary mb-1">E-Commerce Helper</h3>
              <p className="text-subtle text-center mb-2 text-sm">Boost your online store sales with smart tools.</p>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-semibold shadow hover:scale-105 transition">
                Install
              </button>
            </div>
            {/* Add more plugin cards as needed */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mt-4">
          <div className="bg-gradient-to-r from-yellow-100 via-pink-50 to-violet-100 rounded-xl p-4 shadow text-center text-primary font-semibold">
            <span className="text-xl">🚀 Start earning with plugins today! All plugins are self-built, self-upgraded, and ready for your empire.</span>
          </div>
        </div>
      </div>
    </main>
  );
} 