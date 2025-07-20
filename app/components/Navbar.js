'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Crown, Menu, X, Bot, Shield, TrendingUp, Globe, Users, Award, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const companyDropdown = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Our mission and values' },
    { name: 'Meet the Founder', href: '/founder', icon: Crown, description: 'King Srinivas Makam' },
    { name: 'Contact', href: '/contact', icon: Globe, description: 'Get in touch' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent">
                Bujji Empire
              </span>
              <div className="text-xs text-gray-500">AI Ecosystem</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/services" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <Bot className="w-4 h-4" />
              <span className="font-medium">Services</span>
            </Link>
            
            <Link 
              href="/ai-tools" 
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">AI Tools</span>
            </Link>
            
            <Link 
              href="/cybersecurity" 
              className="px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span className="font-medium">Security</span>
            </Link>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span className="font-medium">Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                  {companyDropdown.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href}
                      className="flex items-start space-x-3 px-6 py-4 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/pricing" 
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <Award className="w-4 h-4" />
              <span className="font-medium">Pricing</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/bujji-ai" 
              className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/services" 
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link 
                href="/services" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Bot className="w-5 h-5" />
                <span className="font-medium">Services</span>
              </Link>
              
              <Link 
                href="/ai-tools" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">AI Tools</span>
              </Link>
              
              <Link 
                href="/cybersecurity" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">Security</span>
              </Link>

              {/* Mobile Company Section */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Company</div>
                <div className="space-y-1 ml-4">
                  {companyDropdown.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/pricing" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Award className="w-5 h-5" />
                <span className="font-medium">Pricing</span>
              </Link>

              {/* Mobile CTA */}
              <div className="px-4 py-4 border-t border-gray-200 space-y-3">
                <Link 
                  href="/bujji-ai" 
                  className="block w-full px-4 py-3 text-center text-indigo-600 font-medium border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/services" 
                  className="block w-full px-4 py-3 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
  