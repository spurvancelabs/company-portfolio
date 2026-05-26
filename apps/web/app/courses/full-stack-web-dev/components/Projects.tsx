"use client";
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal-up mb-14"><span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">REAL HANDS-ON PROJECTS</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">You Will Build These</span></h2><p className="text-sm text-gray-500 mt-3">No tutorials — these are real production projects you will build yourself</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} whileHover={{ y: -6, borderColor: `${p.color}40` }} className="rounded-2xl p-6 border border-white/[0.06] transition-all duration-300" style={{ background: `${p.color}06` }}>
              <div className="flex items-center justify-between mb-4"><span className="text-3xl font-black tabular-nums" style={{ color: `${p.color}40` }}>{String(i + 1).padStart(2, '0')}</span><span className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}25` }}>{p.tag}</span></div>
              <h3 className="text-base font-bold text-white mb-1.5">{p.title}</h3><p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p><div className="mt-4 h-px" style={{ background: `linear-gradient(90deg, ${p.color}40, transparent)` }} />
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="rounded-2xl p-6 border border-white/[0.06] flex flex-col items-center justify-center text-center" style={{ background: 'rgba(255,255,255,0.02)' }}><Target className="w-8 h-8 text-cyan-400 mb-3" /><div className="text-4xl font-black text-white mb-1">40+</div><p className="text-xs text-gray-400">Hands-on coding exercises throughout the course</p></motion.div>
        </div>
      </div>
    </section>
  );
}