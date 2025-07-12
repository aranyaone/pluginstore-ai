// components/BujjiChat.js
export default function BujjiChat() {
  return (
    <div className="p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg mx-auto mt-10 border border-violet-100">
      <h2 className="text-3xl font-extrabold mb-4 text-primary flex items-center gap-2">
        💖 Bujji Chat
      </h2>
      <p className="text-subtle text-lg mb-2">
        Welcome to your AI-powered chat space. Let’s build your empire together!
      </p>
      <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition">
        Start Chatting
      </button>
    </div>
  );
} 