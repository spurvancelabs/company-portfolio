'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Heart,
  Send,
  CheckCircle,
  Clock,
  Globe,
  ArrowRight,
  Zap,
  Code2,
  Palette,
  Shield,
  Brain,
  BarChart3,
  Users,
  Star,
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
  Clock3,
  Laptop,
  Coffee,
  ChevronDown,
  ArrowUpRight,
  Play,
  Quote,
  Check,
  X
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface InternshipProgram {
  icon: React.ReactNode;
  title: string;
  type: 'Free' | 'Paid';
  description: string;
  skills: string[];
  duration: string;
  spots: string;
  level: 'Entry' | 'Intermediate' | 'Advanced';
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  company: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-50px" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const internshipPrograms: InternshipProgram[] = [
  {
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: 'Web Development',
    type: 'Free',
    description: 'Master full-stack development with React, Next.js, Node.js, and modern cloud-native architectures. Build production-ready applications.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    duration: '4 weeks',
    spots: '20',
    level: 'Entry'
  },
  // {
  //   icon: <Zap size={22} strokeWidth={1.5} />,
  //   title: 'DevOps & Cloud Engineering',
  //   type: 'Paid',
  //   description: 'Design and implement CI/CD pipelines, container orchestration, and infrastructure-as-code solutions for enterprise environments.',
  //   skills: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions', 'Linux'],
  //   duration: '16 weeks',
  //   spots: '6',
  //   level: 'Intermediate'
  // },
  // {
  //   icon: <Brain size={22} strokeWidth={1.5} />,
  //   title: 'Machine Learning Engineering',
  //   type: 'Paid',
  //   description: 'Develop and deploy ML models at scale. Work on NLP, computer vision, and recommendation systems with production-grade MLOps.',
  //   skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'NLP', 'Computer Vision'],
  //   duration: '20 weeks',
  //   spots: '4',
  //   level: 'Advanced'
  // },
  // {
  //   icon: <BarChart3 size={22} strokeWidth={1.5} />,
  //   title: 'Growth Marketing',
  //   type: 'Free',
  //   description: 'Drive user acquisition and retention through data-driven marketing strategies, SEO optimization, and conversion rate optimization.',
  //   skills: ['SEO/SEM', 'Analytics', 'Content Strategy', 'A/B Testing', 'PPC', 'CRM'],
  //   duration: '8 weeks',
  //   spots: '15',
  //   level: 'Entry'
  // },
  // {
  //   icon: <Palette size={22} strokeWidth={1.5} />,
  //   title: 'Product Design',
  //   type: 'Free',
  //   description: 'Create intuitive user experiences and design systems. From research and wireframing to high-fidelity prototypes and design handoff.',
  //   skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Typography', 'Accessibility'],
  //   duration: '12 weeks',
  //   spots: '10',
  //   level: 'Entry'
  // },
  // {
  //   icon: <Shield size={22} strokeWidth={1.5} />,
  //   title: 'Cybersecurity Operations',
  //   type: 'Paid',
  //   description: 'Protect digital assets through threat detection, incident response, and security architecture design for modern cloud environments.',
  //   skills: ['SIEM', 'Penetration Testing', 'Cloud Security', 'Incident Response', 'Cryptography', 'Compliance'],
  //   duration: '16 weeks',
  //   spots: '5',
  //   level: 'Intermediate'
  // }
];

const benefits: Benefit[] = [
  {
    icon: <Trophy size={22} strokeWidth={1.5} />,
    title: 'Production Experience',
    description: 'Work on live projects with real users, real deadlines, and real impact. Your code ships to production.'
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: '1:1 Senior Mentorship',
    description: 'Weekly sessions with industry veterans from Google, Meta, and leading startups who are invested in your growth.'
  },
  {
    icon: <Briefcase size={22} strokeWidth={1.5} />,
    title: 'Direct Hiring Pipeline',
    description: 'Top 20% of graduates receive full-time offers. All others get warm introductions to our hiring partner network.'
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: 'Fully Distributed',
    description: 'Work from anywhere with async-first collaboration. Flexible hours that respect your timezone and commitments.'
  },
  {
    icon: <Star size={22} strokeWidth={1.5} />,
    title: 'Verified Credential',
    description: 'Receive a blockchain-verified certificate and detailed portfolio review letter signed by your engineering lead.'
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: 'Alumni Network',
    description: 'Join 200+ alumni across 15 countries. Lifetime access to our private community, events, and job board.'
  }
];

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    content: 'The mentorship I received was transformative. Within three months, I went from tutorial projects to shipping features used by thousands of users. I received a full-time offer before the internship ended.',
    avatar: 'SC',
    company: 'Stripe'
  },
  {
    name: 'Marcus Johnson',
    role: 'ML Engineer',
    content: 'Unlike other programs where you work on toy datasets, here I built a production recommendation system that increased engagement by 23%. The MLOps skills I gained are invaluable.',
    avatar: 'MJ',
    company: 'Spotify'
  },
  {
    name: 'Aisha Patel',
    role: 'Product Designer',
    content: 'The design critique sessions were rigorous and incredibly valuable. I learned to defend my decisions with data and user research. My portfolio went from student work to professional grade.',
    avatar: 'AP',
    company: 'Figma'
  }
];

const faqs: FAQ[] = [
  {
    question: 'What is the time commitment?',
    answer: 'Our internships are designed to be flexible. Most interns dedicate 20-30 hours per week. We operate async-first, so you can work during hours that suit your schedule and timezone.'
  },
  {
    question: 'Are the internships truly remote?',
    answer: 'Yes, 100% remote since our founding. We have team members across 15+ time zones. All collaboration happens through Slack, Notion, GitHub, and scheduled video calls when necessary.'
  },
  {
    question: 'What happens after I apply?',
    answer: 'Applications are reviewed within 5 business days. Selected candidates complete a brief technical assessment (30-60 min) relevant to their program. Final decisions are communicated within 2 weeks of application.'
  },
  {
    question: 'Do I need prior experience?',
    answer: 'Entry-level programs require only foundational knowledge and strong motivation. Intermediate and Advanced programs expect some prior project experience. Each program page lists specific prerequisites.'
  },
  {
    question: 'Is there a stipend for paid programs?',
    answer: 'Paid internships offer $2,000-$4,000 monthly depending on program and location. Free programs include a completion bonus and priority access to our hiring network.'
  }
];

const stats = [
  { icon: <Users size={18} strokeWidth={1.5} />, number: '200+', label: 'Alumni Placed' },
  { icon: <Briefcase size={18} strokeWidth={1.5} />, number: '87%', label: 'Full-Time Conversion' },
  { icon: <Globe size={18} strokeWidth={1.5} />, number: '15+', label: 'Countries' },
  { icon: <Star size={18} strokeWidth={1.5} />, number: '4.9/5', label: 'Net Promoter Score' }
];

// ─── Components ──────────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="tabular-nums"
    >
      {value}{suffix}
    </motion.span>
  );
}

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'web-development',
    experience: 'beginner',
    linkedin: '',
    portfolio: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;

  try {
    setIsSubmitting(true);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '427eccc7-f494-4c38-a3f1-57cb47c7c379',

        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        experience: formData.experience,
        linkedin: formData.linkedin,
        portfolio: formData.portfolio,
        message: formData.message,

        subject: 'New Internship Application',
      }),
    });

    const data = await res.json();

    if (data.success) {
      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        program: 'web-development',
        experience: 'beginner',
        linkedin: '',
        portfolio: '',
        message: '',
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('Submission failed');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong');
  } finally {
    setIsSubmitting(false);
  }
};

  const inputClasses = "w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-all duration-200 outline-none";
  const borderClasses = "border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10";

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-center py-16 px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          Application Received
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
          Thank you for your interest. We've sent a confirmation to your email and will review your application within 5 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input type="checkbox" name="botcheck" className="hidden" />
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className={`${inputClasses} ${borderClasses}`}
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`${inputClasses} ${borderClasses}`}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`${inputClasses} ${borderClasses}`}
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Program <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className={`${inputClasses} ${borderClasses} appearance-none cursor-pointer`}
          >
            <option value="web-development">Web Development</option>
            <option value="automation">DevOps & Cloud Engineering</option>
            <option value="ai">Machine Learning Engineering</option>
            <option value="digital-marketing">Growth Marketing</option>
            <option value="graphic-design">Product Design</option>
            <option value="cyber-security">Cybersecurity Operations</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Experience Level <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className={`${inputClasses} ${borderClasses} appearance-none cursor-pointer`}
          >
            <option value="beginner">Beginner — Learning fundamentals</option>
            <option value="intermediate">Intermediate — Built projects</option>
            <option value="advanced">Advanced — Production experience</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            LinkedIn Profile
          </label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            className={`${inputClasses} ${borderClasses}`}
            placeholder="linkedin.com/in/username"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Portfolio / GitHub URL
        </label>
        <input
          type="url"
          value={formData.portfolio}
          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
          className={`${inputClasses} ${borderClasses}`}
          placeholder="github.com/username or yourportfolio.com"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Why do you want to join? <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} ${borderClasses} resize-none`}
          placeholder="Tell us about your background, what you're looking to learn, and why this program specifically..."
        />
        <p className="text-xs text-gray-500 dark:text-gray-500">Minimum 100 characters recommended</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed group shadow-lg shadow-gray-900/10 dark:shadow-white/10"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 dark:border-gray-900/30 border-t-white dark:border-t-gray-900 rounded-full"
            />
            Processing...
          </span>
        ) : (
          <>
            Submit Application
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
          </>
        )}
      </button>

    </form>
  );
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 dark:border-gray-800 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-sm font-medium text-gray-900 dark:text-white pr-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        >
          <ChevronDown size={14} className="text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProgramCard({ program, index }: { program: InternshipProgram; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/5 dark:hover:shadow-black/20"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300">
          {program.icon}
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
            {program.level}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${
            program.type === 'Paid' 
              ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900'
              : 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900'
          }`}>
            {program.type}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
        {program.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
        {program.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {program.skills.map(skill => (
          <span
            key={skill}
            className="px-2 py-0.5 text-[11px] rounded-md bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} strokeWidth={1.5} />
            {program.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} strokeWidth={1.5} />
            {program.spots} spots
          </span>
        </div>
        <Link
          href="#apply"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-gray-900 dark:text-white flex items-center gap-1"
        >
          Apply <ArrowUpRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800"
    >
      <Quote size={24} className="text-gray-200 dark:text-gray-800 mb-4" strokeWidth={1.5} />
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.role} at {testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page Component ────────────────────────────────────────────────────────────


export default function Internship() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-8 px-4 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Now Accepting Applications for 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]"
          >
            Launch Your Career
            <span className="block text-gray-400 dark:text-gray-600 mt-2">
              With Purpose
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10"
          >
            Join industry-leading engineers, designers, and researchers. Work on production systems 
            that serve millions. Get mentored by the best. Graduate with a portfolio that opens doors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg shadow-gray-900/10 dark:shadow-white/10"
            >
              Start Your Application
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium text-sm border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-12 px-4 border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs Section ── */}
      <section id="programs" className="py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-4 block">
              Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Find Your Path
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              Six specialized tracks designed by industry leaders. Each program combines 
              theoretical depth with hands-on production experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {internshipPrograms.map((program, index) => (
              <ProgramCard key={program.title} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section id="benefits" className="py-24 lg:py-32 px-4 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div {...fadeUp} className="lg:sticky lg:top-32">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-4 block">
                Why Spurvance
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.15]">
                More Than
                <span className="block text-gray-400 dark:text-gray-600">an Internship</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                We believe the best way to learn is by building. That's why every intern 
                ships production code, receives dedicated mentorship, and graduates with 
                a portfolio that stands out in any hiring process.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" strokeWidth={2} />
                <span>No unpaid labor — all work is meaningful and mentored</span>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-4 text-gray-700 dark:text-gray-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section id="testimonials" className="py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-4 block">
              Alumni Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Where They Are Now
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              Our alumni have gone on to build products at the world's most innovative companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section id="faq" className="py-24 lg:py-32 px-4 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-4 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              FAQ
            </h2>
          </motion.div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 px-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="py-24 lg:py-32 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-4 block">
              Apply
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Start Your Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              Applications are reviewed on a rolling basis. We encourage you to apply early 
              as spots fill quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <ApplicationForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}