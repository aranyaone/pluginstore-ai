"use client";
import ServiceManager from "../components/ServiceManager";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-violet-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
            🔧 Services & Management
          </h1>
          <p className="text-lg text-gray-600">
            Manage your active services, usage, and subscriptions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border-4 border-green-300">
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-lg font-semibold text-gray-800">Active Services</h3>
              <div className="text-3xl font-bold text-green-600 mt-2">2</div>
              <p className="text-sm text-gray-500 mt-1">Currently Running</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border-4 border-yellow-300">
            <div className="text-center">
              <div className="text-3xl mb-2">⏸️</div>
              <h3 className="text-lg font-semibold text-gray-800">Paused Services</h3>
              <div className="text-3xl font-bold text-yellow-600 mt-2">1</div>
              <p className="text-sm text-gray-500 mt-1">Temporarily Stopped</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border-4 border-red-300">
            <div className="text-center">
              <div className="text-3xl mb-2">❌</div>
              <h3 className="text-lg font-semibold text-gray-800">Cancelled Services</h3>
              <div className="text-3xl font-bold text-red-600 mt-2">1</div>
              <p className="text-sm text-gray-500 mt-1">Stopped Services</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border-4 border-blue-300">
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-semibold text-gray-800">Total Usage</h3>
              <div className="text-3xl font-bold text-blue-600 mt-2">75%</div>
              <p className="text-sm text-gray-500 mt-1">Average Usage</p>
            </div>
          </div>
        </div>

        {/* Service Manager */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-primary">
          <ServiceManager />
        </div>

        {/* Service Categories */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Core Services */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-green-200">
            <h2 className="text-2xl font-bold text-primary mb-6">Core Services</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🤖</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">AI Chat Service</h4>
                    <p className="text-sm text-gray-600">Active • 75% usage</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Analytics Dashboard</h4>
                    <p className="text-sm text-gray-600">Paused • 0% usage</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  Paused
                </span>
              </div>
            </div>
          </div>

          {/* Plugin Services */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-blue-200">
            <h2 className="text-2xl font-bold text-primary mb-6">Plugin Services</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🔍</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">SEO Optimizer</h4>
                    <p className="text-sm text-gray-600">Active • 45% usage</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Social Media Manager</h4>
                    <p className="text-sm text-gray-600">Cancelled • 0% usage</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  Cancelled
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-purple-200">
            <h2 className="text-2xl font-bold text-primary mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              <button className="w-full p-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">➕</div>
                  <div>
                    <div className="font-semibold">Add New Service</div>
                    <div className="text-sm opacity-90">Browse available services</div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📈</div>
                  <div>
                    <div className="font-semibold">View Analytics</div>
                    <div className="text-sm opacity-90">Service performance</div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <div className="font-semibold">Settings</div>
                    <div className="text-sm opacity-90">Configure preferences</div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="font-semibold">Support</div>
                    <div className="text-sm opacity-90">Get help</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Service Recommendations */}
        <div className="mt-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-4 border-orange-200">
            <h2 className="text-2xl font-bold text-primary mb-6">Recommended Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-gray-800 mb-2">Content Optimizer</h3>
                <p className="text-sm text-gray-600 mb-4">AI-powered content optimization for better SEO performance</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">₹25/month</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                    Try Free
                  </button>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-bold text-gray-800 mb-2">Email Marketing</h3>
                <p className="text-sm text-gray-600 mb-4">Automated email campaigns and subscriber management</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">₹35/month</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                    Try Free
                  </button>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="font-bold text-gray-800 mb-2">Design Studio</h3>
                <p className="text-sm text-gray-600 mb-4">AI-generated graphics and design templates</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">₹40/month</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                    Try Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 