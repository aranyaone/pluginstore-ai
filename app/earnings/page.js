export default function EarningsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-violet-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary max-w-3xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
          💸 Affiliate & Earnings Dashboard
        </h1>
        <p className="text-lg text-subtle mb-8 text-center">
          Track your affiliate income, plugin earnings, and payout status in real time.
        </p>

        {/* Total Earnings */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 w-full mb-8">
          <div className="flex flex-col items-center bg-gradient-to-r from-yellow-200 via-pink-100 to-violet-100 rounded-xl p-6 shadow w-full">
            <span className="text-3xl font-bold text-yellow-500">₹18,750</span>
            <span className="text-subtle text-sm">Total Earnings</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-r from-violet-200 via-pink-100 to-yellow-100 rounded-xl p-6 shadow w-full">
            <span className="text-2xl font-bold text-primary">₹2,500</span>
            <span className="text-subtle text-sm">Next Payout (Auto)</span>
            <span className="text-xs text-subtle">Scheduled: 1st of every month</span>
          </div>
        </div>

        {/* Affiliate Programs */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Affiliate Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-xl shadow p-4 border border-yellow-300 flex flex-col items-center">
              <img src="/amazon-logo.svg" alt="Amazon" className="w-8 h-8 mb-2" />
              <span className="font-bold text-primary">Amazon</span>
              <span className="text-xs text-subtle mb-2">Earnings: ₹7,200</span>
              <span className="text-xs text-green-600">Last payout: Success</span>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-4 border border-pink-300 flex flex-col items-center">
              <img src="/meesho-logo.svg" alt="Meesho" className="w-8 h-8 mb-2" />
              <span className="font-bold text-primary">Meesho</span>
              <span className="text-xs text-subtle mb-2">Earnings: ₹3,500</span>
              <span className="text-xs text-green-600">Last payout: Success</span>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-4 border border-blue-300 flex flex-col items-center">
              <img src="/clickbank-logo.svg" alt="Clickbank" className="w-8 h-8 mb-2" />
              <span className="font-bold text-primary">Clickbank</span>
              <span className="text-xs text-subtle mb-2">Earnings: ₹2,800</span>
              <span className="text-xs text-green-600">Last payout: Success</span>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-4 border border-violet-300 flex flex-col items-center">
              <img src="/vcommission-logo.svg" alt="V Commission" className="w-8 h-8 mb-2" />
              <span className="font-bold text-primary">V Commission</span>
              <span className="text-xs text-subtle mb-2">Earnings: ₹1,200</span>
              <span className="text-xs text-green-600">Last payout: Success</span>
            </div>
          </div>
        </div>

        {/* Tools/Plugin Earnings */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Tools & Plugin Earnings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-xl shadow p-4 border border-primary flex flex-col items-center">
              <span className="text-2xl mb-2">🤖</span>
              <span className="font-bold text-primary">AI Chatbot</span>
              <span className="text-xs text-subtle mb-2">Earnings: ₹2,000</span>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-4 border border-accent flex flex-col items-center">
              <span className="text-2xl mb-2">📊</span>
              <span className="font-bold text-primary">Analytics Plugin</span>
              <span className="text-xs text-subtle mb-2">Earnings: ₹1,050</span>
            </div>
          </div>
        </div>

        {/* Payout Info */}
        <div className="w-full mt-4">
          <div className="bg-gradient-to-r from-yellow-100 via-pink-50 to-violet-100 rounded-xl p-4 shadow text-center text-primary font-semibold">
            All payouts are processed automatically to your registered accounts: <br />
            <span className="text-accent">srinivasmakam357@gmail.com</span> & <span className="text-accent">srinivasmakam26@gmail.com</span>
          </div>
        </div>
      </div>
    </main>
  );
} 