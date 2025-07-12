export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-purple-50 p-6">
      <img
        src="/founder-photo.jpg"
        alt="Founder Srinivas"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 shadow-xl border-4 border-purple-200"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
        👑 King Srinivas
      </h1>
      <p className="text-gray-700 max-w-2xl text-center mb-6 text-sm sm:text-base leading-relaxed">
        Founder of <strong>Bujji Chat</strong> — on a mission to build the world’s most emotionally intelligent, AI-powered empire. Passionate about innovation, digital empowerment, and reshaping the future of business through love + logic.
      </p>
      <div className="flex gap-6 text-sm sm:text-base">
        <a
          href="mailto:srinivasmakam26@gmail.com"
          className="text-blue-600 hover:underline hover:text-purple-600"
        >
          📧 Email
        </a>
        <a
          href="https://linkedin.com/in/srinivasmakam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline hover:text-purple-600"
        >
          🔗 LinkedIn
        </a>
      </div>
    </main>
  );
} 