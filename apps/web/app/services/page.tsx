'use client'

import { motion } from 'framer-motion'
import {
  Server,
  Code2,
  GraduationCap,
  ShieldCheck,
  Layers,
  GitBranch,
  Cloud,
  Terminal,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Lock,
  MessageCircle,
  Mail,
  Briefcase,
  TrendingUp,
  Star
} from 'lucide-react'
import Link from 'next/link'


interface Service {
  id: string
  icon: React.ReactNode
  label: string
  title: string
  description: string
  features: string[]
  tools: string[]
  badge?: string
  accent: string
  accentBg: string
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
    icon: <Server size={28} />,
    label: 'Infrastructure & DevOps',
    title: 'DevOps & Cloud Engineering',
    description:
      'We architect, automate, and maintain resilient infrastructure — so your engineering team ships faster without worrying about uptime, scaling, or deployment pipelines.',
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
    accent: '#2563EB',
    accentBg: '#2563EB0C',
  },
  {
    id: 'development',
    icon: <Code2 size={28} />,
    label: 'Software Development',
    title: 'Full-Stack Development',
    description:
      'From MVPs to enterprise platforms — we build clean, scalable, open-source-first software. TypeScript, Next.js, Django, Go — whatever your stack demands.',
    features: [
      'Web & mobile application development',
      'API design & backend engineering',
      'Open source integration & contribution',
      'Code audits & technical debt reduction',
      'Performance optimisation',
      'Privacy-by-design architecture',
    ],
    tools: ['Next.js', 'Django', 'Go', 'React Native', 'PostgreSQL', 'Redis'],
    accent: '#7C3AED',
    accentBg: '#7C3AED0C',
  },
  {
    id: 'security',
    icon: <ShieldCheck size={28} />,
    label: 'Security & Privacy',
    title: 'Security Audits & Privacy Engineering',
    description:
      'We harden your systems against surveillance and breaches. End-to-end encryption, penetration testing, and privacy architecture designed to protect your users and your business.',
    features: [
      'Penetration testing & vulnerability assessment',
      'End-to-end encryption implementation',
      'GDPR & data privacy compliance',
      'Security code review',
      'Zero-trust architecture design',
      'Threat modelling workshops',
    ],
    tools: ['OWASP', 'Burp Suite', 'Vault', 'WireGuard', 'OpenPGP', 'TLS'],
    accent: '#10B981',
    accentBg: '#10B9810C',
  },
  {
    id: 'training',
    icon: <GraduationCap size={28} />,
    label: 'Training & Workshops',
    title: 'Tech Training & Upskilling',
    description:
      'Capacity-building for Pakistani teams. We run hands-on workshops in DevOps, open source development, and digital security — in Urdu or English, remote or on-site.',
    features: [
      'DevOps & cloud fundamentals bootcamp',
      'Open source development & contribution',
      'Linux systems administration',
      'Secure coding practices',
      'Team technical onboarding',
      'Custom curriculum design',
    ],
    tools: ['Linux', 'Git', 'Ansible', 'Python', 'Shell', 'Open Source'],
    accent: '#F97316',
    accentBg: '#F973160C',
  },
]

const stats: Stat[] = [
  { value: '5+', label: 'Years Experience', description: 'Since 2020' },
  { value: '40+', label: 'Projects Delivered', description: 'Across Pakistan' },
  { value: '98%', label: 'Client Retention', description: 'Repeat & referral' },
  { value: '100%', label: 'Open Source First', description: 'No lock-in' },
]

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We start with a free 30-minute consultation to understand your goals, stack, and constraints — no sales pitch, no pressure.',
  },
  {
    step: '02',
    title: 'Proposal & Scope',
    description:
      'You receive a clear, itemised proposal within 48 hours. Fixed scope or retainer — your choice, your control.',
  },
  {
    step: '03',
    title: 'Kick-off & Delivery',
    description:
      'Work begins immediately. Weekly updates, async-first communication, full transparency throughout the engagement.',
  },
  {
    step: '04',
    title: 'Handover & Support',
    description:
      'We document everything and hand over cleanly. Optional ongoing support retainers available for peace of mind.',
  },
]

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-100px' },
}

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/30"
    >
      {/* Badge */}
      {service.badge && (
        <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{ backgroundColor: service.accentBg, color: service.accent }}
      >
        {service.icon}
      </div>

      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider mb-2"
        style={{ color: service.accent }}>
        {service.label}
      </p>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-1">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: service.accent }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-gray-800">
        {service.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        
        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] rounded-full bg-gradient-to-tl from-green-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-6 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900">
              <Zap size={13} />
              Enterprise Services
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            Expert services.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Open source values.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10"
          >
            Spurvance Labs provides enterprise-grade DevOps, development, security, and training
            services — built with the transparency and trust of open source, for teams across Pakistan and beyond.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="mailto:info@spurvancelabs.com"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all hover:gap-3"
            >
              Book a Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-semibold text-sm transition-all"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs text-gray-500 dark:text-gray-600 mt-8"
          >
            Trusted by startups and enterprises across Pakistan
          </motion.p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What we do
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Four core service areas. All delivered with full transparency, documented handovers, and open source tooling wherever possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us (Differentiators) ── */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
              <Star size={12} />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What makes us different
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              We're not a typical agency. We're a mission-driven team that builds for the long term.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock size={22} />,
                title: 'Privacy-First by Default',
                description:
                  'Every architecture decision starts with "how does this protect user data?" — not as an afterthought.',
                color: '#10B981',
              },
              {
                icon: <GitBranch size={22} />,
                title: 'Open Source Commitment',
                description:
                  'We use, contribute to, and prefer open source tools. No vendor lock-in, full auditability.',
                color: '#2563EB',
              },
              {
                icon: <Globe size={22} />,
                title: 'Made in Pakistan',
                description:
                  'Local context, global standards. We understand Pakistani business needs and regulatory landscape.',
                color: '#7C3AED',
              },
              {
                icon: <Terminal size={22} />,
                title: 'Engineers, Not Sales Reps',
                description:
                  'Your point of contact is always a practising engineer — no account managers in the middle.',
                color: '#F97316',
              },
              {
                icon: <Layers size={22} />,
                title: 'Full Documentation',
                description:
                  'Every project ends with thorough handover docs. You own everything, forever.',
                color: '#2563EB',
              },
              {
                icon: <Users size={22} />,
                title: 'Community-Rooted',
                description:
                  'We mentor junior Pakistani devs and contribute to local tech communities — because Digital Pakistan matters.',
                color: '#10B981',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}12`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How we work
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Simple, transparent, async-first. No bloated processes — just delivery.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start md:pl-0"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-8">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-700 dark:via-blue-800 dark:to-purple-900 p-12 text-center text-white shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, white 1.5px, transparent 1.5px)`,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Briefcase size={32} className="opacity-90" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Ready to build something great?
              </h2>
              
              <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
                Whether you need DevOps help, a new product built, or a security audit — let's talk.
                First consultation is free, always.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:info@spurvancelabs.com"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-all hover:gap-3"
                >
                  <Mail size={16} />
                  Email Us
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/923294171505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-blue-200">
                  📧 info@spurvancelabs.com · 📞 +92 329 4171505
                </p>
                <p className="text-xs text-blue-200/70 mt-2">
                  Response within 24 hours · Free consultation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Software Development & DevOps Services",
      provider: {
        "@type": "Organization",
        name: "Spurvance Labs",
        url: "https://yourdomain.com",
      },
      areaServed: "Worldwide",
      description:
        "DevOps, full-stack development, cybersecurity, and cloud engineering services.",
    }),
  }}
/>
    </main>
  )
}