'use client';

/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

import React, { useRef, useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import * as THREE from 'three';
import {
  ArrowRight, CheckCircle2, Clock, Users, Star, Code2, Server,
  Database, Layout, Cloud, Rocket, BookOpen, GraduationCap,
  Award, MessageCircle, ChevronRight, Play, Zap, Target,
  ThumbsUp, ChevronDown, Terminal, Layers, GitBranch, Lock,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Helpers ───────────────────────────────────────────────────────────── */

const WHATSAPP_NUMBER = '923294171505';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(price);

const handleWhatsAppEnrollment = () => {
  const message = `Hi Spurvance Labs Team,\n\nI'm interested in enrolling in the Full Stack Web Development course.\n\nPlease share:\n- Complete syllabus\n- Batch timings\n- Payment details\n- Next batch starting date\n\nLooking forward to joining!\n\nRegards.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
};

/* ── Three.js: Particle Sphere ─────────────────────────────────────────── */

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2800;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#22d3ee" size={0.022} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        {/* <ParticleField /> */}
        {/* <ambientLight intensity={0.5} /> */}
        {/* <pointLight position={[5, 5, 5]} intensity={1} color="#22d3ee" /> */}
      </Suspense>
    </Canvas>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────── */

const modules = [
  {
    id: 1, title: 'Frontend Fundamentals', icon: Layout,
    topics: ['HTML5 Semantics & Accessibility', 'CSS3 Flexbox, Grid & Animations', 'Responsive Design (Mobile-First)', 'Tailwind CSS & Styling Libraries', 'JavaScript ES6+ (Async/Await)', 'DOM Manipulation & Events'],
    duration: '2 weeks', color: '#22d3ee',
  },
  {
    id: 2, title: 'React & Modern Frontend', icon: Code2,
    topics: ['React Components & Hooks', 'State Management (Context, Redux)', 'React Router v6', 'Custom Hooks & Optimization', 'Next.js 14 App Router', 'Server & Client Components'],
    duration: '3 weeks', color: '#818cf8',
  },
  {
    id: 3, title: 'Backend Development', icon: Server,
    topics: ['Node.js & Express.js Fundamentals', 'RESTful API Design', 'Authentication (JWT, OAuth)', 'Authorization & RBAC', 'File Upload & Cloud Storage', 'Error Handling & Logging'],
    duration: '2.5 weeks', color: '#34d399',
  },
  {
    id: 4, title: 'Databases & Storage', icon: Database,
    topics: ['MongoDB (NoSQL)', 'PostgreSQL (SQL)', 'Prisma ORM & Mongoose ODM', 'Data Modeling & Relationships', 'DB Optimization & Indexing', 'Migration & Seeding'],
    duration: '1.5 weeks', color: '#fb923c',
  },
  {
    id: 5, title: 'DevOps & Deployment', icon: Cloud,
    topics: ['Git & GitHub Workflow', 'CI/CD (GitHub Actions)', 'Docker Basics', 'Vercel / Netlify Deployment', 'AWS Basics (EC2, S3)', 'Environment Variables & Secrets'],
    duration: '1.5 weeks', color: '#f472b6',
  },
  {
    id: 6, title: 'Final Capstone Project', icon: Rocket,
    topics: ['Full Stack E-Commerce App', 'Real-time Dashboard', 'Payment Integration (Stripe)', 'Admin Panel', 'Performance Optimization', 'Production Deployment'],
    duration: '2 weeks', color: '#a78bfa',
  },
];

const benefits = [
  { icon: Users, title: 'Live Interactive Classes', desc: 'Real-time instruction with industry experts, Q&A sessions, and peer collaboration.', color: '#22d3ee' },
  { icon: Award, title: 'Industry Certificate', desc: 'Get recognized with a completion certificate valued by top tech companies.', color: '#818cf8' },
  { icon: Terminal, title: '1-on-1 Mentorship', desc: 'Personal guidance from experienced developers throughout your entire journey.', color: '#34d399' },
  { icon: GraduationCap, title: 'Career Support', desc: 'Resume reviews, interview prep, and job placement assistance included.', color: '#fb923c' },
  { icon: MessageCircle, title: '24/7 Discord Community', desc: 'Connect with peers, get help anytime, and build your professional network.', color: '#f472b6' },
  { icon: Zap, title: 'Lifetime Access', desc: 'Access all recorded sessions, materials, and future updates forever.', color: '#a78bfa' },
];

const tools = [
  { name: 'React', color: '#61dafb' }, { name: 'Next.js', color: '#fff' },
  { name: 'Node.js', color: '#6cc24a' }, { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind', color: '#38bdf8' }, { name: 'MongoDB', color: '#47a248' },
  { name: 'PostgreSQL', color: '#336791' }, { name: 'Git', color: '#f05032' },
  { name: 'Docker', color: '#2496ed' }, { name: 'Vercel', color: '#fff' },
];

const projects = [
  { title: 'Portfolio + Blog CMS', desc: 'Personal site with dynamic content management', tag: 'Module 1-2', color: '#22d3ee' },
  { title: 'E-Commerce Platform', desc: 'Full shop with cart, checkout & Stripe payments', tag: 'Module 3-4', color: '#818cf8' },
  { title: 'Real-time Chat App', desc: 'WebSocket-powered messaging with rooms', tag: 'Module 3-5', color: '#34d399' },
  { title: 'Task Management Dashboard', desc: 'Kanban board with team collaboration features', tag: 'Module 2-4', color: '#fb923c' },
  { title: 'Full Stack SaaS App', desc: 'Capstone: subscription-based app with admin panel', tag: 'Module 6', color: '#a78bfa' },
];

const faqs = [
  { q: 'Do I need prior coding experience?', a: 'No! This course is designed for beginners. We start from basics and build up to advanced concepts step by step.' },
  { q: 'What if I miss a live class?', a: 'All sessions are recorded and uploaded within 24 hours. You can watch anytime at your own pace.' },
  { q: 'How long will I have access?', a: 'You get lifetime access to all course materials, recordings, and future updates at no extra cost.' },
  { q: 'Is there a certificate?', a: 'Yes — a verifiable completion certificate is awarded after finishing and presenting the capstone project.' },
  { q: 'What are the batch timings?', a: 'Weekdays (Mon-Wed-Fri, 7–9 PM PKT) and Weekends (Sat-Sun, 2–6 PM PKT). You choose your batch.' },
];

/* ── Sub-components ────────────────────────────────────────────────────── */

function ModuleRow({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = mod.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 py-5 text-left group"
      >
        {/* Number */}
        <span className="text-3xl font-black tabular-nums w-10 flex-shrink-0 transition-colors"
          style={{ color: open ? mod.color : 'rgba(255,255,255,0.15)', fontVariantNumeric: 'tabular-nums' }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Icon */}
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
          style={{ background: open ? `${mod.color}20` : 'rgba(255,255,255,0.05)', border: `1px solid ${open ? mod.color + '40' : 'rgba(255,255,255,0.06)'}` }}>
          <Icon className="w-4 h-4 transition-colors" style={{ color: open ? mod.color : '#64748b' }} />
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <span className="text-base font-semibold text-white group-hover:text-white transition-colors block truncate">
            {mod.title}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
            <Clock className="w-3 h-3" />
            {mod.duration}
          </span>
        </div>

        {/* Badge + chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="hidden sm:inline text-xs px-2.5 py-1 rounded-full border"
            style={{ color: mod.color, borderColor: `${mod.color}30`, background: `${mod.color}10` }}>
            {mod.topics.length} topics
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-16 grid sm:grid-cols-2 gap-2">
              {mod.topics.map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: mod.color }} />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left gap-4">
        <span className="text-sm font-medium text-white">{faq.q}</span>
        <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Page ─────────────────────────────────────────────────────────── */

export default function FullStackWebDevelopmentPage() {
  const wrapperRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.3, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); };
  }, []);

  // GSAP: hero text stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-line',
        { opacity: 0, y: 80, skewY: 5 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.2 }
      );
      gsap.fromTo('.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  // GSAP: infinite marquee
  useEffect(() => {
    if (!marqueeRef.current) return;
    const inner = marqueeRef.current.querySelector('.marquee-inner');
    if (!inner) return;
    gsap.to(inner, { x: '-50%', duration: 22, ease: 'none', repeat: -1 });
  }, []);

  // GSAP: section reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={wrapperRef}
      style={{
        background: '#080c10',
        color: '#f1f5f9',
        fontFamily: '"Syne", "DM Sans", system-ui, sans-serif',
      }}
      className="overflow-x-hidden"
    >

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 7], fov: 55 }} gl={{ alpha: true, antialias: true }}>
            <Suspense fallback={null}>
              {/* <ParticleField /> */}
            </Suspense>
          </Canvas>
        </div>

        {/* Gradient vignette */}
        <div className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080c10 80%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10"
          style={{ background: 'linear-gradient(to top, #080c10, transparent)' }} />

        {/* Noise */}
        <div className="absolute inset-0 z-10 opacity-[0.025]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '180px' }} />

        <motion.div
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full"
        >
          <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">

            {/* Left: headline */}
            <div>
              <div className="hero-sub mb-6 inline-flex items-center gap-2.5 text-xs font-mono tracking-widest border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                LIVE ONLINE · NEXT BATCH OPEN
              </div>

              <div className="overflow-hidden mb-1">
                <h1 className="hero-line text-[clamp(3rem,8vw,6rem)] font-black leading-[0.88] tracking-tighter">
                  Full Stack
                </h1>
              </div>
              <div className="overflow-hidden mb-1">
                <h1 className="hero-line text-[clamp(3rem,8vw,6rem)] font-black leading-[0.88] tracking-tighter"
                  style={{
                    background: 'linear-gradient(90deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                  Web Dev
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-line text-[clamp(3rem,8vw,6rem)] font-black leading-[0.88] tracking-tighter text-white/20">
                  Bootcamp
                </h1>
              </div>

              <p className="hero-sub mt-8 text-sm text-gray-400 leading-relaxed max-w-lg">
                Master React, Next.js, Node.js, and databases in 12 weeks of live, hands-on training.
                Build real products. Get hired.
              </p>

              <div className="hero-sub flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-500">
                {[
                  [Clock, '12 Weeks'], [Users, '120+ Alumni'], [Star, '4.8 Rating'], [GraduationCap, 'Certificate']
                ].map(([Icon, label], i) => (
                  <div key={i} className="flex items-center gap-2">
                    {/* @ts-ignore */}
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{label as string}</span>
                  </div>
                ))}
              </div>

              <div className="hero-sub flex flex-wrap gap-3 mt-8">
                <button
                  onClick={handleWhatsAppEnrollment}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)', boxShadow: '0 0 30px #22d3ee33' }}
                >
                  Enroll via WhatsApp
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
                >
                  View Syllabus
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Pricing card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
            >
              <div className="h-px" style={{ background: 'linear-gradient(90deg, #22d3ee, #818cf8, #a78bfa)' }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 font-mono tracking-wide">COURSE FEE</span>
                  <span className="text-xs text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-400/10">-60% OFF</span>
                </div>
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-4xl font-black text-white">{formatPrice(10000)}</span>
                </div>
                <span className="text-xs text-gray-500 line-through">{formatPrice(25000)} original</span>

                <div className="my-5 space-y-2.5">
                  {['12 weeks of live instruction', 'Lifetime recordings access', '1-on-1 mentorship sessions', 'Verified completion certificate', '24/7 Discord community', 'Interview prep & job support'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleWhatsAppEnrollment}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-black transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}
                >
                  Secure Your Seat →
                </button>
                <p className="text-center text-xs text-gray-600 mt-3">Limited seats per batch</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-gray-600"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── MARQUEE TECH STACK ────────────────────────────────────────── */}
      <div
        ref={marqueeRef}
        className="py-5 border-y border-white/[0.06] overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="marquee-inner flex gap-8 w-max">
          {[...tools, ...tools].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-500 whitespace-nowrap px-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
              {t.name}
            </div>
          ))}
        </div>
      </div>

      {/* ── SYLLABUS ──────────────────────────────────────────────────── */}
      <section id="syllabus" className="py-24 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="reveal-up flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">CURRICULUM</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
              <span style={{
                background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>12-Week Learning Path</span>
            </h2>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            6 modules · 13 weeks total
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.06] overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="px-6">
            {modules.map((m, i) => <ModuleRow key={m.id} mod={m} index={i} />)}
          </div>
        </div>

        {/* Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-2xl p-6 border flex items-start gap-4"
          style={{ background: 'rgba(34,211,238,0.04)', borderColor: '#22d3ee22' }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: '#22d3ee15', border: '1px solid #22d3ee30' }}>
            <Zap className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">Bonus: Interview Prep & Career Guidance</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Mock interviews, resume reviews, LinkedIn optimization, and job placement assistance to help you land your dream role.</p>
          </div>
        </motion.div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal-up mb-14">
            <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">BUILD REAL THINGS</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
              <span style={{
                background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>5 Portfolio Projects</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, borderColor: `${p.color}40` }}
                className="rounded-2xl p-6 border border-white/[0.06] transition-all duration-300 cursor-default"
                style={{ background: `${p.color}06` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black tabular-nums" style={{ color: `${p.color}40` }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-mono"
                    style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}25` }}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                <div className="mt-4 h-px" style={{ background: `linear-gradient(90deg, ${p.color}40, transparent)` }} />
              </motion.div>
            ))}

            {/* 40+ exercises card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border border-white/[0.06] flex flex-col items-center justify-center text-center"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <Target className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-4xl font-black text-white mb-1">40+</div>
              <p className="text-xs text-gray-400">Hands-on coding exercises throughout the course</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal-up text-center mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span style={{
              background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Everything You Need</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: `${b.color}44`, y: -4 }}
              className="rounded-2xl p-6 border border-white/[0.06] transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${b.color}15`, border: `1px solid ${b.color}25` }}>
                <b.icon className="w-5 h-5" style={{ color: b.color }} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{b.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INSTRUCTOR ────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="reveal-up mb-14">
            <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">YOUR INSTRUCTOR</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
              <span style={{
                background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Learn From the Best</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, #818cf8, transparent)' }} />
            <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-28 h-28 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl font-black text-black"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}>
                AR
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-1">Ahmad Raza</h3>
                <p className="text-xs text-cyan-400 font-mono tracking-wide mb-4">SENIOR FULL STACK DEVELOPER · 8+ YEARS</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-lg">
                  Ahmad has worked with leading tech companies and has helped over 500+ students transition into tech careers. He specializes in React, Next.js, and scalable backend systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[[Award, 'Ex-Microsoft'], [Users, '500+ Mentored'], [ThumbsUp, '4.9 Rating']].map(([Icon, label], i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400 border border-white/[0.06] rounded-full px-3 py-1.5">
                      {/* @ts-ignore */}
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      {label as string}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-3xl mx-auto px-6 lg:px-12">
        <div className="reveal-up text-center mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span style={{
              background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Got Questions?</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-white/[0.06] px-6"
          style={{ background: 'rgba(255,255,255,0.02)' }}>
          {faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} />)}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] rounded-full blur-[130px] opacity-20"
            style={{ background: 'radial-gradient(circle, #22d3ee, #818cf8, transparent)' }} />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 rounded-full mb-8">
              <Rocket className="w-3 h-3" />
              START YOUR JOURNEY TODAY
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span style={{
                background: 'linear-gradient(90deg, #fff 40%, #64748b 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Become a</span>
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #22d3ee, #818cf8, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Full Stack Dev.</span>
            </h2>

            <p className="text-sm text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Join 120+ students who transformed their careers. Limited seats per batch — secure yours today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleWhatsAppEnrollment}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)', boxShadow: '0 0 40px #22d3ee33' }}
              >
                Enroll via WhatsApp
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-gray-600 mt-6 font-mono">
              {formatPrice(10000)} · was {formatPrice(25000)} · 60% off limited time
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}