"use client";
import { motion } from 'framer-motion';
import { Rocket, ChevronRight, MessageCircle } from 'lucide-react';
import { handleWhatsAppContact, formatPrice } from '../utils';

export default function FinalCTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[700px] h-[400px] rounded-full blur-[130px] opacity-20 bg-gradient-to-r from-cyan-400 via-indigo-400 to-transparent" /></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 rounded-full mb-8"><Rocket className="w-3 h-3" />START YOUR JOURNEY TODAY</div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Become a</span><br /><span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Full Stack Dev.</span></h2>
          <p className="text-sm text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">Secure your seat today. Limited seats available — each batch fills up quickly.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-black transition-all hover:scale-105 bg-gradient-to-r from-cyan-400 to-indigo-400 shadow-[0_0_40px_#22d3ee33]">Enroll Now <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></button>
            <button onClick={handleWhatsAppContact} className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all">WhatsApp Us <MessageCircle className="w-4 h-4" /></button>
          </div>
          <p className="text-xs text-gray-600 mt-6 font-mono">{formatPrice(20000)} full · or 3 × {formatPrice(7000)} installments · Google Meet · Urdu Medium</p>
        </motion.div>
      </div>
    </section>
  );
}