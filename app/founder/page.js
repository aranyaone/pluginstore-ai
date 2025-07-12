export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-100 via-pink-50 to-fuchsia-50 p-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-violet-100 max-w-2xl w-full flex flex-col items-center">
        {/* Loyalty Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">👑</span>
          <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-4 py-1 rounded-full font-bold shadow">Loyalty Badge: Crown Founder</span>
        </div>
        {/* Founder Image */}
        <img
          src="/founder-photo.jpg"
          alt="Founder Srinivas"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 shadow-xl border-4 border-primary"
        />
        <h1 className="text-4xl font-extrabold text-primary mb-2 drop-shadow-lg">
          👑 King Srinivas
        </h1>
        <p className="text-subtle max-w-2xl text-center mb-6 text-lg leading-relaxed font-medium">
          <span className="text-primary font-bold">Visionary. Builder. Dreamer.</span>
          <br />
          Founder of <span className="text-accent font-bold">Bujji Chat</span> — on a mission to build the world’s most emotionally intelligent AI. Passionate about innovation, digital empowerment, and reshaping the future of business through love + logic.
        </p>
        <ul className="mb-6 text-base text-subtle list-disc list-inside">
          <li>10+ years in AI and digital transformation</li>
          <li>Speaker at global tech conferences</li>
          <li>Advocate for ethical, human-centered AI</li>
        </ul>
        {/* Crown Story Section */}
        <div className="w-full bg-gradient-to-r from-yellow-100 via-pink-50 to-violet-100 rounded-xl p-6 shadow mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
            👑 The Crown Story
          </h2>
          <p className="text-subtle text-base mb-2">
            The crown is more than a symbol—it's a journey. From humble beginnings to building a world-class AI platform, my story is about loyalty, resilience, and the relentless pursuit of excellence. Every challenge was a stepping stone, every setback a lesson, and every success a shared victory with my community.
          </p>
          <p className="text-primary font-semibold">
            "Wear your crown with pride, but build your empire with love and vision."
          </p>
        </div>
        {/* Founder Images Gallery */}
        <div className="w-full mb-8">
          <h3 className="text-xl font-bold text-primary mb-2">Gallery</h3>
          <div className="grid grid-cols-2 gap-4">
            <img src="/founder-photo.jpg" alt="Founder 1" className="rounded-xl shadow border-2 border-primary" />
            <img src="/founder2.jpg" alt="Founder 2" className="rounded-xl shadow border-2 border-accent" />
            <img src="/founder3.jpg" alt="Founder 3" className="rounded-xl shadow border-2 border-primary" />
            <img src="/founder4.jpg" alt="Founder 4" className="rounded-xl shadow border-2 border-accent" />
          </div>
        </div>
        {/* Video Gallery */}
        <div className="w-full mb-4">
          <h3 className="text-xl font-bold text-primary mb-2">Founder Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <video controls className="rounded-xl shadow border-2 border-primary">
              <source src="/founder-video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="rounded-xl shadow border-2 border-accent">
              <source src="/founder-video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="rounded-xl shadow border-2 border-primary">
              <source src="/founder-video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Contact Links */}
        <div className="flex gap-6 text-base mt-4">
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