"use client";
import { Crown, Quote, Award, BookOpen, Lightbulb, Target, Users, TrendingUp, Globe, Heart, Star, CheckCircle } from 'lucide-react';

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-xl">
                <Crown className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Meet the Visionary</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                  King Srinivas
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                  Makam
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Founder & Visionary Leader of Bujji Empire
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A visionary entrepreneur and AI pioneer who founded Bujji Empire with the mission 
                to democratize artificial intelligence and empower businesses worldwide through 
                innovative technology solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center px-4 py-2 bg-orange-100 rounded-full">
                  <Award className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-orange-800 font-medium">AI Innovator</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-red-100 rounded-full">
                  <Users className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-800 font-medium">Thought Leader</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-yellow-100 rounded-full">
                  <Crown className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-800 font-medium">Empire Builder</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Crown className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">King Srinivas Makam</h3>
                  <p className="text-orange-100">Founder & Visionary</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" />
          <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
            "AI is not just technology—it's the key to unlocking human potential. 
            My vision is to make this power accessible to every business, 
            every entrepreneur, every dreamer."
          </blockquote>
          <div className="text-xl text-orange-100">
            — King Srinivas Makam, Founder of Bujji Empire
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From entrepreneur to AI visionary - the story behind Bujji Empire
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
                Early Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Srinivas recognized early on that artificial intelligence would transform 
                business operations. His vision was clear: create an ecosystem where AI 
                tools are not just for tech giants, but accessible to businesses of all sizes.
              </p>
              <div className="space-y-4">
                {[
                  "Identified the AI accessibility gap",
                  "Envisioned democratized AI solutions",
                  "Focused on practical business applications",
                  "Committed to user-friendly design"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 text-orange-600 mr-3" />
                Innovation Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                His approach combines cutting-edge technology with practical business needs. 
                Every tool in the Bujji Empire ecosystem is designed with the end-user in mind, 
                ensuring that powerful AI capabilities remain intuitive and actionable.
              </p>
              <div className="space-y-4">
                {[
                  "User-centric AI development",
                  "Practical over theoretical solutions",
                  "Continuous innovation mindset",
                  "Ethics-first approach to AI"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide King Srinivas in building and leading Bujji Empire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Vision-Driven",
                description: "Every decision is guided by the long-term vision of democratizing AI",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: Users,
                title: "People First",
                description: "Believing that great technology comes from empowering great people",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: Heart,
                title: "Authentic Leadership",
                description: "Leading with genuine care for customers, team, and community impact",
                color: "from-red-500 to-pink-600"
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "Embracing challenges as opportunities for innovation and improvement",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Thinking beyond borders to create solutions that benefit businesses worldwide",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Crown,
                title: "Excellence Standard",
                description: "Setting the highest standards in product quality and customer experience",
                color: "from-yellow-500 to-orange-600"
              }
            ].map((principle, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${principle.color} mb-4 shadow-lg`}>
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-orange-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Achievements</h2>
            <p className="text-xl text-orange-100">Milestones in building the AI empire</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500K+", label: "Users Empowered", icon: Users },
              { number: "100+", label: "AI Tools Created", icon: TrendingUp },
              { number: "150+", label: "Countries Reached", icon: Globe },
              { number: "4+", label: "Years of Innovation", icon: Award }
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-orange-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Personal Message</h2>
            <p className="text-xl leading-relaxed text-orange-100 mb-8">
              "Building Bujji Empire has been more than creating a business—it's been about 
              realizing a dream to make AI accessible to everyone. Every tool we create, 
              every feature we add, every user we serve brings us closer to a world where 
              intelligent automation empowers human potential."
            </p>
            <p className="text-lg text-orange-100 mb-8">
              "I invite you to join us on this journey. Together, we can build not just 
              businesses, but the future itself."
            </p>
            <div className="text-2xl font-bold">— King Srinivas Makam</div>
            <div className="text-orange-200">Founder & Visionary Leader</div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect with the Vision
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the AI empire that King Srinivas has built for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore the Empire
            </a>
            <a 
              href="/about" 
              className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 font-semibold rounded-2xl hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Learn Our Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 