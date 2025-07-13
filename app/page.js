import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ArrowRight, Globe, Bot, TrendingUp, Crown } from "lucide-react";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>💖 Welcome to Bujji Chat Room 💬</h1>
      <p>Deployment success! Your empire is live. 🚀</p>
    </main>
  );
}
