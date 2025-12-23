import { 
  Building2,
  Scale,
  Eye,
} from "lucide-react";

const ProblemSolution = () => {
  return (
         <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
                <span className="text-sm font-semibold text-red-700">The Challenge</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pakistan's <span className="text-red-600">Digital Dependency</span> Problem
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Over 95% of Pakistan's digital infrastructure—from messaging apps to operating systems—is controlled by foreign corporations. This creates:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span><strong>Security risks:</strong> Backdoors, data breaches, and surveillance vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span><strong>Economic drain:</strong> Billions in revenue flowing out of Pakistan annually</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span><strong>Innovation stagnation:</strong> Pakistani developers building for others' platforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <span><strong>Cultural erosion:</strong> Digital experiences not designed for Pakistani values</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
                <span className="text-sm font-semibold text-green-700">Our Solution</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sovereign Digital <span className="text-green-600">Infrastructure</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
                  <Building2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Dual-Entity Model</h4>
                    <p className="text-gray-600 text-sm">
                      Non-profit foundation for open-source development + Public Benefit Corporation for sustainability
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                  <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Legal Sovereignty</h4>
                    <p className="text-gray-600 text-sm">
                      Registered in Pakistan, compliant with PTA regulations, and built for Pakistani data protection laws
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
                  <Eye className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Radical Transparency</h4>
                    <p className="text-gray-600 text-sm">
                      All code open for inspection, regular security audits published publicly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProblemSolution