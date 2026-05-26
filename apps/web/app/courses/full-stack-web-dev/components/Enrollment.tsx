"use client";
import { motion } from 'framer-motion';
import { MessageCircle, Smartphone } from 'lucide-react';
// import EnrollmentForm from './EnrollmentForm';
import { handleWhatsAppContact, formatPrice } from '../utils';

export default function Enrollment() {
    return (
        <section id="enroll" className="py-24 max-w-6xl mx-auto px-6 lg:px-12">
            <div className="reveal-up mb-14"><span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">ENROLL NOW</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter"><span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Secure Your Seat</span></h2><p className="text-sm text-gray-500 mt-3">Fill out the form or contact us on WhatsApp — whichever you prefer</p></div>
            <div className="grid lg:grid-cols-[1fr_320px] gap-8">
                <div className="rounded-2xl border border-white/[0.06] p-6 lg:p-8" style={{ background: 'rgba(255,255,255,0.02)' }}><div className="h-px mb-8 bg-gradient-to-r from-cyan-400 to-indigo-400 to-transparent" /><h3 className="text-base font-bold text-white mb-6">Enrollment Application Form</h3>
                {/* <EnrollmentForm /> */}
                </div>
                <div className="space-y-4">
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="rounded-2xl border p-6" style={{ background: 'rgba(37,211,102,0.04)', borderColor: '#25d16622' }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#25d16615', border: '1px solid #25d16625' }}><MessageCircle className="w-5 h-5 text-[#25d166]" /></div><h3 className="text-sm font-bold text-white mb-1">Prefer WhatsApp?</h3><p className="text-xs text-gray-400 leading-relaxed mb-4">Message us directly on WhatsApp instead of the form — our team will reply quickly.</p><button onClick={handleWhatsAppContact} className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #25d166, #128c4e)', color: '#fff' }}>Chat on WhatsApp →</button></motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="rounded-2xl border border-white/[0.06] p-5" style={{ background: 'rgba(255,255,255,0.02)' }}><div className="flex items-center gap-2 mb-4"><Smartphone className="w-4 h-4 text-cyan-400" /><span className="text-xs font-mono tracking-wide text-cyan-400">JAZZCASH DETAILS</span></div><div className="space-y-3 text-xs"><div><p className="text-gray-600 mb-0.5">Account Title</p><p className="text-white font-semibold">Muhammad Adnan Khaver</p></div><div><p className="text-gray-600 mb-0.5">JazzCash Number</p><p className="text-white font-semibold">0333-4899190</p></div><div className="h-px bg-white/[0.06]" /><div><p className="text-gray-600 mb-0.5">Full Payment</p><p className="text-white font-bold text-base">{formatPrice(20000)}</p></div><div><p className="text-gray-600 mb-0.5">First Installment</p><p className="text-cyan-400 font-bold text-base">{formatPrice(7000)}</p><p className="text-gray-600 mt-0.5">then 2 more monthly payments</p></div></div></motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="rounded-2xl border border-white/[0.06] p-5" style={{ background: 'rgba(255,255,255,0.02)' }}><p className="text-xs font-semibold text-white mb-3">What happens next?</p>{['Submit the form or contact us on WhatsApp', 'Make payment via JazzCash', 'Attach the screenshot in the form', 'You will receive confirmation within 24 hours', 'Google Meet link will be sent before the batch starts'].map((s, i) => <div key={i} className="flex items-start gap-2.5 mb-2 last:mb-0"><span className="flex-shrink-0 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-black mt-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400">{i + 1}</span><p className="text-xs text-gray-400">{s}</p></div>)}</motion.div>
                </div>
            </div>
        </section>
    );
}