'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';

import { gsap } from '@/lib/gsap';

import FeatureCard from './FeatureCard';
import { features } from './features.data';

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll('.feature-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 block">
            What We Do
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Engineering Excellence,
            <span className="block text-white/30">
              At Every Layer
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}