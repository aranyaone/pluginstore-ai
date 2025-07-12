export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-100 via-violet-50 to-pink-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-primary max-w-xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-2 drop-shadow-lg">
          🛡️ Admin Dashboard
        </h1>
        <p className="text-subtle max-w-2xl text-center mb-6 text-lg leading-relaxed font-medium">
          Welcome, admin! Here you can manage users, monitor analytics, and control the empire’s AI tools. (This is a premium placeholder — add your real admin features here!)
        </p>
        <div className="flex gap-6 text-base">
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition">
            Manage Users
          </button>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-white font-bold shadow-lg hover:scale-105 transition">
            View Analytics
          </button>
        </div>
      </div>
    </main>
  );
} 