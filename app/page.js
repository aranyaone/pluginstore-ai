import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Bot, TrendingUp, Crown, Sparkles, Shield, Brain, Zap, Star, Users, Award, ChevronDown, Play, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/15 to-red-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-7xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
            <Crown className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold">World's #1 AI Empire • 500K+ Users</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              Build Your AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Empire Today
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            The complete AI ecosystem with 100+ premium tools, advanced automation, 
            and intelligent solutions for modern businesses
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>500,000+ Users</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>Enterprise Grade</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link 
              href="/services" 
              className="group px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/about" 
              className="px-10 py-4 bg-white border-2 border-gray-300 hover:border-indigo-500 text-gray-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Brain,
              title: "AI Intelligence",
              description: "Advanced machine learning and neural networks",
              color: "from-blue-500 to-indigo-600",
              bgColor: "bg-blue-50",
              stats: "10+ Models"
            },
            {
              icon: Shield,
              title: "Enterprise Security", 
              description: "Military-grade encryption and protection",
              color: "from-emerald-500 to-teal-600",
              bgColor: "bg-emerald-50",
              stats: "100% Secure"
            },
            {
              icon: TrendingUp,
              title: "Business Growth",
              description: "Automated workflows and smart analytics",
              color: "from-orange-500 to-red-600",
              bgColor: "bg-orange-50",
              stats: "300% ROI"
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Instant processing and real-time results",
              color: "from-purple-500 to-pink-600",
              bgColor: "bg-purple-50",
              stats: "< 100ms"
            }
          ].map((feature, index) => (
            <div key={index} className={`group p-8 ${feature.bgColor} border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer`}>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-semibold rounded-full`}>
                  {feature.stats}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Fortune 500", count: "200+" },
              { name: "Startups", count: "10,000+" },
              { name: "Countries", count: "150+" },
              { name: "API Calls", count: "1B+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.count}</div>
                <div className="text-gray-300">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the tools and services that will transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/services" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <Bot className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">AI Tools</h3>
                <p className="text-blue-100 mb-4">100+ AI-powered tools and services</p>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            
            <Link href="/about" className="group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">About Us</h3>
                <p className="text-emerald-100 mb-4">Learn about our mission and vision</p>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            
            <Link href="/founder" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <Crown className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Meet the Founder</h3>
                <p className="text-orange-100 mb-4">King Srinivas Makam's story</p>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
