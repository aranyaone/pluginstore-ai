'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, Shield, TrendingUp, Zap, Brain, Globe, Users, Crown, 
  Sparkles, Camera, FileText, QrCode, BarChart3, Lock, Wallet, 
  ArrowRight, Star, ChevronDown, ChevronUp, Play, CheckCircle,
  Eye, EyeOff, Settings, Award, Heart, Target
} from 'lucide-react';

export default function ServicesPage() {
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [showAdminFeatures, setShowAdminFeatures] = useState(false);

  const toggleFeature = (id) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Public Features - Always visible
  const publicFeatures = [
    {
      id: 'ai-chat',
      icon: Bot,
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI for customer support and automation',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      stats: '24/7 Available',
      link: '/ai-chatbot',
      details: {
        overview: 'Advanced AI-powered chat system with natural language processing',
        features: [
          'Natural language understanding',
          'Multi-language support',
          'Context-aware responses',
          'Integration APIs',
          'Custom training'
        ],
        pricing: 'Starting at $29/month',
        users: '50,000+ businesses'
      }
    },
    {
      id: 'content-creator',
      icon: FileText,
      title: 'Content Creation',
      description: 'AI-powered content generation for blogs, social media, and marketing',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      stats: '10M+ Words',
      link: '/content-creator',
      details: {
        overview: 'Generate high-quality content across multiple formats and platforms',
        features: [
          'Blog post generation',
          'Social media content',
          'Marketing copy',
          'SEO optimization',
          'Brand voice training'
        ],
        pricing: 'Starting at $19/month',
        users: '25,000+ creators'
      }
    },
    {
      id: 'image-editor',
      icon: Camera,
      title: 'AI Photo Editor',
      description: 'Professional photo editing with AI-powered enhancement tools',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      stats: '1M+ Photos',
      link: '/photo-editor',
      details: {
        overview: 'Transform photos with professional AI-powered editing capabilities',
        features: [
          'Background removal',
          'Object enhancement',
          'Style transfer',
          'Upscaling & restoration',
          'Batch processing'
        ],
        pricing: 'Starting at $15/month',
        users: '100,000+ designers'
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Data insights and reporting with AI-powered analysis',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      stats: '99.9% Accurate',
      link: '/analytics',
      details: {
        overview: 'Comprehensive business intelligence with predictive analytics',
        features: [
          'Real-time dashboards',
          'Predictive modeling',
          'Custom reports',
          'Data visualization',
          'API integrations'
        ],
        pricing: 'Starting at $49/month',
        users: '15,000+ companies'
      }
    },
    {
      id: 'qr-payments',
      icon: QrCode,
      title: 'QR Payment System',
      description: 'Secure digital payment processing with QR code technology',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      stats: '100% Secure',
      link: '/qr-payment',
      details: {
        overview: 'Fast, secure payment processing with QR code technology',
        features: [
          'Instant QR generation',
          'Multi-currency support',
          'Real-time tracking',
          'Fraud protection',
          'Mobile optimization'
        ],
        pricing: '2.9% + $0.30 per transaction',
        users: '5,000+ merchants'
      }
    },
    {
      id: 'security-tools',
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security tools and threat detection systems',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      stats: 'Enterprise Grade',
      link: '/cybersecurity',
      details: {
        overview: 'Military-grade security with AI-powered threat detection',
        features: [
          'Real-time monitoring',
          'Threat intelligence',
          'Vulnerability scanning',
          'Incident response',
          'Compliance reporting'
        ],
        pricing: 'Starting at $99/month',
        users: '2,000+ enterprises'
      }
    }
  ];

  // Admin Features - Only visible when toggled
  const adminFeatures = [
    {
      id: 'king-wallet',
      icon: Crown,
      title: 'King Wallet (Admin)',
      description: 'Royal treasury management and financial empire controls',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      stats: 'Crown Level',
      link: '/king-wallet',
      adminOnly: true,
      details: {
        overview: 'Complete financial control and treasury management for empire operations',
        features: [
          'Multi-currency wallets',
          'Real-time transactions',
          'Investment tracking',
          'Revenue analytics',
          'Partner payouts'
        ],
        pricing: 'Enterprise Only',
        users: 'Restricted Access'
      }
    },
    {
      id: 'admin-dashboard',
      icon: Settings,
      title: 'Empire Control Center',
      description: 'Master dashboard for managing all empire operations and users',
      color: 'from-gray-500 to-slate-600',
      bgColor: 'bg-gray-50',
      stats: 'Admin Only',
      link: '/admin',
      adminOnly: true,
      details: {
        overview: 'Centralized control panel for empire-wide management and monitoring',
        features: [
          'User management',
          'System monitoring',
          'Revenue tracking',
          'Service controls',
          'Analytics overview'
        ],
        pricing: 'Admin Access',
        users: 'Royal Circle Only'
      }
    },
    {
      id: 'withdrawal-system',
      icon: Wallet,
      title: 'Withdrawal Management',
      description: 'Advanced withdrawal processing and financial operations',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      stats: 'Secure',
      link: '/withdrawals',
      adminOnly: true,
      details: {
        overview: 'Sophisticated withdrawal processing with multi-layer security',
        features: [
          'Automated processing',
          'Multi-signature security',
          'Compliance checks',
          'Audit trails',
          'Risk management'
        ],
        pricing: 'Internal System',
        users: 'Treasury Team'
      }
    }
  ];

  const allFeatures = showAdminFeatures ? [...publicFeatures, ...adminFeatures] : publicFeatures;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">100+ AI-Powered Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              AI Services
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive AI-powered tools and services designed to transform your business operations 
            and accelerate growth across every industry
          </p>

          {/* Admin Toggle */}
          <div className="mb-12">
            <button
              onClick={() => setShowAdminFeatures(!showAdminFeatures)}
              className={`flex items-center space-x-2 mx-auto px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                showAdminFeatures 
                  ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {showAdminFeatures ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              <span>{showAdminFeatures ? 'Hide Admin Features' : 'Show Admin Features'}</span>
              <Crown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <div key={feature.id} className={`group ${feature.bgColor} border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${feature.adminOnly ? 'ring-2 ring-yellow-400' : ''}`}>
                {/* Feature Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    {feature.adminOnly && (
                      <div className="px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                        ADMIN
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-semibold rounded-full`}>
                      {feature.stats}
                    </span>
                    <button
                      onClick={() => toggleFeature(feature.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {expandedFeatures[feature.id] ? 
                        <ChevronUp className="w-5 h-5" /> : 
                        <ChevronDown className="w-5 h-5" />
                      }
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedFeatures[feature.id] && (
                  <div className="px-8 pb-8 border-t border-gray-200">
                    <div className="pt-6">
                      <p className="text-gray-600 mb-4">{feature.details.overview}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-4">
                        {feature.details.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Pricing:</span>
                          <p className="text-gray-600">{feature.details.pricing}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Users:</span>
                          <p className="text-gray-600">{feature.details.users}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="px-8 pb-8">
                  <Link 
                    href={feature.link}
                    className={`flex items-center justify-center w-full py-3 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Launch Tool
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Trusted Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500K+", label: "Active Users", icon: Users },
              { number: "100+", label: "AI Tools", icon: Brain },
              { number: "150+", label: "Countries", icon: Globe },
              { number: "99.9%", label: "Uptime", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500,000+ businesses already using our AI ecosystem to automate, 
              analyze, and accelerate their growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                View Pricing
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
