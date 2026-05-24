'use client';

import { Suspense, useRef } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';

import Scene from './Scene';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-gray-950/80 z-[1] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.02] z-[2] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="relative z-10 h-[100dvh] flex flex-col justify-center items-center text-center px-4"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div style={{ y: textY }} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400 mb-8">
              <span className="w-8 h-px bg-indigo-400/50" />
              Building Digital Pakistan
              <span className="w-8 h-px bg-indigo-400/50" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-8"
          >
            <span className="block">Engineering</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              The Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Open-source infrastructure, enterprise solutions, and world-class engineering
            talent — all built in Pakistan, for the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              Explore Our Work
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 transition-all duration-300"
            >
              <Play size={14} fill="currentColor" />
              Watch Demo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}