export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-pink-50 to-fuchsia-100 p-6">
      <h1 className="text-4xl font-extrabold text-primary mb-8 drop-shadow-lg text-center">
        🌟 Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-violet-100 flex flex-col items-center">
          <span className="text-3xl mb-2">🤖</span>
          <h2 className="text-xl font-bold text-primary mb-1">AI Chatbot</h2>
          <p className="text-subtle text-center mb-2">24/7 smart assistant for your business and ideas.</p>
          <button className="mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow hover:scale-105 transition">
            Try Now
          </button>
        </div>
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-violet-100 flex flex-col items-center">
          <span className="text-3xl mb-2">📊</span>
          <h2 className="text-xl font-bold text-primary mb-1">Analytics</h2>
          <p className="text-subtle text-center mb-2">Track your empire’s growth with real-time insights.</p>
          <button className="mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-accent to-primary text-white font-semibold shadow hover:scale-105 transition">
            View Dashboard
          </button>
        </div>
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-violet-100 flex flex-col items-center">
          <span className="text-3xl mb-2">🔗</span>
          <h2 className="text-xl font-bold text-primary mb-1">Integrations</h2>
          <p className="text-subtle text-center mb-2">Connect with your favorite tools and platforms.</p>
          <button className="mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow hover:scale-105 transition">
            Explore
          </button>
        </div>
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-violet-100 flex flex-col items-center">
          <span className="text-3xl mb-2">💬</span>
          <h2 className="text-xl font-bold text-primary mb-1">Support</h2>
          <p className="text-subtle text-center mb-2">Get help from our expert team, anytime.</p>
          <button className="mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-accent to-primary text-white font-semibold shadow hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
} 