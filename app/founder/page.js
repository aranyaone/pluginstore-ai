export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-100 via-pink-50 to-fuchsia-50 p-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-violet-100 max-w-xl w-full flex flex-col items-center">
        <img
          src="/founder-photo.jpg"
          alt="Founder Srinivas"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 shadow-xl border-4 border-primary"
        />
        <h1 className="text-4xl font-extrabold text-primary mb-2 drop-shadow-lg">
          👑 King Srinivas
        </h1>
        <p className="text-subtle max-w-2xl text-center mb-6 text-base leading-relaxed">
          Founder of <span className="font-bold text-accent">Bujji Chat</span> — on a mission to build the world’s most emotionally intelligent, AI-powered empire. Passionate about innovation, digital empowerment, and reshaping the future of business through love + logic.
        </p>
        <div className="flex gap-6 text-base">
          <a
            href="mailto:srinivasmakam26@gmail.com"
            className="text-primary hover:underline hover:text-accent transition"
          >
            📧 Email
          </a>
          <a
            href="https://linkedin.com/in/srinivasmakam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline hover:text-accent transition"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
} 