'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 px-4 bg-gray-950 relative overflow-hidden">
      <div className="cta-content max-w-3xl mx-auto text-center relative z-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-6 block">
          Start Building
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.05]">
          Ready to Build
          <span className="block text-white/30">
            Something Great?
          </span>
        </h2>

        <p className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
          Whether you need a full engineering team or technical solution.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-xl"
          >
            Schedule a Call
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}