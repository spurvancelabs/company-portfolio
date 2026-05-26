"use client";
import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6 lg:px-12">
      <div className="reveal-up mb-14">
        <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">CLASS SCHEDULE</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Live on Google Meet</span></h2>
        <p className="text-sm text-gray-500 mt-3">Classes will be live on Google Meet — every session is recorded</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Month 1-2 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: 'rgba(34,211,238,0.03)' }}>
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#22d3ee15', border: '1px solid #22d3ee30' }}><Calendar className="w-4 h-4 text-cyan-400" /></div><div><p className="text-sm font-bold text-white">Month 1 & 2</p><p className="text-xs text-gray-500">Foundation & Core Development</p></div></div>
          <div className="grid grid-cols-7 gap-1.5 mb-5">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => {
              const off = d === 'Fri' || d === 'Sun';
              return <div key={d} className="flex flex-col items-center gap-1"><span className="text-[10px] text-gray-600 font-mono">{d}</span><div className={`w-full h-8 rounded-lg flex items-center justify-center text-xs font-bold ${off ? 'bg-white/[0.03] text-gray-700 border border-white/[0.04]' : 'text-cyan-400 border border-cyan-400/25'}`} style={off ? {} : { background: '#22d3ee12' }}>{off ? '—' : '✓'}</div></div>;
            })}
          </div>
          <div className="flex items-center justify-between text-xs"><div className="flex items-center gap-2 text-gray-400"><Clock className="w-3.5 h-3.5 text-cyan-400" /><span>9:00 PM – 11:00 PM PKT</span></div><span className="text-gray-600">Fri & Sun OFF</span></div>
        </motion.div>

        {/* Month 3 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: 'rgba(129,140,248,0.03)' }}>
          <div className="flex items-center gap-3 mb-5"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#818cf815', border: '1px solid #818cf830' }}><Calendar className="w-4 h-4 text-indigo-400" /></div><div><p className="text-sm font-bold text-white">Month 3</p><p className="text-xs text-gray-500">Advanced + AI Engineering (Post-Summer)</p></div></div>
          <div className="grid grid-cols-7 gap-1.5 mb-5">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => {
              const extended = d === 'Sun';
              return <div key={d} className="flex flex-col items-center gap-1"><span className="text-[10px] text-gray-600 font-mono">{d}</span><div className={`w-full h-8 rounded-lg flex items-center justify-center text-xs font-bold ${extended ? 'text-amber-400 border border-amber-400/25' : 'text-indigo-400 border border-indigo-400/25'}`} style={{ background: extended ? '#f59e0b12' : '#818cf812' }}>{extended ? '2h+' : '✓'}</div></div>;
            })}
          </div>
          <div className="flex items-center justify-between text-xs"><div className="flex items-center gap-2 text-gray-400"><Clock className="w-3.5 h-3.5 text-indigo-400" /><span>9:00 PM – 11:00 PM PKT</span></div><span className="text-amber-400/70">Sun: extended 2h+</span></div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-5 rounded-2xl p-5 border border-white/[0.06] flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#22d3ee10', border: '1px solid #22d3ee25' }}><Video className="w-5 h-5 text-cyan-400" /></div>
        <div><p className="text-sm font-semibold text-white">Google Meet · Urdu Medium</p><p className="text-xs text-gray-500 mt-0.5">All classes will be live on Google Meet. Every session will be recorded and shared within 24 hours.</p></div>
      </motion.div>
    </section>
  );
}