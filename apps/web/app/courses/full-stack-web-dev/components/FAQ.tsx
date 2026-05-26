"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data';

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.07 }} viewport={{ once: true }} className="border-b border-white/[0.06] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left gap-4"><span className="text-sm font-medium text-white">{faq.q}</span><ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} /></button>
      <AnimatePresence>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden"><p className="pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p></motion.div>}</AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6 lg:px-12">
      <div className="reveal-up text-center mb-14"><span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">FAQ</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Frequently Asked Questions</span></h2></div>
      <div className="rounded-2xl border border-white/[0.06] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>{faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} />)}</div>
    </section>
  );
}