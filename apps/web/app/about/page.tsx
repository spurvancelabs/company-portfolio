'use client';

/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

import Link from 'next/link';
import { useRef, useEffect, useState, Suspense } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import * as THREE from 'three';
import {
  Shield, Code, Heart, Globe, Lock, ShieldCheck, ArrowRight,
  Sparkles, Cpu, Users, Eye, Zap, Target, Award, Star,
  Mail, MapPin, Quote, ChevronDown
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
gsap.registerPlugin(ScrollTrigger);

// ─── Three.js Components ────────────────────────────────────────────────────

function FloatingOrb({ position, color, speed = 1, distort = 0.4 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
    meshRef.current.rotation.y += 0.003 * speed;
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function HeroScene() {
  return (
    <>
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
      <FloatingOrb position={[2.5, 0.5, -2]} color="#1d4ed8" speed={0.8} distort={0.5} />
      <FloatingOrb position={[-2.8, -0.5, -3]} color="#4f46e5" speed={1.2} distort={0.3} />
      <FloatingOrb position={[0, 1.5, -4]} color="#0ea5e9" speed={0.6} distort={0.6} />
    </>
  );
}

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) { setDisplay(target); return; }
    let start = 0;
    const step = num / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setDisplay(target); clearInterval(timer); return; }
      setDisplay(Math.floor(start).toString() + suffix);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, suffix]);

  return <span ref={ref}>{display}</span>;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  { icon: Lock, title: 'Privacy First', description: 'End-to-end encryption with zero surveillance. Complete data sovereignty for every user on every platform.', stat: '100% Encrypted', accent: '#3b82f6' },
  { icon: ShieldCheck, title: 'Open Source', description: 'Transparent code, community audited. No hidden backdoors, no proprietary lock-in — ever.', stat: '100% Open', accent: '#10b981' },
  { icon: Globe, title: 'For the Ummah', description: 'Digital freedom for Muslims and ordinary people worldwide, without compromise or surveillance.', stat: 'Global Reach', accent: '#8b5cf6' },
  { icon: Heart, title: 'Made in Pakistan', description: 'Built locally. Solving local problems. Serving the global community with pride and purpose.', stat: 'Local First', accent: '#f59e0b' },
];

const stats = [
  { number: '5000', suffix: '+', label: 'Active Users', icon: Users },
  { number: '100', suffix: '%', label: 'Privacy Focused', icon: Shield },
  { number: '24', suffix: '/7', label: 'Support', icon: Zap },
  { number: '50', suffix: '+', label: 'Enterprise Clients', icon: Target },
];

const team = [
  {
    name: 'Muhammad Abdullah Khaver',
    role: 'Founder & CEO',
    bio: 'Visionary leader driving privacy-first innovation. Previously founded IT-Khaver, now leading Spurvance Labs towards digital sovereignty.',
    image: '/ceo.jpeg',
    email: 'abdullah@spurvancelabs.com',
    linkedin: 'https://linkedin.com/in/abdullahkhaver',
    location: 'Lahore, Pakistan',
    expertise: ['Security', 'Infrastructure', 'Product Strategy', 'Open Source'],
    accent: '#3b82f6'
  },

  {
    name: 'Muhammad Hamza',
    role: 'COO',
    bio: 'Operations expert ensuring seamless delivery of products and services. Focuses on scaling teams and maintaining operational excellence.',
    image: '/coo.jpeg',
    email: 'hamza@spurvancelabs.com',
    // linkedin: 'https://linkedin.com/in/muhammad-hamza',
    location: 'Lahore, Pakistan',
    expertise: ['Operations', 'Scale', 'Strategy', 'Team Building'],
    accent: '#10b981'
  },

  {
    name: 'Nozaib Amjad',
    role: 'Outreach & Founding Partner',
    bio: 'Strategic partnerships and community engagement. Builds bridges between technology and communities we serve.',
    image: '/outreach.jpeg',
    email: 'nozaib@spurvancelabs.com',
    // linkedin: 'https://linkedin.com/in/nozaib-amjad',
    location: 'Islamabad, Pakistan',
    expertise: ['Partnerships', 'Community', 'Business Dev', 'Advocacy'],
    accent: '#8b5cf6'
  },

  {
    name: 'Muhammad Muaaz',
    role: 'CMO',
    bio: 'Marketing strategist focused on communicating our privacy-first mission to the world. Drives brand growth and user acquisition.',
    image: '/cmo.jpeg',
    email: 'muaaz@spurvancelabs.com',
    // linkedin: 'https://linkedin.com/in/muhammad-muaaz',
    location: 'Dubai, UAE',
    expertise: ['Marketing', 'Brand', 'Growth', 'Digital Strategy'],
    accent: '#f59e0b'
  },
];

const timeline = [
  { year: '2020', label: 'ORIGIN', title: 'IT-Khaver Founded', desc: 'Service-based company helping businesses navigate technology with precision and care.', color: '#64748b' },
  { year: '2025', label: 'EVOLUTION', title: 'Spurvance Labs Born', desc: 'Hybrid model — Services + Products for Digital Pakistan and the broader Muslim world.', color: '#3b82f6' },
  { year: 'NOW', label: 'PRESENT', title: 'Products for Freedom', desc: 'Building encrypted tools that protect privacy and ensure digital sovereignty for all.', color: '#8b5cf6' },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ValueCard({ v, index }: { v: typeof values[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-7 cursor-pointer"
      style={{
        boxShadow: hovered ? `0 0 40px ${v.accent}22, inset 0 0 40px ${v.accent}08` : 'none',
        borderColor: hovered ? `${v.accent}44` : undefined,
        transition: 'box-shadow 0.4s, border-color 0.4s',
      }}
    >
      {/* Glow blob */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        style={{ background: v.accent }}
      />

      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${v.accent}18`, border: `1px solid ${v.accent}30` }}
      >
        <v.icon className="w-6 h-6" style={{ color: v.accent }} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{v.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-5">{v.description}</p>

      <div
        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: `${v.accent}15`, color: v.accent }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: v.accent }} />
        {v.stat}
      </div>
    </motion.div>
  );
}

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
      style={{
        boxShadow: hovered ? `0 20px 60px ${member.accent}20` : 'none',
        transition: 'box-shadow 0.4s',
      }}
    >
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)` }} />

      {/* Image */}
      <div className="relative px-6 pt-8 pb-4">
        <div className="relative w-24 h-24 mx-auto">
          <motion.div
            animate={{ opacity: hovered ? 0.6 : 0, scale: hovered ? 1.2 : 1 }}
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: member.accent }}
          />
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2"
            style={{ borderColor: `${member.accent}44` }}>
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-7 text-center">
        <h3 className="text-base font-semibold text-white mb-0.5">{member.name}</h3>
        <p className="text-xs font-medium mb-2" style={{ color: member.accent }}>{member.role}</p>

        <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-3">
          <MapPin className="w-3 h-3" />
          {member.location}
        </div>

        <p className="text-xs text-gray-400 leading-relaxed mb-4">{member.bio}</p>

        <div className="flex flex-wrap justify-center gap-1.5 mb-5">
          {member.expertise.map((s) => (
            <span key={s} className="px-2 py-0.5 text-xs rounded-full text-gray-400 bg-white/[0.05] border border-white/[0.06]">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/[0.06]">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{ background: `${member.accent}18` }}>
            <FaLinkedin className="w-3.5 h-3.5" style={{ color: member.accent }} />
          </a>
          <a href={`mailto:${member.email}`}
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{ background: `${member.accent}18` }}>
            <Mail className="w-3.5 h-3.5" style={{ color: member.accent }} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

const AboutPage = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

  // Lenis smooth scroll
  // useEffect(() => {
  //   const lenis = new Lenis({ duration: 1.4, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  //   const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
  //   requestAnimationFrame(raf);

  //   // GSAP ScrollTrigger integration
  //   lenis.on('scroll', ScrollTrigger.update);
  //   gsap.ticker.add((time) => lenis.raf(time * 1000));
  //   gsap.ticker.lagSmoothing(0);

  //   return () => { lenis.destroy(); };
  // }, []);

  // // GSAP hero reveal
  // useEffect(() => {
  //   if (!heroTextRef.current) return;
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.gsap-reveal',
  //       { opacity: 0, y: 60, skewY: 3 },
  //       { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.3 }
  //     );
  //   }, heroTextRef);
  //   return () => ctx.revert();
  // }, []);

  // // GSAP horizontal scroll for timeline
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo('.tl-item',
  //       { opacity: 0, x: -60 },
  //       {
  //         opacity: 1, x: 0, duration: 0.8, stagger: 0.25, ease: 'power3.out',
  //         scrollTrigger: { trigger: '.tl-wrapper', start: 'top 75%' }
  //       }
  //     );
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <main
      ref={wrapperRef}
      className="relative overflow-x-hidden"
      style={{
        background: '#050810',
        color: '#f1f5f9',
        fontFamily: '"DM Sans", system-ui, sans-serif',
      }}
    >

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Three.js Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ alpha: true, antialias: true }}>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#050810]/30 to-[#050810]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050810]/60 via-transparent to-transparent" />

        {/* Noise texture */}
        <div className="absolute inset-0 z-10 opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }} />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-28 w-full"
        >
          <div ref={heroTextRef} className="max-w-3xl">

            <div className="gsap-reveal mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 border border-blue-400/30 bg-blue-400/5 px-4 py-2 rounded-full">
                <Sparkles className="w-3 h-3" />
                SPURVANCE LABS · ABOUT
              </span>
            </div>

            <div className="gsap-reveal">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tighter mb-2">
                <span style={{
                  background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>From Services</span>
              </h1>
            </div>

            <div className="gsap-reveal">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tighter mb-8">
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>to Digital Freedom</span>
              </h1>
            </div>

            <div className="gsap-reveal space-y-4 text-base text-gray-400 leading-relaxed max-w-xl">
              <p>
                We started as <strong className="text-white font-medium">IT-Khaver</strong> in 2020 — a service-based company
                helping businesses navigate their technology needs with precision and care.
              </p>
              <p>
                In <strong className="text-white font-medium">2025</strong>, we evolved into{' '}
                <strong className="text-white font-medium">Spurvance Labs</strong>,
                embracing a hybrid model blending enterprise services with innovative in-house products.
              </p>
            </div>

            <div className="gsap-reveal flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 30px #3b82f644' }}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                Work With Us
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section
        className="relative z-10 border-y border-white/[0.06] backdrop-blur-sm"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <s.icon className="w-5 h-5 text-blue-400 mx-auto mb-3 opacity-70" />
              <div className="text-3xl font-bold tracking-tighter text-white">
                <AnimatedCounter target={s.number} suffix={s.suffix} />
              </div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide uppercase font-mono">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISSION QUOTE ─────────────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <Quote
            className="absolute -top-4 -left-2 opacity-10"
            style={{ width: 80, height: 80, color: '#3b82f6' }}
          />
          <blockquote
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.3] tracking-tight pl-6 max-w-4xl"
            style={{
              borderLeft: '3px solid',
              borderImage: 'linear-gradient(180deg, #3b82f6, #8b5cf6) 1',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              "To build privacy-first software that protects individuals, businesses, and communities
              from digital surveillance through encrypted communication and secure infrastructure."
            </span>
          </blockquote>
          <p className="mt-6 ml-6 text-sm text-gray-500 font-mono tracking-wide">— Spurvance Labs Mission Statement</p>
        </motion.div>
      </section>

      {/* ── WHO WE ARE + FOUNDER ──────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono tracking-widest text-blue-400 mb-4 block">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tighter mb-6">
              A{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Privacy-First</span>{' '}
              Software Company
            </h2>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>We design and build secure digital systems focused on privacy, encryption, and open-source infrastructure. Our goal is to give individuals and businesses full control over their digital presence and data sovereignty.</p>
              <p>Unlike traditional IT service companies, we are transitioning into a product-driven engineering lab — building tools for communication, cybersecurity, and decentralized infrastructure that puts users first.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {['Privacy-first architecture', 'Open-source development', 'Hybrid services + products', 'Digital sovereignty focus'].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            {/* Gradient top bar */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent)' }} />

            <div className="p-8">
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-40 animate-pulse" />
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                    <img src="/ceo.jpeg" alt="Muhammad Abdullah Khaver" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Muhammad Abdullah Khaver</h3>
                  <p className="text-xs text-blue-400 font-medium mt-0.5">Founder & CEO</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-gray-500">Active</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                I founded Spurvance Labs to build privacy-first, secure, and open-source digital systems.
                My focus is on creating technology that protects users from surveillance and gives complete
                control over their data and communication.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/[0.06]">
                {[['5+', 'Years Exp'], ['100%', 'Privacy Focus'], ['Open', 'Source']].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-lg font-bold text-white">{v}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Security', 'Infrastructure', 'Product Strategy', 'Open Source'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs text-gray-400 rounded-full border border-white/[0.08] bg-white/[0.03]">{t}</span>
                ))}
              </div>

              <button
                onClick={() => { window.location.href = 'mailto:abdullah@spurvancelabs.com?subject=Connect%20with%20Founder'; }}
                className="group w-full py-3 rounded-xl text-sm font-medium text-white flex items-center justify-center gap-2 transition-all"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #4f46e5)', boxShadow: '0 0 20px #3b82f622' }}
              >
                Connect with Founder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-mono tracking-widest text-blue-400 mb-3 block">OUR EVOLUTION</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">The Journey to Digital Freedom</h2>
          </motion.div>

          <div className="tl-wrapper grid md:grid-cols-3 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="tl-item relative rounded-2xl p-7 overflow-hidden border border-white/[0.06]"
                style={{ background: 'rgba(255,255,255,0.02)' }}
                whileHover={{ y: -6, borderColor: `${item.color}44` }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at top left, ${item.color}08, transparent 60%)` }}
                />
                <div className="text-xs font-mono mb-2" style={{ color: item.color }}>{item.year} · {item.label}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>

                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${item.color}44, transparent)` }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl p-8 border border-white/[0.06]"
            style={{ background: 'rgba(59,130,246,0.05)' }}
          >
            <Quote className="w-8 h-8 text-blue-400 opacity-40 mb-4" />
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              "We realized that service alone wasn't enough. The Muslim world needs its own digital
              infrastructure — secure, private, and free from surveillance."
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Spurvance Labs Team</p>
                <p className="text-xs text-gray-500">Founding Vision</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 border border-blue-400/20 bg-blue-400/5 px-4 py-2 rounded-full mb-4">
            <Users className="w-3 h-3" />
            LEADERSHIP TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-3 mb-3">Meet the Visionaries</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            A passionate team committed to building a privacy-first digital future.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => <TeamCard key={i} member={m} index={i} />)}
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 border border-blue-400/20 bg-blue-400/5 px-4 py-2 rounded-full mb-4">
              <Heart className="w-3 h-3" />
              CORE VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-3 mb-3">What Drives Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              These principles guide every product we build and every service we deliver.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => <ValueCard key={i} v={v} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── OFFERINGS (dark glass) ────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono tracking-widest text-blue-400 mb-4 block">OUR OFFERINGS</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-8 leading-tight">
              Products & Services for<br />
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Digital Sovereignty</span>
            </h2>
            <div className="space-y-5">
              {[
                { icon: Shield, text: 'Encrypted communication tools that protect your privacy at every layer.' },
                { icon: Code, text: 'Enterprise software development built to last and scale with your business.' },
                { icon: Globe, text: 'Cloud infrastructure and DevOps consulting for reliable, secure systems.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 mt-8 text-sm text-blue-400 hover:text-blue-300 transition-all group"
            >
              Explore our products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '100%', label: 'Open Source', icon: Code, color: '#3b82f6' },
              { value: 'E2E', label: 'Encryption', icon: Shield, color: '#10b981' },
              { value: 'Zero', label: 'Surveillance', icon: Eye, color: '#8b5cf6' },
              { value: '🇵🇰', label: 'Made in Pakistan', icon: Award, color: '#f59e0b' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, borderColor: `${item.color}44` }}
                className="rounded-2xl p-6 text-center border border-white/[0.06] transition-all duration-300 cursor-default"
                style={{ background: `${item.color}08` }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</div>
                <div className="text-xs text-gray-500 font-mono tracking-wide">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: 'radial-gradient(circle, #3b82f6, #8b5cf6, transparent)' }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 border border-blue-400/20 bg-blue-400/5 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-3 h-3" />
              JOIN THE MOVEMENT
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-5 leading-tight">
              <span style={{
                background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Build Digital Freedom</span><br />
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>With Us</span>
            </h2>

            <p className="text-sm text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you want to use our products, contribute to open source,
              or need enterprise solutions — we're here to help you take control of your digital future.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 40px #3b82f633' }}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                Work With Us
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "Spurvance Labs",
              description: "A Pakistan-based privacy-first software company building encrypted tools and enterprise solutions.",
              foundingDate: "2020",
              founder: { "@type": "Person", name: "Muhammad Abdullah Khaver" },
            },
          }),
        }}
      />
    </main>
  );
};

export default AboutPage;