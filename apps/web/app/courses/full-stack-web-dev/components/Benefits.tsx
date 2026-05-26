"use client";
import { motion } from 'framer-motion';
import { benefits } from '../data';

export default function Benefits() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="reveal-up text-center mb-14"><span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">WHAT'S INCLUDED</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Everything You Get</span></h2></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} whileHover={{ borderColor: `${b.color}44`, y: -4 }} className="rounded-2xl p-6 border border-white/[0.06] transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${b.color}15`, border: `1px solid ${b.color}25` }}><b.icon className="w-5 h-5" style={{ color: b.color }} /></div>
            <h3 className="text-sm font-bold text-white mb-2">{b.title}</h3><p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}