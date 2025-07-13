"use client";
import { motion } from 'framer-motion';
import { 
  Crown, Users, Target, Award, Globe, Heart, Zap, 
  TrendingUp, Shield, Star, Rocket, Lightbulb 
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "99.9%", label: "Uptime" },
    { icon: Star, value: "4.9/5", label: "User Rating" }
  ];

  const team = [
    {
      name: "King Srinivas",
      role: "Founder & CEO",
      image: "/founder-avatar.jpg",
      bio: "Visionary entrepreneur and AI enthusiast building the future of emotional AI",
      achievements: ["10+ years in AI", "Serial Entrepreneur", "AI Ethics Advocate"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image: "/ai-chief.jpg",
      bio: "Leading AI research and development with focus on emotional intelligence",
      achievements: ["PhD in AI", "20+ Research Papers", "AI Ethics Expert"]
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Engineering",
      image: "/engineering-head.jpg",
      bio: "Building scalable, world-class AI infrastructure and systems",
      achievements: ["15+ years in Tech", "Ex-Google Engineer", "System Architect"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "We believe AI should understand and respond to human emotions"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data and conversations are protected with enterprise-grade security"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries in AI technology and user experience"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making AI accessible to everyone, everywhere"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-16 h-16 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Bujji Chat
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Building the world's most emotionally intelligent AI platform for visionaries, dreamers, and empire builders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                To democratize AI technology and create emotionally intelligent systems that understand, 
                empathize, and assist humans in building their dreams and empires. We believe that 
                the future belongs to those who can harness the power of AI with human emotion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Values
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
              >
                <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Meet Our Team
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                <div className="space-y-2">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      • {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Journey
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {[
              { year: "2024", title: "Bujji Chat Launch", description: "World's first emotionally intelligent AI chat platform" },
              { year: "2023", title: "AI Research Breakthrough", description: "Developed advanced emotional intelligence algorithms" },
              { year: "2022", title: "Company Founded", description: "King Srinivas founded the company with a vision" },
              { year: "2021", title: "Vision Conceived", description: "The idea of emotional AI was born" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
                <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join the Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the future where AI understands your emotions and helps you build your empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold rounded-xl hover:scale-105 transition">
                Start Your Empire
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-xl hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 