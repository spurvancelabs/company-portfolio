import { 
  Sparkles,
} from 'lucide-react';
const BrandPromise = () => {
  return (
    <>
    
      {/* Brand Promise Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
            <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700">The Spurvance Promise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">What Matters</span>
          </h2>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
                <div className="text-6xl font-bold text-blue-600 mb-4">🇵🇰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Pakistan</h3>
                <p className="text-gray-600">
                  Every product is built with Pakistani users, regulations, and values at its core.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border-2 border-cyan-100 shadow-lg transform md:scale-105">
                <div className="text-6xl font-bold text-cyan-600 mb-4">🔓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">By Pakistan</h3>
                <p className="text-gray-600">
                  Developed entirely by Pakistani engineers, designers, and security experts.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border-2 border-indigo-100 shadow-lg">
                <div className="text-6xl font-bold text-indigo-600 mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
                <p className="text-gray-600">
                  Setting new standards for digital sovereignty that the world can learn from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandPromise