import { 
  Code, 
  Heart, 
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
const FinalCta = () => {
  return (
    
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
            <Trophy className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700">
              Pakistan's Digital Independence Starts Here
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Pakistan's Future?
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Whether you write code, design interfaces, organize communities, or simply believe in Pakistan's digital potential—there's a place for you at Spurvance Labs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contribute"
              className="px-12 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              <Code className="w-6 h-6 mr-3" />
              Start Contributing Today
            </Link>

            <Link
              to="/donate"
              className="px-12 py-5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              <Heart className="w-6 h-6 mr-3" />
              Support Our Mission
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            No experience needed—just passion for Pakistan's digital future.
          </p>
        </div>
      </section>
  )
}

export default FinalCta