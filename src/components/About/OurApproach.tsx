import { 
  Lock, 
  Target,
  BookOpen
} from "lucide-react";

const OurApproach = () => {
  return (
          <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Spurvance Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with ethical principles to build technology that serves people first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security as Foundation</h3>
              <p className="text-gray-600 mb-6">
                We build with military-grade encryption, zero-trust architecture, and regular third-party security audits. Security isn't a feature—it's the foundation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  End-to-end encryption by default
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  No backdoors, no exceptions
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  Annual penetration testing
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Open by Principle</h3>
              <p className="text-gray-600 mb-6">
                Every line of code is open source. We believe transparency builds trust and enables collective innovation. Pakistan's digital future should be built in public.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                  GNU GPL v3 for core products
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                  Public roadmap and development
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                  Community-driven governance
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pakistan First</h3>
              <p className="text-gray-600 mb-6">
                Designed for Pakistani users, compliant with local regulations, and built to keep data and economic value within Pakistan's borders.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                  Urdu & regional language support
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                  PTA compliance by design
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                  Servers in Pakistan where possible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurApproach