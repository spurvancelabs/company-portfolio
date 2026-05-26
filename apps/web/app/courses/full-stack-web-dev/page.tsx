/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

// "use client";
// import React, { useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from './components/Hero';
// import ToolsMarquee from './components/ToolsMarquee';
// import Schedule from './components/Schedule';
// import Syllabus from './components/Syllabus';
// import Projects from './components/Projects';
// import Benefits from './components/Benefits';
// import Instructor from './components/Instructor';
// import Enrollment from './components/Enrollment';
// import FAQ from './components/FAQ';
// import FinalCTA from './components/FinalCTA';

// gsap.registerPlugin(ScrollTrigger);

// export default function FullStackWebDevelopmentPage() {
//   const wrapperRef = useRef<HTMLElement>(null);
//   const heroRef = useRef<HTMLDivElement>(null);
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

//   // GSAP hero entrance
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo('.hero-line',
//         { opacity: 0, y: 80, skewY: 5 },
//         { opacity: 1, y: 0, skewY: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.2 }
//       );
//       gsap.fromTo('.hero-sub',
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' }
//       );
//     });
//     return () => ctx.revert();
//   }, []);

//   // GSAP marquee
//   useEffect(() => {
//     if (!marqueeRef.current) return;
//     const inner = marqueeRef.current.querySelector('.marquee-inner');
//     if (!inner) return;
//     gsap.to(inner, { x: '-50%', duration: 22, ease: 'none', repeat: -1 });
//   }, []);

//   // GSAP reveal on scroll
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
//         gsap.fromTo(el,
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
//             scrollTrigger: { trigger: el, start: 'top 85%', once: true }
//           }
//         );
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   // JSON-LD for SEO
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Course',
//     name: 'Full Stack Web Development + AI Engineering Bootcamp',
//     description: 'Live Urdu-medium bootcamp on Google Meet. React, Next.js, Node.js, TypeScript, Docker, AI Engineering. 3 months. Real projects. Internship certificate.',
//     provider: { '@type': 'Organization', name: 'Spurvance Labs', sameAs: 'https://spurvanclabs.com' },
//     educationalLevel: 'Beginner to Advanced',
//     courseMode: 'online',
//     inLanguage: 'ur',
//     offers: {
//       '@type': 'Offer',
//       price: '20000',
//       priceCurrency: 'PKR',
//       availability: 'https://schema.org/InStock',
//     },
//     hasCourseInstance: {
//       '@type': 'CourseInstance',
//       courseMode: 'online',
//       instructor: { '@type': 'Person', name: 'Muhammad Abdullah', jobTitle: 'Senior Full Stack Developer' },
//       startDate: '2026-06-02',
//       endDate: '2026-09-01',
//     },
//   };

//   return (
//     <main ref={wrapperRef} style={{ background: '#080c10', color: '#f1f5f9', fontFamily: '"Syne", "DM Sans", system-ui, sans-serif' }} className="overflow-x-hidden">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

//       <Hero   />
//       {/* <Hero heroRef={heroRef} heroOpacity={heroOpacity} heroScale={heroScale} /> */}
//       <ToolsMarquee  />
//       {/* <ToolsMarquee marqueeRef={marqueeRef} /> */}
//       <Schedule />
//       <Syllabus />
//       <Projects />
//       <Benefits />
//       <Instructor />
//       <Enrollment />
//       <FAQ />
//       <FinalCTA />
//     </main>
//   );
// }














// /*
//  * SPDX-License-Identifier: AGPL-3.0-or-later
//  * Copyright (c) 2026 Spurvance Labs
//  */


"use client";
import React, { useRef, useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import * as THREE from 'three';
import {
  ArrowRight, CheckCircle2, Clock, Code2, Server,
  Database, Layout, Cloud, Rocket, BookOpen, GraduationCap,
  Award, MessageCircle, ChevronRight, Zap, Target,
  ThumbsUp, ChevronDown, Terminal, Layers, GitBranch, Lock,
  Video, Languages, Briefcase, Calendar, Upload,
  Phone, Mail, User, CheckCheck, AlertCircle, Smartphone, CreditCard,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Helpers ───────────────────────────────────────────────────────────── */

const WHATSAPP_NUMBER = '923294171505';
const WEB3FORMS_KEY = 'aacfe900-722c-46fc-ad3d-6c7bf3e54376'; // ← replace with your key

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(price);

const handleWhatsAppContact = () => {
  const message = `Hi Spurvance Labs Team,\n\nI want to enroll in the Full Stack Web Dev + AI Engineering Bootcamp.\n\nPlease share:\n- Payment details\n- Next batch starting date\n- Any other details\n\nThank you.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
};

/* ── Three.js: Particle Sphere ─────────────────────────────────────────── */

// function ParticleField() {
//   const pointsRef = useRef<THREE.Points>(null);
//   const count = 2800;
//   const positions = React.useMemo(() => {
//     const pos = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const r = 3.2 + Math.random() * 0.8;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
//       pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
//       pos[i * 3 + 2] = r * Math.cos(phi);
//     }
//     return pos;
//   }, []);
//   useFrame((state) => {
//     if (!pointsRef.current) return;
//     pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
//     pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
//   });
//   return (
//     <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
//       <PointMaterial transparent color="#22d3ee" size={0.022} sizeAttenuation depthWrite={false} opacity={0.7} />
//     </Points>
//   );
// }

/* ── Data ──────────────────────────────────────────────────────────────── */

const modules = [
  {
    id: 1, title: 'WEEK 0 — Internet Working + Setup + Git/GitHub', icon: GitBranch,
    topics: [
      'How internet works (DNS, HTTP/HTTPS, client-server model)',
      'How websites load in browser (request → response cycle)',
      'VS Code setup + extensions (Prettier, Live Server, ESLint basics)',
      'Terminal basics (cd, ls, mkdir, rm, touch)',
      'Git & GitHub: init, add, commit, push, pull, clone, branch basics',
      'GitHub workflow (real developer flow)',
      'Folder structure in real projects',
    ],
    duration: '1 week', color: '#22d3ee',
  },
  {
    id: 2, title: 'HTML (HyperText Markup Language)', icon: Layout,
    topics: [
      'What is HTML and why it exists',
      'HTML document structure (doctype, head, body)',
      'Text elements (h1–h6, p, br, hr)',
      'Layout fundamentals: div (block container), span (inline container)',
      'Semantic HTML: header, nav, section, article, aside, footer',
      'Links and navigation (a tag, routing concept)',
      'Media: img, audio, video',
      'Lists (ul, ol, li)',
      'Forms: input types (text, email, password, number, file), textarea, select, option, label, form validation basics',
      'SEO basics (meta tags, OG tags)',
      'Accessibility basics (alt, aria-label)',
      'Page structuring mindset (layout thinking)',
    ],
    duration: '1 week', color: '#fb923c',
  },
  {
    id: 3, title: 'CSS (Cascading Style Sheets)', icon: Layers,
    topics: [
      'What is CSS and how it connects with HTML',
      'CSS syntax and selectors',
      'Colors (hex, rgb, rgba, hsl)',
      'Typography (fonts, spacing, weights)',
      'Box model (margin, padding, border, content)',
      'Display system: block, inline, inline-block, none',
      'Positioning: relative, absolute, fixed, sticky',
      'Z-index layering',
      'Flexbox (complete mastery)',
      'CSS Grid (complete layout system)',
      'Responsive design: media queries, mobile-first design',
      'Animations & transitions',
      'Hover effects & micro-interactions',
      'CSS architecture basics',
    ],
    duration: '1.5 weeks', color: '#818cf8',
  },
  {
    id: 4, title: 'TAILWIND CSS + BOOTSTRAP', icon: Zap,
    topics: [
      'Why CSS frameworks exist',
      'Tailwind CSS: utility-first concept, spacing system, flex/grid utilities, responsive classes, dark mode',
      'Bootstrap: grid system, components (navbar, cards, modals)',
      'Rapid UI building techniques',
      'Design consistency using utilities',
    ],
    duration: '0.5 weeks', color: '#38bdf8',
  },
  {
    id: 5, title: 'JAVASCRIPT (ADVANCED FRONTEND LOGIC)', icon: Terminal,
    topics: [
      'JavaScript runtime understanding',
      'Variables (let, const, var)',
      'Data types & type coercion',
      'Operators & expressions',
      'Control flow (if/else, switch)',
      'Loops (for, while, map, filter, reduce, forEach)',
      'Functions: scope, closures, callbacks',
      'Objects & arrays deep understanding',
      'DOM manipulation: querySelector, event delegation, dynamic rendering',
      'Events system: bubbling & capturing',
      'Async JavaScript: promises, async/await, fetch API',
      'Error handling',
      'LocalStorage / SessionStorage',
      'ES6+ features (spread, destructuring, modules)',
    ],
    duration: '2 weeks', color: '#fbbf24',
  },
  {
    id: 6, title: 'REACT JS (ADVANCED FRONTEND ENGINEERING)', icon: Code2,
    topics: [
      'React architecture',
      'JSX deep understanding',
      'Components design system',
      'Props vs State',
      'Hooks: useState, useEffect, useRef, useMemo, useCallback, useReducer',
      'Custom Hooks (real-world patterns)',
      'Context API (state management)',
      'Zustand (modern state management)',
      'React Router (advanced routing)',
      'API integration patterns',
      'Performance optimization',
      'Component reusability architecture',
      'Project: Advanced dashboard / SaaS frontend system',
    ],
    duration: '2.5 weeks', color: '#818cf8',
  },
  {
    id: 7, title: 'SUPABASE (FULL BACKEND AS A SERVICE)', icon: Database,
    topics: [
      'Supabase architecture',
      'Authentication: email/password, OAuth (Google, GitHub), SSO basics',
      'Database: tables, relations, Row Level Security (RLS)',
      'Real-time subscriptions',
      'Edge functions',
      'File storage system',
      'Custom email',
      'Database policies',
    ],
    duration: '1 week', color: '#34d399',
  },
  {
    id: 8, title: 'EXPRESS JS (ADVANCED BACKEND ENGINEERING)', icon: Server,
    topics: [
      'Node.js architecture',
      'Express server setup',
      'REST API design (production style)',
      'Middleware system',
      'Authentication: JWT, bcrypt password hashing',
      'Authorization roles system',
      'File upload: multer, Cloudinary integration',
      'Error handling architecture',
      'Logging systems',
      'API security best practices',
    ],
    duration: '1.5 weeks', color: '#10b981',
  },
  {
    id: 9, title: 'MONGODB + MONGOOSE (ADVANCED DATABASE SYSTEMS)', icon: Database,
    topics: [
      'Databases: SQL VS NoSQL',
      'NoSQL deep understanding',
      'MongoDB architecture',
      'Collections & documents',
      'Mongoose schemas',
      'Validation system',
      'CRUD operations',
      'Population (joins in MongoDB)',
      'Indexing basics',
      'Middleware (pre/post hooks)',
      'Aggregation pipeline basics',
    ],
    duration: '1 week', color: '#6cc24a',
  },
  {
    id: 10, title: 'NEXT.JS (PRODUCTION FULL STACK FRAMEWORK)', icon: Rocket,
    topics: [
      'App router architecture',
      'Server vs client components',
      'SSR / SSG / ISR',
      'API routes',
      'Middleware system',
      'Authentication patterns',
      'Performance optimization',
      'Full stack integration patterns',
      'Deployment readiness',
    ],
    duration: '1.5 weeks', color: '#f1f5f9',
  },
  {
    id: 11, title: 'TYPESCRIPT (PROFESSIONAL TYPE SAFETY)', icon: Lock,
    topics: [
      'Why TypeScript exists',
      'Primitive types',
      'Interfaces',
      'Type aliases',
      'Generics',
      'Functions typing',
      'React + TypeScript integration',
      'API typing systems',
    ],
    duration: '1 week', color: '#3178c6',
  },
  {
    id: 12, title: 'DEPLOYMENT (PRODUCTION ENGINEERING)', icon: Cloud,
    topics: [
      'Vercel deployment',
      'Netlify deployment',
      'Railway deployment',
      'Digital Ocean / AWS / Azure overview',
      'Environment variables',
      'CI/CD basics',
      'Build optimization',
      'Domain setup',
    ],
    duration: '0.5 weeks', color: '#a78bfa',
  },
  {
    id: 13, title: 'FIGMA TO CODE (UI ENGINEERING)', icon: Layout,
    topics: [
      'Figma interface understanding',
      'Design systems',
      'Spacing & typography systems',
      'Pixel-perfect UI building',
      'Component-based design conversion',
      'Responsive UI conversion',
    ],
    duration: '0.5 weeks', color: '#f472b6',
  },
  {
    id: 14, title: 'AI DEV TOOLS (MODERN DEVELOPER WORKFLOW)', icon: Target,
    topics: [
      'Cursor AI usage',
      'Antigravity tools',
      'AI pair programming',
      'Debugging with AI',
      'Code generation workflows',
      'Productivity systems',
    ],
    duration: '0.5 weeks', color: '#e879f9',
  },
  {
    id: 15, title: 'PRISMA ORM (ADVANCED DATABASE TOOLING)', icon: Layers,
    topics: [
      'ORM architecture',
      'Prisma setup',
      'Schema modeling',
      'Migrations',
      'Relations',
      'Prisma with PostgreSQL/MongoDB',
      'Query optimization basics',
    ],
    duration: '0.5 weeks', color: '#06b6d4',
  },
  {
    id: 16, title: 'CUSTOM LLMs + AI SYSTEMS', icon: Terminal,
    topics: [
      'OpenAI API integration',
      'Prompt engineering',
      'Ollama local models',
      'Hugging Face models',
      'Hosting your own models',
      'Chatbot systems',
      'Voice generation system',
      'Voice cloning project',
      'AI pipelines',
    ],
    duration: '1.5 weeks', color: '#8b5cf6',
  },
  {
    id: 17, title: 'i18n + REACT QUERY', icon: Layers,
    topics: [
      'Internationalization (multi-language apps)',
      'Translation systems',
      'React Query: caching, background fetching, synchronization, mutation system',
    ],
    duration: '0.5 weeks', color: '#22d3ee',
  },
  {
    id: 18, title: 'DOCKER (ADVANCED DEVOPS BASICS)', icon: Server,
    topics: [
      'Containers architecture',
      'Docker images vs containers',
      'Dockerfile creation',
      'Docker compose',
      'Networking basics',
      'Deployment containerization',
    ],
    duration: '0.5 weeks', color: '#2496ed',
  },
  {
    id: 19, title: 'STRIPE (PRODUCTION PAYMENT SYSTEM)', icon: Award,
    topics: [
      'Payment flow architecture',
      'Stripe checkout sessions',
      'Subscription systems',
      'Webhooks system',
      'Billing automation',
      'Secure payment design',
    ],
    duration: '0.5 weeks', color: '#6366f1',
  },
  {
    id: 20, title: 'GOOGLE STITCH (UI/AI TOOL)', icon: Target,
    topics: [
      'UI generation concepts',
      'AI-based design tools',
      'Workflow integration',
      'Rapid prototyping',
    ],
    duration: '0.5 weeks', color: '#fb923c',
  },
  {
    id: 21, title: 'SYSTEM DESIGN BASICS (FOR JUNIOR DEVELOPERS)', icon: Layers,
    topics: [
      'Scalability basics',
      'Load balancing concept',
      'Caching (Redis basics)',
      'Database scaling overview',
      'Microservices intro',
    ],
    duration: '0.5 weeks', color: '#f59e0b',
  },
  {
    id: 22, title: 'PERFORMANCE OPTIMIZATION', icon: Zap,
    topics: [
      'Frontend optimization',
      'Lazy loading',
      'Code splitting',
      'Image optimization',
      'Backend performance tuning',
    ],
    duration: '0.5 weeks', color: '#84cc16',
  },
  {
    id: 23, title: 'REAL WORLD PROJECT ARCHITECTURE', icon: Rocket,
    topics: [
      'Folder structure standards',
      'API design patterns',
      'State management architecture',
      'Scalable project setup',
      'Production best practices',
    ],
    duration: '1.5 weeks', color: '#a78bfa',
  },
];

const benefits = [
  { icon: Video, title: 'Live on Google Meet', desc: 'Every class is a live Google Meet session — real-time coding, screen sharing, and instant Q&A with your instructor.', color: '#22d3ee' },
  { icon: Languages, title: 'Taught Fully in Urdu', desc: 'All lectures delivered in Urdu. Complex concepts explained clearly in your native language — no confusion, just clarity.', color: '#818cf8' },
  { icon: Code2, title: 'Real Hands-On Projects', desc: 'Build actual production-grade apps from scratch. No toy examples — real codebases you can show to employers.', color: '#34d399' },
  { icon: Briefcase, title: '1 Month Free Internship', desc: 'Top-performing students earn a 1-month internship at Spurvance Labs with a verifiable internship certificate.', color: '#fb923c' },
  { icon: GraduationCap, title: 'Completion Certificate', desc: 'Earn a verifiable bootcamp completion certificate after finishing the course and presenting your capstone project.', color: '#f472b6' },
  { icon: Zap, title: 'Lifetime Session Recordings', desc: 'Every Google Meet session is recorded and shared. Missed a class? Rewatch anytime, as many times as you need.', color: '#a78bfa' },
];

const tools = [
  { name: 'React', color: '#61dafb' }, { name: 'Next.js', color: '#fff' },
  { name: 'Node.js', color: '#6cc24a' }, { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind', color: '#38bdf8' }, { name: 'MongoDB', color: '#47a248' },
  { name: 'PostgreSQL', color: '#336791' }, { name: 'Git', color: '#f05032' },
  { name: 'Docker', color: '#2496ed' }, { name: 'Vercel', color: '#fff' },
  { name: 'Supabase', color: '#3ecf8e' }, { name: 'Stripe', color: '#635bff' },
  { name: 'Prisma', color: '#5a67d8' }, { name: 'OpenAI', color: '#10a37f' },
];

const projects = [
  { title: 'Portfolio + Blog CMS', desc: 'Personal site with a full dynamic content management system', tag: 'Module 1-2', color: '#22d3ee' },
  { title: 'E-Commerce Platform', desc: 'Full online store with cart, checkout & JazzCash / Stripe payments', tag: 'Module 3-4', color: '#818cf8' },
  { title: 'Real-time Chat Application', desc: 'WebSocket-powered messaging system with rooms and notifications', tag: 'Module 3-5', color: '#34d399' },
  { title: 'Task Management Dashboard', desc: 'Kanban board with drag-and-drop and team collaboration features', tag: 'Module 2-4', color: '#fb923c' },
  { title: 'Full Stack SaaS Application', desc: 'Capstone: subscription-based app with admin panel & payment gateway', tag: 'Module 6', color: '#a78bfa' },
];

const faqs = [
  { q: 'Do I need prior coding experience?', a: 'Not at all! This bootcamp is for beginners. We start from absolute basics and go step by step to advanced topics.' },
  { q: 'Will the classes be in Urdu?', a: 'Yes — all lectures are delivered entirely in Urdu so that every concept is crystal clear to you.' },
  { q: 'On which platform will classes be held?', a: 'All live sessions will be on Google Meet. Each session will also be recorded and you will receive the recording within 24 hours.' },
  { q: 'What is the class schedule?', a: 'First 2 months: every day (except Friday and Sunday) from 9 PM to 11 PM. Third month: Sunday will have an extended session (more than 2 hours) because of the end of summen vacations.' },
  { q: 'How does installment payment work?', a: 'You can pay PKR 20,000 in 3 monthly installments. First installment at enrollment time, the rest at the beginning of each following month.' },
  { q: 'When will I receive the certificate?', a: 'At the end of the bootcamp, after presenting your capstone project, you will be given a verifiable completion certificate. Top students will also receive a 1-month free internship.' },
  { q: 'What if I miss a class?', a: 'No problem — every session is recorded and you can watch whenever you want. Lifetime access.' },
];

/* ── Enrollment Form ───────────────────────────────────────────────────── */

function EnrollmentForm() {
  const [paymentType, setPaymentType] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const installment = paymentType === 'installment';
  const fullPay = paymentType === 'full';
  const showPayment = installment || fullPay;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const fd = new FormData(e.currentTarget);
    fd.set('access_key', WEB3FORMS_KEY);
    fd.set('subject', `New Enrollment — Spurvance Labs Bootcamp (${paymentType === 'installment' ? 'Installment' : 'Full Payment'})`);
    fd.set('from_name', 'Spurvance Labs Enrollment Form');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) { setSubmitted(true); }
      else { setError(data.message || 'Something went wrong. Please try again.'); }
    } catch { setError('Network error. Please try again.'); }
    finally { setSubmitting(false); }
  };

  const inputClass = `w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600
    focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all`;

  if (submitted) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-12 text-center">
      <CheckCheck className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
      <p className="text-sm text-gray-400">
        شکریہ! ہم آپ کے details verify کر کے جلد WhatsApp پر confirm کریں گے۔
      </p>
    </motion.div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        <input name="name" required placeholder="Full Name" className={`${inputClass} pl-11`} />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        <input name="email" type="email" required placeholder="Email Address" className={`${inputClass} pl-11`} />
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        <input name="phone" type="tel" required placeholder="Phone / WhatsApp Number" className={`${inputClass} pl-11`} />
      </div>

      {/* Payment type */}
      <select
        name="payment_type"
        required
        value={paymentType}
        onChange={(e) => setPaymentType(e.target.value)}
        className={`${inputClass} appearance-none cursor-pointer`}
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <option className='text-white bg-[#0D181D]' value="" disabled>Select Payment Plan</option>
        <option className='text-white bg-[#0D181D]' value="full">Full Payment — PKR 20,000 (one time)</option>
        <option className='text-white bg-[#0D181D]' value="installment">Installment Plan — 3 monthly payments</option>
      </select>

      {/* Payment details card */}
      <AnimatePresence>
        {showPayment && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border p-4 space-y-3"
              style={{ background: 'rgba(34,211,238,0.04)', borderColor: '#22d3ee22' }}>

              <div className="flex items-center gap-2 mb-1">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-cyan-400 tracking-wide">JAZZCASH PAYMENT DETAILS</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500 mb-0.5">Account Title</p>
                  <p className="text-white font-medium">Muhammad Adnan Khaver</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">JazzCash Number</p>
                  <p className="text-white font-medium">0333-4899190</p>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {installment ? (
                <div>
                  <p className="text-xs text-gray-500 mb-1">First Installment (pay now)</p>
                  <p className="text-2xl font-black text-white">
                    {formatPrice(7000)}
                    <span className="text-xs text-gray-500 font-normal ml-2">of 3 monthly payments</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2nd & 3rd installments on course months 2 & 3</p>
                </div>
              ) : (
                <div>
                  <p className="text-xs text-gray-500 mb-1">Full Payment Amount</p>
                  <p className="text-2xl font-black text-white">{formatPrice(20000)}</p>
                </div>
              )}
            </div>

            {/* Screenshot upload */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Payment Screenshot (attach proof of payment)</p>
              <input
                ref={fileRef}
                type="file"
                name="attachment"
                accept="image/*"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/[0.12] text-sm text-gray-400
                  hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all"
              >
                <Upload className="w-4 h-4" />
                {fileName || 'Click to upload payment screenshot'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="flex items-center gap-2 text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl text-sm font-bold text-black transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}
      >
        {submitting ? 'Submitting...' : 'Submit Enrollment Application →'}
      </button>
    </form>
  );
}

/* ── Module Row (SYLLABUS — unchanged) ─────────────────────────────────── */

function ModuleRow({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = mod.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-5 py-5 text-left group">
        <span className="text-3xl font-black tabular-nums w-10 flex-shrink-0 transition-colors"
          style={{ color: open ? mod.color : 'rgba(255,255,255,0.15)', fontVariantNumeric: 'tabular-nums' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
          style={{ background: open ? `${mod.color}20` : 'rgba(255,255,255,0.05)', border: `1px solid ${open ? mod.color + '40' : 'rgba(255,255,255,0.06)'}` }}>
          <Icon className="w-4 h-4 transition-colors" style={{ color: open ? mod.color : '#64748b' }} />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-base font-semibold text-white block truncate">{mod.title}</span>
          <span className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
            <Clock className="w-3 h-3" />{mod.duration}
          </span>
        </div>
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
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">
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
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }} viewport={{ once: true }}
      className="border-b border-white/[0.06] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left gap-4">
        <span className="text-sm font-medium text-white">{faq.q}</span>
        <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
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



  /* GSAP hero entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-line',
        { opacity: 0, y: 80, skewY: 5 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  /* GSAP marquee */
  useEffect(() => {
    if (!marqueeRef.current) return;
    const inner = marqueeRef.current.querySelector('.marquee-inner');
    if (!inner) return;
    gsap.to(inner, { x: '-50%', duration: 22, ease: 'none', repeat: -1 });
  }, []);

  /* GSAP reveal on scroll */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true }
          });
      });
    });
    return () => ctx.revert();
  }, []);

  /* JSON-LD */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Full Stack Web Development + AI Engineering Bootcamp',
    description: 'Live Urdu-medium bootcamp on Google Meet. React, Next.js, Node.js, TypeScript, Docker, AI Engineering. 3 months. Real projects. Internship certificate.',
    provider: { '@type': 'Organization', name: 'Spurvance Labs', sameAs: 'https://spurvanclabs.com' },
    educationalLevel: 'Beginner to Advanced',
    courseMode: 'online',
    inLanguage: 'ur',
    offers: {
      '@type': 'Offer',
      price: '20000',
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      instructor: { '@type': 'Person', name: 'Muhammad Abdullah', jobTitle: 'Senior Full Stack Developer' },
      startDate: '2026-06-02',
      endDate: '2026-09-01',
    },
  };

  return (
    <main ref={wrapperRef}
      style={{ background: '#080c10', color: '#f1f5f9', fontFamily: '"Syne", "DM Sans", system-ui, sans-serif' }}
      className="overflow-x-hidden">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 7], fov: 55 }} gl={{ alpha: true, antialias: true }}>
            <Suspense fallback={null}>{/* <ParticleField /> */}</Suspense>
          </Canvas>
        </div>

        <div className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080c10 80%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10"
          style={{ background: 'linear-gradient(to top, #080c10, transparent)' }} />
        <div className="absolute inset-0 z-10 opacity-[0.025]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '180px' }} />

        <motion.div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">

            {/* Left */}
            <div>
              <div className="hero-sub mb-6 inline-flex items-center gap-2.5 text-xs font-mono tracking-widest border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                LIVE ON GOOGLE MEET · NEXT BATCH OPEN
              </div>

              <div className="overflow-hidden mb-1">
                <h1 className="hero-line text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.88] tracking-tighter">Full Stack Web Dev</h1>
              </div>
              <div className="overflow-hidden mb-1">
                <h1 className="hero-line text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.88] tracking-tighter"
                  style={{ background: 'linear-gradient(90deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  + AI Engineering
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-line text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.88] tracking-tighter text-white/20">Bootcamp</h1>
              </div>

              <p className="hero-sub mt-8 text-sm text-gray-400 leading-relaxed max-w-lg">
                Urdu medium live bootcamp on Google Meet — React, Next.js, Node.js, AI Engineering, TypeScript, Docker and much more.
                Real projects, Learn and Develop Skills
              </p>

              <div className="hero-sub flex flex-wrap items-center gap-5 mt-8 text-sm text-gray-500">
                {([
                  [Clock, '3 Months'],
                  [Video, 'Google Meet'],
                  [Languages, 'Urdu Medium'],
                  [GraduationCap, 'Certificate + Internship'],
                ] as const).map(([Icon, label], i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="hero-sub flex flex-wrap gap-3 mt-8">
                <button onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)', boxShadow: '0 0 30px #22d3ee33' }}>
                  Enroll Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all">
                  View Syllabus
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: pricing card */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}>
              <div className="h-px" style={{ background: 'linear-gradient(90deg, #22d3ee, #818cf8, #a78bfa)' }} />
              <div className="p-6">
                <span className="text-xs text-gray-500 font-mono tracking-wide block mb-2">COURSE FEE</span>

                {/* Full payment */}
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{formatPrice(20000)}</span>
                  <span className="text-xs text-gray-500 pb-1.5">full payment</span>
                </div>

                {/* Installment */}
                <div className="mt-2 mb-4 rounded-xl px-3 py-2 border border-cyan-400/15 bg-cyan-400/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-cyan-400 font-medium">Installment Plan Available</p>
                    <p className="text-xs text-gray-500 mt-0.5">3 monthly payments · no extra charges</p>
                  </div>
                  <span className="text-sm font-bold text-white">3×{formatPrice(7000)}</span>
                </div>

                <div className="space-y-2.5 mb-5">
                  {[
                    'Live Google Meet sessions',
                    'Lectures in Urdu',
                    'Real hands-on projects',
                    '1 month free internship (top students)',
                    'Verifiable completion certificate',
                    'Lifetime session recordings',
                    'AI Engineering modules included',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-black transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}>
                  Secure Your Seat →
                </button>
                <p className="text-center text-xs text-gray-600 mt-3">Limited seats per batch</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-gray-600">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <div ref={marqueeRef} className="py-5 border-y border-white/[0.06] overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="marquee-inner flex gap-8 w-max">
          {[...tools, ...tools].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-500 whitespace-nowrap px-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
              {t.name}
            </div>
          ))}
        </div>
      </div>

      {/* ── SCHEDULE ──────────────────────────────────────────────────── */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="reveal-up mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">CLASS SCHEDULE</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Live on Google Meet
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-3">Live on Google Meet + Session Recordings</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Month 1-2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="rounded-2xl p-6 border border-white/[0.06]"
            style={{ background: 'rgba(34,211,238,0.03)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: '#22d3ee15', border: '1px solid #22d3ee30' }}>
                <Calendar className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Month 1 & 2</p>
                <p className="text-xs text-gray-500">Foundation & Core Development</p>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1.5 mb-5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => {
                const off = d === 'Fri' || d === 'Sun';
                return (
                  <div key={d} className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-gray-600 font-mono">{d}</span>
                    <div className={`w-full h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${off
                      ? 'bg-white/[0.03] text-gray-700 border border-white/[0.04]'
                      : 'text-cyan-400 border border-cyan-400/25'}`}
                      style={off ? {} : { background: '#22d3ee12' }}>
                      {off ? '—' : '✓'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>9:00 PM – 11:00 PM PKT</span>
              </div>
              <span className="text-gray-600">Fri & Sun OFF</span>
            </div>
          </motion.div>

          {/* Month 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
            className="rounded-2xl p-6 border border-white/[0.06]"
            style={{ background: 'rgba(129,140,248,0.03)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: '#818cf815', border: '1px solid #818cf830' }}>
                <Calendar className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Month 3</p>
                <p className="text-xs text-gray-500">Advanced + AI Engineering (Post-Summer)</p>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1.5 mb-5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => {
                const extended = d === 'Sun';
                return (
                  <div key={d} className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-gray-600 font-mono">{d}</span>
                    <div className={`w-full h-8 rounded-lg flex items-center justify-center text-xs font-bold ${extended
                      ? 'text-amber-400 border border-amber-400/25'
                      : 'text-indigo-400 border border-indigo-400/25'}`}
                      style={{ background: extended ? '#f59e0b12' : '#818cf812' }}>
                      {extended ? '2h+' : '-'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>9:00 PM – 11:00 PM PKT</span>
              </div>
              <span className="text-amber-400/70">Sun: extended 2h+</span>
            </div>
          </motion.div>
        </div>

        {/* Platform note */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-5 rounded-2xl p-5 border border-white/[0.06] flex items-center gap-4"
          style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: '#22d3ee10', border: '1px solid #22d3ee25' }}>
            <Video className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Google Meet · Urdu Medium</p>
            <p className="text-xs text-gray-500 mt-0.5">
              All the classes will be live on Google Meet and recordings of the session will be provided within 24 hours.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── SYLLABUS ──────────────────────────────────────────────────── */}
      <section id="syllabus" className="py-24 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="reveal-up flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">CURRICULUM</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
              <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                3-Month Learning Path
              </span>
            </h2>
          </div>
          <div className="text-xs text-gray-500 font-mono">23 modules · 3 months total</div>
        </div>

        <div className="rounded-2xl border border-white/[0.06] overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="px-6">
            {modules.map((m, i) => <ModuleRow key={m.id} mod={m} index={i} />)}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-5 rounded-2xl p-6 border flex items-start gap-4"
          style={{ background: 'rgba(34,211,238,0.04)', borderColor: '#22d3ee22' }}>
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
      {/* <section className="py-24" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal-up mb-14">
            <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">REAL HANDS-ON PROJECTS</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
              <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                You Will Build These
              </span>
            </h2>
            <p className="text-sm text-gray-500 mt-3">کوئی tutorial نہیں — یہ real production projects ہیں جو آپ خود build کریں گے</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ y: -6, borderColor: `${p.color}40` }}
                className="rounded-2xl p-6 border border-white/[0.06] transition-all duration-300"
                style={{ background: `${p.color}06` }}>
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

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}
              className="rounded-2xl p-6 border border-white/[0.06] flex flex-col items-center justify-center text-center"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <Target className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-4xl font-black text-white mb-1">40+</div>
              <p className="text-xs text-gray-400">Hands-on coding exercises throughout the course</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal-up text-center mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">WHAT'S INCLUDED</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Everything You Get
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
              whileHover={{ borderColor: `${b.color}44`, y: -4 }}
              className="rounded-2xl p-6 border border-white/[0.06] transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
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
              <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Learn From the Best
              </span>
            </h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, #818cf8, transparent)' }} />
            <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-3xl bg-cyan-400 blur-2xl opacity-20" />
                <img src="https://avatars.githubusercontent.com/u/148730692?v=4" alt="Muhammad Abdullah"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl border border-white/10 shadow-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-1">Muhammad Abdullah</h3>
                <p className="text-xs text-cyan-400 font-mono tracking-wide mb-4">SENIOR FULL STACK DEVELOPER · 5+ YEARS</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-lg">
                  Abdullah is an experienced Full Stack Developer and AI Engineer who has hands on experience in building React, Next.js, and scalable backend systems.
                </p>
                <div className="flex flex-wrap gap-3">
                  {([
                    [Award, 'AI Engineer'],
                    [Code2, 'Full Stack Dev'],
                    [ThumbsUp, '5+ Years Experience'],
                  ] as const).map(([Icon, label], i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400 border border-white/[0.06] rounded-full px-3 py-1.5">
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ENROLLMENT ────────────────────────────────────────────────── */}
      <section id="enroll" className="py-24 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="reveal-up mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">ENROLL NOW</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Secure Your Seat
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-3">Submit the Form or reach us on Whatsapp to get instand reply.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">

          {/* Form */}
          <div className="rounded-2xl border border-white/[0.06] p-6 lg:p-8"
            style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, #22d3ee, #818cf8, transparent)' }} />
            <h3 className="text-base font-bold text-white mb-6">Enrollment Application Form</h3>
            <EnrollmentForm />
          </div>

          {/* WhatsApp & info sidebar */}
          <div className="space-y-4">

            {/* WhatsApp card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="rounded-2xl border p-6"
              style={{ background: 'rgba(37,211,102,0.04)', borderColor: '#25d16622' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#25d16615', border: '1px solid #25d16625' }}>
                <MessageCircle className="w-5 h-5" style={{ color: '#25d166' }} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Prefer WhatsApp?</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Instead of Form reach us on whatsapp our team will reply in minutes there.
              </p>
              <button onClick={handleWhatsAppContact}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #25d166, #128c4e)', color: '#fff' }}>
                Chat on WhatsApp →
              </button>
            </motion.div>

            {/* Payment info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] p-5"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono tracking-wide text-cyan-400">JAZZCASH DETAILS</span>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-gray-600 mb-0.5">Account Title</p>
                  <p className="text-white font-semibold">Muhammad Adnan Khaver</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-0.5">JazzCash Number</p>
                  <p className="text-white font-semibold">0333-4899190</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-gray-600 mb-0.5">Full Payment</p>
                  <p className="text-white font-bold text-base">{formatPrice(20000)}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-0.5">First Installment</p>
                  <p className="text-cyan-400 font-bold text-base">{formatPrice(7000)}</p>
                  <p className="text-gray-600 mt-0.5">then 2 more monthly payments</p>
                </div>
              </div>
            </motion.div>

            {/* What happens next */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] p-5"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <p className="text-xs font-semibold text-white mb-3">What happens next?</p>
              {[
                'Submit the form or whatsapp us',
                'Complete the payment on Jazzcash',
                'Give the proof (screenshot) of the payment.',
                'Get your confirmation within 12 Hours.',
                'U will be added to Google Meet link batch.',
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2.5 mb-2 last:mb-0">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-black mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}>
                    {i + 1}
                  </span>
                  <p className="text-xs text-gray-400">{s}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-3xl mx-auto px-6 lg:px-12">
        <div className="reveal-up text-center mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 mb-3 block">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            <span style={{ background: 'linear-gradient(90deg, #fff 0%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Frequently Asked Questions
            </span>
          </h2>
        </div>
        <div className="rounded-2xl border border-white/[0.06] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
          {faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} />)}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] rounded-full blur-[130px] opacity-20"
            style={{ background: 'radial-gradient(circle, #22d3ee, #818cf8, transparent)' }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>

            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 rounded-full mb-8">
              <Rocket className="w-3 h-3" />
              START YOUR JOURNEY TODAY
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span style={{ background: 'linear-gradient(90deg, #fff 40%, #64748b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Become a
              </span>
              <br />
              <span style={{ background: 'linear-gradient(90deg, #22d3ee, #818cf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Full Stack Dev.
              </span>
            </h2>

            <p className="text-sm text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Secure your seats immediately and become a Full Stack Web Developer in the Ai Era.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)', boxShadow: '0 0 40px #22d3ee33' }}>
                Enroll Now
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button onClick={handleWhatsAppContact}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all">
                WhatsApp Us
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-600 mt-6 font-mono">
              {formatPrice(20000)} full · or 3 × {formatPrice(7000)} installments · Google Meet · Urdu Medium
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
