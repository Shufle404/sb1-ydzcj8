import { Shield, Cloud, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Your Photos,{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Secured Forever
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Store your memories in the cloud with military-grade encryption.
            Access them anywhere, anytime, on any device.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg font-medium">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all text-lg font-medium">
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <Shield className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-white text-lg font-medium mb-2">End-to-End Encryption</h3>
              <p className="text-gray-400">Your photos are encrypted before they leave your device</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <Cloud className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-white text-lg font-medium mb-2">Unlimited Storage</h3>
              <p className="text-gray-400">Never worry about running out of space again</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <Zap className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-white text-lg font-medium mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Access your photos instantly from anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}