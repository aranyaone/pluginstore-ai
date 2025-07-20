'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Crown, Menu, X, Bot, Shield, TrendingUp, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg group-hover:scale-105 transition-transform glow-effect">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Bujji Empire
              </span>
              <div className="text-xs text-white/60">Royal AI Platform</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/services" icon={Globe}>Services</NavLink>
            <NavLink href="/bujji-ai" icon={Bot}>Queen Bujji</NavLink>
            <NavLink href="/cybersecurity" icon={Shield}>CyberSec</NavLink>
            <NavLink href="/financial-tools" icon={TrendingUp}>Finance</NavLink>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              <Link 
                href="/king-wallet" 
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-sm font-medium"
              >
                King Wallet
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 transition-transform glow-effect text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl">
            <div className="px-6 py-4 space-y-4">
              <MobileNavLink href="/services" icon={Globe}>Services</MobileNavLink>
              <MobileNavLink href="/bujji-ai" icon={Bot}>Queen Bujji</MobileNavLink>
              <MobileNavLink href="/cybersecurity" icon={Shield}>CyberSec</MobileNavLink>
              <MobileNavLink href="/financial-tools" icon={TrendingUp}>Finance</MobileNavLink>
              
              <div className="pt-4 border-t border-white/20 space-y-3">
                <Link 
                  href="/king-wallet" 
                  className="block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all text-center"
                >
                  King Wallet
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium text-center glow-effect"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, icon: Icon }) {
  return (
    <Link 
      href={href} 
      className="group flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 relative"
    >
      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span className="font-medium">{children}</span>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
    </Link>
  );
}

function MobileNavLink({ href, children, icon: Icon }) {
  return (
    <Link 
      href={href} 
      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 py-2"
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{children}</span>
    </Link>
  );
}
  