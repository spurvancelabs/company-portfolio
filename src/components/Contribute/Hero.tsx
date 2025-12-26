import { 
  GitBranch,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
          <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Rocket className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Build Pakistan's Digital Future
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Contribute to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pakistan's Digital Sovereignty</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Join hundreds of Pakistani developers, designers, and security experts building open-source infrastructure that keeps Pakistan's digital future in Pakistani hands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/spurvancelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
              >
                <GitBranch className="w-6 h-6 mr-3" />
                View GitHub Repositories
              </a>
              <Link
                to="/community"
                className="px-10 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 mr-3" />
                Start Contributing
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Active Contributors</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">PRs Merged</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-gray-600">Open Projects</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Open Source</div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Hero