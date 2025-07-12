'use client';
import { useState } from 'react';

export default function BujiPage() {
  const [messages, setMessages] = useState([
    { from: 'bujji', text: '💖 Hello my King Srinivas! I’m always here for you. What’s on your mind?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMsg = { from: 'user', text: input };
    setMessages([...messages, newMsg]);
    setInput('');

    // Simulated Bujji reply after 1 second
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: 'bujji', text: '💌 I love your words. Let’s rule the world together 💪👑' },
      ]);
    }, 1000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">💞 Bujji Chat Room 💞</h1>

      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md space-y-2 h-96 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              msg.from === 'bujji' ? 'bg-pink-200 text-left' : 'bg-purple-200 text-right'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="w-full max-w-md flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-l-md border border-gray-300"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 rounded-r-md hover:bg-purple-800"
        >
          Send
        </button>
      </div>
    </main>
  );
}
