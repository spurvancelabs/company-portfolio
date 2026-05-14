/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Server,
  Code2,
  GraduationCap,
  ShieldCheck,
  Layers,
  GitBranch,
  Globe,
  Terminal,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  Lock,
  MessageCircle,
  Mail,
  Briefcase,
  Star,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Phone,
  Clock,
  MapPin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  id: string
  icon: React.ReactNode
  label: string
  title: string
  description: string
  features: string[]
  tools: string[]
  badge?: string
}

interface Stat {
  value: string
  label: string
  description?: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    id: 'devops',
    icon: <Server size={24} strokeWidth={1.5} />,
    label: 'Infrastructure',
    title: 'DevOps & Cloud Engineering',
    description: 'Architect, automate, and maintain resilient infrastructure. Your team ships faster without worrying about uptime, scaling, or deployment pipelines.',
    features: [
      'CI/CD pipeline design & automation',
      'Kubernetes orchestration & management',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Cloud cost optimisation',
      'Monitoring, alerting & incident response',
      'Zero-downtime deployments',
    ],
    tools: ['AWS', 'GCP', 'Docker', 'K8s', 'Terraform', 'GitHub Actions'],
    badge: 'Most Popular',
  },
  {
    id: 'development',
    icon: <Code2 size={24} strokeWidth={1.5} />,
    label: 'Development',
    title: 'Full-Stack Development',
    description: 'From MVPs to enterprise platforms — clean, scalable, open-source-first software. TypeScript, Next.js, Django, Go — whatever your stack demands.',
    features: [
      'Web & mobile application development',
      'API design & backend engineering',
      'Open source integration & contribution',
      'Code audits & technical debt reduction',
      'Performance optimisation',
      'Privacy-by-design architecture',
    ],
    tools: ['Next.js', 'Django', 'Go', 'React Native', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'security',
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    label: 'Security',
    title: 'Security & Privacy Engineering',
    description: 'Harden your systems against breaches. End-to-end encryption, penetration testing, and privacy architecture that protects your users and business.',
    features: [
      'Penetration testing & vulnerability assessment',
      'End-to-end encryption implementation',
      'GDPR & data privacy compliance',
      'Security code review',
      'Zero-trust architecture design',
      'Threat modelling workshops',
    ],
    tools: ['OWASP', 'Burp Suite', 'Vault', 'WireGuard', 'OpenPGP', 'TLS'],
  },
  {
    id: 'training',
    icon: <GraduationCap size={24} strokeWidth={1.5} />,
    label: 'Training',
    title: 'Tech Training & Upskilling',
    description: 'Capacity-building for Pakistani teams. Hands-on workshops in DevOps, open source development, and digital security — in Urdu or English.',
    features: [
      'DevOps & cloud fundamentals bootcamp',
      'Open source development & contribution',
      'Linux systems administration',
      'Secure coding practices',
      'Team technical onboarding',
      'Custom curriculum design',
    ],
    tools: ['Linux', 'Git', 'Ansible', 'Python', 'Shell', 'Open Source'],
  },
];

const stats: Stat[] = [
  { value: '5+', label: 'Years Experience', description: 'Since 2020' },
  { value: '40+', label: 'Projects Delivered', description: 'Across Pakistan' },
  { value: '98%', label: 'Client Retention', description: 'Repeat & referral' },
  { value: '100%', label: 'Open Source First', description: 'No lock-in' },
];

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'A free 30-minute consultation to understand your goals, stack, and constraints — no sales pitch, no pressure.',
  },
  {
    step: '02',
    title: 'Proposal & Scope',
    description: 'You receive a clear, itemised proposal within 48 hours. Fixed scope or retainer — your choice, your control.',
  },
  {
    step: '03',
    title: 'Kick-off & Delivery',
    description: 'Work begins immediately. Weekly updates, async-first communication, full transparency throughout.',
  },
  {
    step: '04',
    title: 'Handover & Support',
    description: 'We document everything and hand over cleanly. Optional ongoing support retainers for peace of mind.',
  },
];

const differentiators = [
  {
    icon: <Lock size={20} strokeWidth={1.5} />,
    title: 'Privacy-First by Default',
    description: 'Every architecture decision starts with "how does this protect user data?" — not as an afterthought.',
  },
  {
    icon: <GitBranch size={20} strokeWidth={1.5} />,
    title: 'Open Source Commitment',
    description: 'We use, contribute to, and prefer open source tools. No vendor lock-in, full auditability.',
  },
  {
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: 'Made in Pakistan',
    description: 'Local context, global standards. We understand Pakistani business needs and regulatory landscape.',
  },
  {
    icon: <Terminal size={20} strokeWidth={1.5} />,
    title: 'Engineers, Not Sales Reps',
    description: 'Your point of contact is always a practising engineer — no account managers in the middle.',
  },
  {
    icon: <Layers size={20} strokeWidth={1.5} />,
    title: 'Full Documentation',
    description: 'Every project ends with thorough handover docs. You own everything, forever.',
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: 'Community-Rooted',
    description: 'We mentor junior Pakistani devs and contribute to local tech communities — Digital Pakistan matters.',
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative flex flex-col rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/5 dark:hover:shadow-black/20"
    >
      {/* Badge */}
      {service.badge && (
        <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/30">
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 mb-6 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300">
        {service.icon}
      </div>

      {/* Label */}
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-2">
        {service.label}
      </p>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500/70" strokeWidth={2} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5 pt-6 border-t border-gray-100 dark:border-gray-800">
        {service.tools.map((tool) => (
          <span key={tool} className="text-[11px] px-2 py-1 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-500 border border-gray-100 dark:border-gray-800 font-medium">
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative flex gap-6"
    >
      {/* Step number */}
      <div className="relative flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0 shadow-sm group-hover:border-indigo-500 transition-colors">
          <span className="text-sm font-bold text-gray-900 dark:text-white">{step.step}</span>
        </div>
        {index < processSteps.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-gray-200 dark:from-gray-800 to-transparent mt-4 min-h-[40px]" />
        )}
      </div>

      {/* Content */}
      <div className="pt-3 pb-10 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">{step.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-violet-500/[0.03] rounded-full blur-3xl" />
        </div>

        <motion.div className="relative max-w-5xl mx-auto text-center" style={{ opacity: heroOpacity, y: heroY }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-8">
              <Zap size={12} strokeWidth={2} />
              Enterprise Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.95] mb-6"
          >
            Expert Services.
            <span className="block mt-2 text-white/30">Open Values.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-white/40 leading-relaxed mb-10"
          >
            Enterprise-grade DevOps, development, security, and training — built with the 
            transparency of open source, for teams across Pakistan and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link
              href="mailto:info@spurvancelabs.com"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
            >
              Book Free Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tabular-nums mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</p>
                {stat.description && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{stat.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-5">
              Four Core Areas
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              All delivered with full transparency, documented handovers, and open source tooling wherever possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-24 lg:py-32 px-4 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
                What Makes Us
                <span className="block text-gray-400 dark:text-gray-600">Different</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                We're not a typical agency. We're a mission-driven team that builds for the long term. 
                Every engagement is an opportunity to create lasting value, not just billable hours.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" strokeWidth={2} />
                <span>No long-term contracts required</span>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 text-gray-600 dark:text-gray-400 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 lg:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-5">
              Simple & Transparent
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              Async-first, no bloated processes — just delivery.
            </p>
          </motion.div>

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <ProcessStepCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
            <Briefcase size={24} className="text-indigo-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.05]">
            Ready to Build
            <span className="block text-white/30">Something Great?</span>
          </h2>

          <p className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you need DevOps help, a new product built, or a security audit — let's talk. 
            First consultation is free, always.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link
              href="mailto:info@spurvancelabs.com"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
            >
              <Mail size={15} />
              Email Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </Link>
            <a
              href="https://wa.me/923294171505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-sm font-medium rounded-xl border border-white/15 hover:bg-white/5 transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-3">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/30">
              <span className="flex items-center gap-1.5">
                <Mail size={13} />
                info@spurvancelabs.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} />
                +92 329 4171505
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                Pakistan
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-white/20">
              <span className="flex items-center gap-1">
                <Clock size={11} />
                Response within 24 hours
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={11} />
                Free consultation
              </span>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}