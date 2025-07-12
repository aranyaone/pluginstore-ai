"use client";
import { useState } from "react";

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-pink-50 to-yellow-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
          💬 Feedback & Support
        </h1>
        <p className="text-lg text-subtle mb-8 text-center">
          Need help, want to share feedback, or just say hi? Use the form below or chat with Bujji AI!
        </p>

        {/* Feedback Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-violet-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-violet-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="p-3 rounded-lg border border-violet-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-8 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-green-600 font-bold mb-8">
            Thank you for your feedback! We’ll get back to you soon.
          </div>
        )}

        {/* Support Chatbot (ChatGPT-powered placeholder) */}
        <div className="w-full max-w-md mt-4">
          <h2 className="text-xl font-bold text-primary mb-2">🤖 Bujji AI Support Chat</h2>
          <div className="bg-white/80 rounded-xl shadow p-4 border border-violet-100 flex flex-col items-center">
            <p className="text-subtle text-center mb-2 text-sm">
              Chat with Bujji AI for instant answers, 24/7!
            </p>
            {/* Placeholder for ChatGPT or your own chatbot integration */}
            <iframe
              src="https://chat.openai.com/"
              title="Bujji AI Chat"
              className="w-full h-64 rounded-lg border-2 border-primary"
            />
            <p className="text-xs text-subtle mt-2">
              (This is a demo. For a real chatbot, integrate your own API or widget.)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 