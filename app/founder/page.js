export default function SocialLaunchPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-violet-50 to-yellow-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary max-w-3xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
          🚀 Social & Launch Studio
        </h1>
        <p className="text-lg text-subtle mb-8 text-center">
          Create, launch, and share world-class content & reels. Integrate with YouTube, Instagram, WhatsApp, and monetize with affiliate links.
        </p>
        {/* Auto Content Creation */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">🎬 Auto Reels & Video Generator</h2>
          <p className="text-subtle mb-4">
            Instantly generate YouTube Reels and Shorts with AI-powered scripts, visuals, and music. <br />
            <span className="text-primary font-semibold">Inspired by: Gemini, Sora, Filmora</span>
          </p>
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition">
            Generate Reel Now
          </button>
        </div>
        {/* Social Sharing */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">🔗 Share & Launch</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-red-500 text-white font-semibold shadow hover:scale-105 transition flex items-center gap-2">
              <span>▶️</span> YouTube
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow hover:scale-105 transition flex items-center gap-2">
              <span>📸</span> Instagram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-green-500 text-white font-semibold shadow hover:scale-105 transition flex items-center gap-2">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
        {/* Affiliate Links */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">💸 Affiliate Marketplace</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://www.amazon.in/?tag=your-affiliate-id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-100 border border-yellow-300 shadow hover:scale-105 transition">
              <img src="/amazon-logo.svg" alt="Amazon" className="w-8 h-8" /> Amazon
            </a>
            <a href="https://www.clickbank.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-100 border border-pink-300 shadow hover:scale-105 transition">
              <img src="/clickbank-logo.svg" alt="Clickbank" className="w-8 h-8" /> Clickbank
            </a>
            <a href="https://www.cuelinks.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 border border-blue-300 shadow hover:scale-105 transition">
              <img src="/cuelinks-logo.svg" alt="Cuelinks" className="w-8 h-8" /> Cuelinks
            </a>
            <a href="https://www.vcommission.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-100 border border-violet-300 shadow hover:scale-105 transition">
              <img src="/vcommission-logo.svg" alt="V Commission" className="w-8 h-8" /> V Commission
            </a>
            <a href="https://www.meesho.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-200 border border-pink-400 shadow hover:scale-105 transition">
              <img src="/meesho-logo.svg" alt="Meesho" className="w-8 h-8" /> Meesho
            </a>
          </div>
          <p className="mt-4 text-xs text-subtle text-center">
            All affiliate links and social accounts are managed via <span className="font-bold text-primary">srinivasmakam357@gmail.com</span>
          </p>
        </div>
        {/* Coming Soon */}
        <div className="w-full mt-4">
          <div className="bg-gradient-to-r from-yellow-100 via-pink-50 to-violet-100 rounded-xl p-4 shadow text-center text-primary font-semibold">
            More automation, AI content, and advanced analytics coming soon!
          </div>
        </div>
      </div>
    </main>
  );
} 