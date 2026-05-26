"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Clock, Video, Languages, GraduationCap, ChevronRight, BookOpen,ChevronDown } from 'lucide-react';
import { formatPrice } from '../utils';

// (Optional particle field – commented as in original)
// function ParticleField() { ... }

export default function Hero({ heroRef, heroOpacity, heroScale }: any) {
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 55 }} gl={{ alpha: true, antialias: true }}>
          <Suspense fallback={null}>{/* <ParticleField /> */}</Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080c10 80%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10" style={{ background: 'linear-gradient(to top, #080c10, transparent)' }} />
      <div className="absolute inset-0 z-10 opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '180px' }} />

      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Left column */}
          <div>
            <div className="hero-sub mb-6 inline-flex items-center gap-2.5 text-xs font-mono tracking-widest border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              LIVE ON GOOGLE MEET · NEXT BATCH OPEN
            </div>

            <div className="overflow-hidden mb-1"><h1 className="hero-line text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.88] tracking-tighter">Full Stack Web Dev</h1></div>
            <div className="overflow-hidden mb-1"><h1 className="hero-line text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.88] tracking-tighter bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">+ AI Engineering</h1></div>
            <div className="overflow-hidden"><h1 className="hero-line text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.88] tracking-tighter text-white/20">Bootcamp</h1></div>

            <p className="hero-sub mt-8 text-sm text-gray-400 leading-relaxed max-w-lg">
              Urdu medium live bootcamp on Google Meet — React, Next.js, Node.js, AI Engineering, TypeScript, Docker, and much more. Build real projects, learn real skills.
            </p>

            <div className="hero-sub flex flex-wrap items-center gap-5 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /><span>3 Months</span></div>
              <div className="flex items-center gap-2"><Video className="w-4 h-4 text-cyan-400" /><span>Google Meet</span></div>
              <div className="flex items-center gap-2"><Languages className="w-4 h-4 text-cyan-400" /><span>Urdu Medium</span></div>
              <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-cyan-400" /><span>Certificate + Internship</span></div>
            </div>

            <div className="hero-sub flex flex-wrap gap-3 mt-8">
              <button onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black transition-all hover:scale-105 bg-gradient-to-r from-cyan-400 to-indigo-400 shadow-[0_0_30px_#22d3ee33]">Enroll Now <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></button>
              <button onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all">View Syllabus <BookOpen className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Right column – pricing card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}>
            <div className="h-px bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400" />
            <div className="p-6">
              <span className="text-xs text-gray-500 font-mono tracking-wide block mb-2">COURSE FEE</span>
              <div className="flex items-end gap-2 mb-1"><span className="text-4xl font-black text-white">{formatPrice(20000)}</span><span className="text-xs text-gray-500 pb-1.5">full payment</span></div>
              <div className="mt-2 mb-4 rounded-xl px-3 py-2 border border-cyan-400/15 bg-cyan-400/5 flex items-center justify-between">
                <div><p className="text-xs text-cyan-400 font-medium">Installment Plan Available</p><p className="text-xs text-gray-500 mt-0.5">3 monthly payments · no extra charges</p></div>
                <span className="text-sm font-bold text-white">3×{formatPrice(7000)}</span>
              </div>
              <div className="space-y-2.5 mb-5">
                {['Live Google Meet sessions', 'Lectures in Urdu', 'Real hands-on projects', '1 month free internship (top students)', 'Verifiable completion certificate', 'Lifetime session recordings', 'AI Engineering modules included'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300"><div className="w-3.5 h-3.5 rounded-full bg-cyan-400/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /></div>{f}</div>
                ))}
              </div>
              <button onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 rounded-xl text-sm font-semibold text-black transition-all hover:opacity-90 hover:scale-[1.02] bg-gradient-to-r from-cyan-400 to-indigo-400">Secure Your Seat →</button>
              <p className="text-center text-xs text-gray-600 mt-3">Limited seats per batch</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-gray-600"><span className="text-xs font-mono tracking-widest">SCROLL</span><ChevronDown className="w-4 h-4" /></motion.div>
    </section>
  );
}