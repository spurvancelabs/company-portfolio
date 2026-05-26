"use client";
import { motion } from 'framer-motion';
import { Award, Code2, ThumbsUp } from 'lucide-react';

export default function Instructor() {
  return (
    <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="reveal-up mb-14"><span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">YOUR INSTRUCTOR</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Learn From the Best</span></h2></div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="rounded-2xl border border-white/[0.06] overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-indigo-400 to-transparent" />
          <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative flex-shrink-0"><div className="absolute inset-0 rounded-3xl bg-cyan-400 blur-2xl opacity-20" /><img src="https://avatars.githubusercontent.com/u/148730692?v=4" alt="Muhammad Abdullah" className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl border border-white/10 shadow-xl" /></div>
            <div><h3 className="text-2xl font-black text-white mb-1">Muhammad Abdullah</h3><p className="text-xs text-cyan-400 font-mono tracking-wide mb-4">SENIOR FULL STACK DEVELOPER · 5+ YEARS</p><p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-lg">Abdullah is an experienced Full Stack Developer and AI Engineer specializing in React, Next.js, and scalable backend systems. He teaches practical skills through real-world projects.</p><div className="flex flex-wrap gap-3"><div className="flex items-center gap-2 text-xs text-gray-400 border border-white/[0.06] rounded-full px-3 py-1.5"><Award className="w-3.5 h-3.5 text-cyan-400" />AI Engineer</div><div className="flex items-center gap-2 text-xs text-gray-400 border border-white/[0.06] rounded-full px-3 py-1.5"><Code2 className="w-3.5 h-3.5 text-cyan-400" />Full Stack Dev</div><div className="flex items-center gap-2 text-xs text-gray-400 border border-white/[0.06] rounded-full px-3 py-1.5"><ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />5+ Years Experience</div></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}