import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Bot, TrendingUp, Crown, Sparkles, Shield, Brain, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Royal Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
            <Crown className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">Royal AI Empire • Founded by King Srinivas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Bujji Empire
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            World's Most Advanced AI Ecosystem • 100+ Premium Tools • Royal Intelligence Platform
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-12 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-green-300 text-sm font-medium">🚀 Empire Live & Operational</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/bujji-ai" 
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center glow-effect"
            >
              <Bot className="w-5 h-5 mr-2" />
              Meet Queen Bujji AI
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Empire Tools
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: Brain,
              title: "AI Agents",
              description: "Advanced AI workforce for every task",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Shield,
              title: "Cyber Security",
              description: "Military-grade protection systems",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: TrendingUp,
              title: "Financial Tools",
              description: "Smart investment & trading platforms",
              color: "from-purple-500 to-violet-500"
            },
            {
              icon: Zap,
              title: "Auto Pilot",
              description: "Automated business operations",
              color: "from-orange-500 to-red-500"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
            <Crown className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm">
              Crafted by <Link href="/founder" className="text-yellow-400 hover:text-yellow-300 font-semibold">King Srinivas Makam</Link> • Visionary & Empire Builder
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
