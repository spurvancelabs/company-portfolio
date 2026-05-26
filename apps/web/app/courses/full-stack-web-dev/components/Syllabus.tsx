"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, ChevronRight } from 'lucide-react';
import { modules } from '../data';

function ModuleRow({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = mod.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.04 }} viewport={{ once: true }} className="border-b border-white/[0.06] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-5 py-5 text-left group">
        <span className="text-3xl font-black tabular-nums w-10 flex-shrink-0 transition-colors" style={{ color: open ? mod.color : 'rgba(255,255,255,0.15)' }}>{String(index + 1).padStart(2, '0')}</span>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all" style={{ background: open ? `${mod.color}20` : 'rgba(255,255,255,0.05)', border: `1px solid ${open ? mod.color + '40' : 'rgba(255,255,255,0.06)'}` }}><Icon className="w-4 h-4 transition-colors" style={{ color: open ? mod.color : '#64748b' }} /></div>
        <div className="flex-1 min-w-0"><span className="text-base font-semibold text-white block truncate">{mod.title}</span><span className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5"><Clock className="w-3 h-3" />{mod.duration}</span></div>
        <div className="flex items-center gap-3 flex-shrink-0"><span className="hidden sm:inline text-xs px-2.5 py-1 rounded-full border" style={{ color: mod.color, borderColor: `${mod.color}30`, background: `${mod.color}10` }}>{mod.topics.length} topics</span><ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} /></div>
      </button>
      <AnimatePresence>
        {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><div className="pb-5 pl-16 grid sm:grid-cols-2 gap-2">{mod.topics.map((t, i) => <div key={i} className="flex items-start gap-2 text-sm text-gray-400"><ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: mod.color }} />{t}</div>)}</div></motion.div>}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Syllabus() {
  return (
    <section id="syllabus" className="py-24 max-w-5xl mx-auto px-6 lg:px-12">
      <div className="reveal-up flex items-end justify-between mb-14 flex-wrap gap-4">
        <div><span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">CURRICULUM</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">3-Month Learning Path</span></h2></div>
        <div className="text-xs text-gray-500 font-mono">23 modules · 3 months total</div>
      </div>
      <div className="rounded-2xl border border-white/[0.06] overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}><div className="px-6">{modules.map((m, i) => <ModuleRow key={m.id} mod={m} index={i} />)}</div></div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 rounded-2xl p-6 border flex items-start gap-4" style={{ background: 'rgba(34,211,238,0.04)', borderColor: '#22d3ee22' }}><div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#22d3ee15', border: '1px solid #22d3ee30' }}><Zap className="w-5 h-5 text-cyan-400" /></div><div><h3 className="text-sm font-semibold text-white mb-1">Bonus: Interview Prep & Career Guidance</h3><p className="text-xs text-gray-400 leading-relaxed">Mock interviews, resume reviews, LinkedIn optimization, and job placement assistance to help you land your dream role.</p></div></motion.div>
    </section>
  );
}
// Add missing Zap import
import { Zap } from 'lucide-react';