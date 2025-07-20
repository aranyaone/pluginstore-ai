"use client";
import { Mail, Phone, MapPin, Clock, Send, Crown, Sparkles } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
            <Crown className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">Get in Touch with the Empire</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Contact Us
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss how Bujji Empire can help you build 
            the future of intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg glow-effect">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Send Message</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all">
                  <option value="">Select a topic</option>
                  <option value="ai-consultation">AI Consultation</option>
                  <option value="enterprise-solutions">Enterprise Solutions</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-transform glow-effect flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  details={["support@bujjiempire.com", "partnerships@bujjiempire.com"]}
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  details={["+1 (555) 123-4567", "+1 (555) 987-6543"]}
                />
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  details={["Global Operations", "Available Worldwide"]}
                />
                <ContactInfo
                  icon={Clock}
                  title="Business Hours"
                  details={["24/7 Support", "Instant Response"]}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard number="<1hr" label="Response Time" />
              <StatCard number="99.9%" label="Satisfaction Rate" />
              <StatCard number="24/7" label="Support Available" />
              <StatCard number="100+" label="Countries Served" />
            </div>

            {/* Founder Message */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Message from the King</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  "Every great empire starts with a conversation. Let's build the future of AI together."
                </p>
                <p className="text-yellow-400 font-semibold">- King Srinivas Makam</p>
                <p className="text-white/60 text-xs">Founder & Visionary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon: Icon, title, details }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-white/70 text-sm">{detail}</p>
        ))}
      </div>
    </div>
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