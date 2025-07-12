export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-violet-50 p-6">
      <h1 className="text-4xl font-extrabold text-primary mb-8 drop-shadow-lg text-center">
        👑 Pricing & Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* CrownPlus Plan */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-yellow-300 flex flex-col items-center relative">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl">👑</span>
          <h2 className="text-2xl font-extrabold text-yellow-500 mb-2">CrownPlus</h2>
          <p className="text-4xl font-bold text-primary mb-2">₹1 <span className="text-lg font-medium text-subtle">/ day</span></p>
          <ul className="mb-6 text-base text-subtle list-disc list-inside text-center">
            <li>Unlimited AI chat</li>
            <li>Priority support</li>
            <li>Early access to new features</li>
            <li>Cancel anytime</li>
          </ul>
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-violet-500 text-white font-bold shadow-lg hover:scale-105 transition">
            Get CrownPlus
          </button>
        </div>
        {/* Plugin Pricing */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary flex flex-col items-center">
          <span className="text-4xl mb-2">🔌</span>
          <h2 className="text-2xl font-extrabold text-primary mb-2">Plugin Marketplace</h2>
          <p className="text-lg text-subtle mb-4 text-center">Supercharge your Bujji Chat with premium plugins. Pay only for what you use!</p>
          <ul className="mb-6 text-base text-subtle list-disc list-inside text-center">
            <li>Most plugins: <span className="text-primary font-bold">₹2-₹3</span> per use (2-3 hours access)</li>
            <li>One-click install</li>
            <li>Safe & secure</li>
          </ul>
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition">
            Explore Plugins
          </button>
        </div>
      </div>
      <p className="mt-12 text-center text-subtle max-w-2xl text-lg">
        <span className="font-bold text-primary">Our Strategy:</span> Make world-class AI accessible to everyone. Start for just ₹1/day, add only what you need, and grow your empire with Bujji Chat’s flexible, affordable plans.
      </p>
    </main>
  );
} 