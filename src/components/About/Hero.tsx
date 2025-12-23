
import Logo from "../../components/Logo";
import { 
  Sparkles,
} from "lucide-react";
const Hero = () => {
  return (
      <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Digital Sovereignty Through Technology
              </span>
            </div>

            <div className="flex justify-center mb-8">
              <Logo size="lg" showTagline={true} link={false} />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Building Pakistan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Independence</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're creating the open-source infrastructure that empowers Pakistan to control its digital future—secure, sovereign, and built by Pakistanis.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Open Source</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
              <div className="text-sm text-gray-600">Backdoors</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">End-to-End</div>
              <div className="text-sm text-gray-600">Encrypted</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">Pakistan</div>
              <div className="text-sm text-gray-600">Built & Controlled</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero