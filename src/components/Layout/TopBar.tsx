import { Sparkles } from "lucide-react"

const TopBar = () => {
  return (
          <div className="fixed top-0 left-0 right-0 z-60 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-1.5 animate-slide-down">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>🎉 New AI Platform Launched! <a href="/products/ai-platform" className="underline font-semibold ml-1">Explore Now →</a></span>
          </span>
        </div>
      </div>
  )
}

export default TopBar