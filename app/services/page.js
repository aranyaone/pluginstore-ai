'use client';
import Link from 'next/link';
import { 
  Bot, Shield, TrendingUp, Zap, Brain, Globe, Users, 
  Crown, Sparkles, Camera, FileText, QrCode, BarChart3,
  Lock, Wallet, ArrowRight, Star
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
            <Crown className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">100+ Premium AI Tools & Services</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Empire Services
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to transform your business operations, 
            enhance security, and accelerate growth.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} service={service} featured={true} />
          ))}
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={index} category={category} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg glow-effect">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Empire?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI tools to revolutionize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-transform glow-effect flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl shadow-2xl hover:bg-white/20 transition-all flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, featured = false }) {
  return (
    <Link 
      href={service.href}
      className={`group block p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105 ${featured ? 'lg:col-span-1' : ''}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform`}>
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            {service.featured && (
              <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-500/20 rounded-lg">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400 text-xs font-medium">Popular</span>
              </div>
            )}
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.description}</p>
          <div className="flex items-center text-white/60 text-sm">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function ServiceCategory({ category }) {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
        <p className="text-white/70 max-w-2xl mx-auto">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

const featuredServices = [
  {
    icon: Bot,
    title: "Queen Bujji AI",
    description: "Advanced conversational AI with emotional intelligence and business automation capabilities.",
    color: "from-purple-500 to-violet-500",
    href: "/bujji-ai",
    featured: true
  },
  {
    icon: Shield,
    title: "Cyber Security Empire",
    description: "Military-grade security solutions with AI-powered threat detection and prevention.",
    color: "from-green-500 to-emerald-500",
    href: "/cybersecurity-empire",
    featured: true
  },
  {
    icon: Wallet,
    title: "King Wallet",
    description: "Revolutionary financial management with AI-driven insights and automated transactions.",
    color: "from-yellow-500 to-orange-500",
    href: "/king-wallet",
    featured: true
  }
];

const serviceCategories = [
  {
    title: "AI & Automation",
    description: "Intelligent solutions to automate and optimize your business processes.",
    services: [
      {
        icon: Brain,
        title: "AI Agents",
        description: "Deploy autonomous AI agents for customer service, sales, and operations.",
        color: "from-blue-500 to-cyan-500",
        href: "/ai-agents"
      },
      {
        icon: Zap,
        title: "Auto Pilot",
        description: "Complete business automation with intelligent decision-making capabilities.",
        color: "from-orange-500 to-red-500",
        href: "/auto-pilot"
      },
      {
        icon: Users,
        title: "AI Chat Premium",
        description: "Enterprise-grade chatbot solutions with advanced NLP and ML capabilities.",
        color: "from-pink-500 to-rose-500",
        href: "/ai-chat-premium"
      }
    ]
  },
  {
    title: "Financial Tools",
    description: "Smart financial solutions powered by AI and machine learning.",
    services: [
      {
        icon: TrendingUp,
        title: "AI Stocks",
        description: "AI-powered stock analysis and trading recommendations with real-time insights.",
        color: "from-green-500 to-teal-500",
        href: "/ai-stocks"
      },
      {
        icon: BarChart3,
        title: "Global Trend Analyzer",
        description: "Advanced market analysis and trend prediction using big data and AI.",
        color: "from-indigo-500 to-purple-500",
        href: "/global-trend-analyzer"
      },
      {
        icon: QrCode,
        title: "QR Payment System",
        description: "Seamless payment processing with advanced QR code technology.",
        color: "from-violet-500 to-pink-500",
        href: "/qr-payment"
      }
    ]
  },
  {
    title: "Creative & Productivity",
    description: "Enhance creativity and productivity with our AI-powered creative tools.",
    services: [
      {
        icon: Camera,
        title: "Photo Editor AI",
        description: "Professional photo editing with AI-powered enhancement and effects.",
        color: "from-cyan-500 to-blue-500",
        href: "/photo-editor"
      },
      {
        icon: FileText,
        title: "Content Creator",
        description: "Generate high-quality content for blogs, social media, and marketing.",
        color: "from-emerald-500 to-green-500",
        href: "/content-creator"
      },
      {
        icon: Globe,
        title: "Website Animations",
        description: "Create stunning web animations and interactive experiences.",
        color: "from-purple-500 to-indigo-500",
        href: "/website-animations"
      }
    ]
  }
];
