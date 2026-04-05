import { Sparkles } from "lucide-react";
import Link from 'next/link';

const TopBar = () => {
  return (
 <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2.5 animate-slide-down">        <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Pakistan's First Open Source Chat App "NAT" Launched! <Link href="/products/nat" className="underline font-semibold ml-1">Explore Now →</Link></span>
          </span>
        </div>
      </div>
  )
}

export default TopBar;