export default function WalletPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-violet-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
          💰 Wallet & Withdraw
        </h1>
        {/* Balance */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-3xl font-bold text-yellow-500">₹2,345</span>
          <span className="text-subtle text-sm">Available Balance</span>
        </div>
        {/* Withdraw Methods */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Withdraw Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* UPI */}
            <div className="bg-white/80 rounded-xl shadow p-4 border border-violet-100 flex flex-col items-center">
              <span className="text-2xl mb-2">🇮🇳</span>
              <h4 className="font-bold text-primary mb-1">UPI</h4>
              <p className="text-subtle text-center mb-2 text-sm">Withdraw instantly to your UPI ID.</p>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow hover:scale-105 transition">
                Withdraw via UPI
              </button>
            </div>
            {/* Razorpay */}
            <div className="bg-white/80 rounded-xl shadow p-4 border border-violet-100 flex flex-col items-center">
              <span className="text-2xl mb-2">💳</span>
              <h4 className="font-bold text-primary mb-1">Razorpay</h4>
              <p className="text-subtle text-center mb-2 text-sm">Secure payout to your bank or wallet.</p>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-accent to-primary text-white font-semibold shadow hover:scale-105 transition">
                Withdraw via Razorpay
              </button>
            </div>
            {/* PayPal */}
            <div className="bg-white/80 rounded-xl shadow p-4 border border-violet-100 flex flex-col items-center">
              <span className="text-2xl mb-2">🌐</span>
              <h4 className="font-bold text-primary mb-1">PayPal</h4>
              <p className="text-subtle text-center mb-2 text-sm">Withdraw globally to your PayPal account.</p>
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow hover:scale-105 transition">
                Withdraw via PayPal
              </button>
            </div>
            {/* QR Code */}
            <div className="bg-white/80 rounded-xl shadow p-4 border border-violet-100 flex flex-col items-center">
              <span className="text-2xl mb-2">🔲</span>
              <h4 className="font-bold text-primary mb-1">QR Code</h4>
              <p className="text-subtle text-center mb-2 text-sm">Scan to receive payments instantly.</p>
              <img src="/sample-qr.png" alt="QR Code" className="w-20 h-20 my-2 rounded shadow" />
              <span className="text-xs text-subtle">UPI/PayPal/Wallet</span>
            </div>
          </div>
        </div>
        {/* Payout Info */}
        <div className="w-full mt-8">
          <h3 className="text-lg font-bold text-primary mb-2">Payout System</h3>
          <div className="bg-gradient-to-r from-yellow-100 via-pink-50 to-violet-100 rounded-xl p-6 shadow flex flex-col items-center">
            <p className="text-subtle text-center mb-2">
              All payouts are processed securely to your registered accounts:
            </p>
            <ul className="text-primary font-semibold text-center mb-2">
              <li>UPI: <span className="text-accent">srinivasmakam357@gmail.com</span></li>
              <li>PayPal: <span className="text-accent">srinivasmakam26@gmail.com</span></li>
              <li>Razorpay: <span className="text-accent">srinivasmakam357@gmail.com</span></li>
            </ul>
            <p className="text-xs text-subtle">Note: All payout methods are self-managed, self-upgraded, and built for maximum security and speed.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 