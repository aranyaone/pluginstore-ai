import Link from 'next/link';
import { Crown, Globe, Mail, Phone, MapPin, Twitter, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg glow-effect">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Bujji Empire
                </span>
                <div className="text-xs text-white/60">Royal AI Platform</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              World's most advanced AI ecosystem with 100+ premium tools. 
              Building the future of intelligent automation.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/bujjiempire" icon={Twitter} />
              <SocialLink href="https://linkedin.com/company/bujjiempire" icon={Linkedin} />
              <SocialLink href="https://github.com/bujjiempire" icon={Github} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <FooterLink href="/ai-agents">AI Agents</FooterLink>
              <FooterLink href="/cybersecurity">Cyber Security</FooterLink>
              <FooterLink href="/financial-tools">Financial Tools</FooterLink>
              <FooterLink href="/auto-pilot">Auto Pilot</FooterLink>
              <FooterLink href="/ai-chatbot">AI Chatbot</FooterLink>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <FooterLink href="/bujji-ai">Queen Bujji AI</FooterLink>
              <FooterLink href="/king-wallet">King Wallet</FooterLink>
              <FooterLink href="/subscriptions">Subscriptions</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@bujjiempire.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Global Operations</span>
              </div>
            </div>
            <div className="space-y-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/founder">About Founder</FooterLink>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard number="100+" label="AI Tools" />
          <StatCard number="50K+" label="Active Users" />
          <StatCard number="99.9%" label="Uptime" />
          <StatCard number="24/7" label="Support" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-white/60 text-sm mb-4 md:mb-0">
              <span>© 2024 Bujji Empire. Crafted with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by</span>
              <Link href="/founder" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                King Srinivas Makam
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </div>
              <Link 
                href="/status" 
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Status Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="block text-white/60 hover:text-white text-sm transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, icon: Icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  );
}