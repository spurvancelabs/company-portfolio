import {
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
          <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Pakistan's Largest Open-Source Community
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pakistan's Digital Revolution</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Connect with thousands of Pakistani developers, security experts, and digital sovereignty advocates building the future of Pakistan's technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/spurvancelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6 mr-3" />
                Join Discord Community
              </a>
              <Link
                to="#platforms"
                className="px-10 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 mr-3" />
                Explore All Platforms
              </Link>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,000+</div>
              <div className="text-sm text-gray-600">Community Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">University Chapters</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Monthly Events</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">🇵🇰</div>
              <div className="text-sm text-gray-600">Pakistan-First</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero