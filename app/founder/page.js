"use client";
import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend
} from "recharts";

const initialData = [
  { time: "00:00", visitors: 200, signups: 10, earnings: 100 },
  { time: "02:00", visitors: 350, signups: 18, earnings: 180 },
  { time: "04:00", visitors: 500, signups: 25, earnings: 250 },
  { time: "06:00", visitors: 700, signups: 32, earnings: 320 },
  { time: "08:00", visitors: 900, signups: 40, earnings: 400 },
  { time: "10:00", visitors: 1200, signups: 55, earnings: 600 },
  { time: "12:00", visitors: 1500, signups: 70, earnings: 800 },
];

export default function ReportsPage() {
  const [data, setData] = useState(initialData);

  // Simulate auto-refresh every 2 hours (for demo, refreshes every 10s)
  useEffect(() => {
    const interval = setInterval(() => {
      // In real app, fetch new data from your API/backend here
      setData((prev) => [
        ...prev.slice(1),
        {
          time: `${parseInt(prev[prev.length - 1].time.split(':')[0]) + 2}:00`,
          visitors: prev[prev.length - 1].visitors + Math.floor(Math.random() * 200),
          signups: prev[prev.length - 1].signups + Math.floor(Math.random() * 10),
          earnings: prev[prev.length - 1].earnings + Math.floor(Math.random() * 100),
        },
      ]);
    }, 10000); // 10s for demo; set to 2 * 60 * 60 * 1000 for 2 hours in production
    return () => clearInterval(interval);
  }, []);

  // Calculate growth rates
  const growth = (curr, prev) => prev ? (((curr - prev) / prev) * 100).toFixed(1) : "0";

  const last = data[data.length - 1];
  const prev = data[data.length - 2];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-violet-50 p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary max-w-4xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
          📈 Growth Reports (Every 2 Hours)
        </h1>
        <p className="text-lg text-subtle mb-8 text-center">
          Automated growth insights, updated every 2 hours. Track your empire’s momentum in real time!
        </p>

        {/* Growth Highlights */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6 shadow flex flex-col items-center">
            <span className="text-3xl font-bold">{last.visitors}</span>
            <span className="text-lg">Visitors</span>
            <span className="text-xs">{growth(last.visitors, prev?.visitors)}% vs last</span>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-xl p-6 shadow flex flex-col items-center">
            <span className="text-3xl font-bold">{last.signups}</span>
            <span className="text-lg">Signups</span>
            <span className="text-xs">{growth(last.signups, prev?.signups)}% vs last</span>
          </div>
          <div className="bg-gradient-to-r from-pink-400 to-violet-400 text-white rounded-xl p-6 shadow flex flex-col items-center">
            <span className="text-3xl font-bold">₹{last.earnings}</span>
            <span className="text-lg">Earnings</span>
            <span className="text-xs">{growth(last.earnings, prev?.earnings)}% vs last</span>
          </div>
        </div>

        {/* Growth Line Chart */}
        <div className="w-full mb-12">
          <h2 className="text-xl font-bold text-primary mb-4">2-Hourly Growth Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#7C3AED" strokeWidth={3} />
              <Line type="monotone" dataKey="signups" stroke="#F472B6" strokeWidth={3} />
              <Line type="monotone" dataKey="earnings" stroke="#FBBF24" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Download/Export */}
        <div className="w-full mt-4 flex flex-col items-center">
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition mb-2">
            Download PDF Report
          </button>
          <span className="text-xs text-subtle">Next auto-update: every 2 hours</span>
        </div>
      </div>
    </main>
  );
} 