/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  Building2,
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa6';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: string;
  linkText?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail size={22} />,
    title: 'Email',
    details: ['info@spurvancelabs.com', 'sales@spurvancelabs.com'],
    link: 'mailto:info@spurvancelabs.com',
    linkText: 'Send us an email'
  },
  {
    icon: <Phone size={22} />,
    title: 'Phone & WhatsApp',
    details: ['+92 329 4171505', 'Mon-Fri, 9AM - 6PM PKT'],
    link: 'https://wa.me/923294171505',
    linkText: 'Message on WhatsApp'
  },
  {
    icon: <MapPin size={22} />,
    title: 'Location',
    details: ['Lahore, Pakistan', 'Remote-first, serving globally'],
  },
];

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: 'https://github.com/spurvancelabs',
    label: 'GitHub'
  },
  {
    icon: <FaXTwitter size={18} />,
    href: 'https://x.com/spurvancelabs',
    label: 'X'
  },
  {
    icon: <FaLinkedin size={18} />,
    href: 'https://linkedin.com/company/spurvancelabs',
    label: 'LinkedIn'
  },
  {
    icon: <FaInstagram size={18} />,
    href: 'https://instagram.com/spurvancelabs',
    label: 'Instagram'
  },
  {
    icon: <FaWhatsapp size={18} />,
    href: 'https://wa.me/923294171505',
    label: 'WhatsApp'
  }
];

const faqs: FAQItem[] = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond within 24 hours on business days. For urgent matters, WhatsApp is the fastest channel.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer a free 30-minute consultation to discuss your project, answer questions, and provide initial guidance — no obligation.'
  },
  {
    question: 'What timezone do you work in?',
    answer: 'We operate on Pakistan Time (PKT / UTC+5). However, we work asynchronously with clients across different timezones.'
  },
  {
    question: 'Is Spurvance Labs open source?',
    answer: 'Our products are 100% open source. For client work, you own all code — we never lock you in.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! We work with clients in Pakistan, the Middle East, North America, and Europe — fully remote.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers (local & international), Wise, and PayPal. Terms are discussed during consultation.'
  }
];

export const metadata: Metadata = {
  title: "Contact Spurvance Labs | Get in Touch",
  description: "Reach out to Spurvance Labs for DevOps, development, security, or training services. Free consultation available. Based in Lahore, Pakistan. Serving clients globally.",
  keywords: [
    "contact",
    "DevOps services",
    "software development",
    "security consulting",
    "training",
    "Pakistan",
    "consultation"
  ],
  openGraph: {
    title: "Contact Spurvance Labs | Get in Touch",
    description: "Reach out to Spurvance Labs for enterprise services. Free 30-minute consultation available.",
    type: "website",
    url: "https://spurvancelabs.com/contact",
    images: [
      {
        url: "https://spurvancelabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Spurvance Labs",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Spurvance Labs | Get in Touch",
    description: "Reach out to Spurvance Labs for enterprise services. Free 30-minute consultation available.",
  },
};

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
}

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

// ─── Form Component ────────────────────────────────────────────────────────────

'use client';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          access_key: '884ab7c4-a8d6-45a6-a68d-39a049470612',

          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,

          subject: 'New Contact Form Message',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);

        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          service: 'general',
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Failed to send message');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
          />
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
            placeholder="Ahmed Raza"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
            placeholder="ahmed@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company (Optional)
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service Interested In *
          </label>
          <select
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
          >
            <option value="general">General Inquiry</option>
            <option value="devops">DevOps & Cloud</option>
            <option value="development">Software Development</option>
            <option value="security">Security & Privacy</option>
            <option value="training">Training & Workshops</option>
            <option value="product">Product Collaboration</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-500 dark:text-gray-600">
        By submitting, you agree to our privacy policy. We'll never share your data.
      </p>
    </form>
  );
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* ── Hero Section ── */}
      <section className="relative pt-36 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-6 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900">
              <MessageCircle size={13} />
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Let's talk.
            <span className="block text-blue-600 dark:text-blue-400"> We're here to help.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Whether you have a project in mind, need technical advice, or just want to learn more
            about our work — reach out. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Info & Form ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.link && (
                    <Link
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
                    >
                      {info.linkText}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              ))}

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quick Response Promise ── */}
      <section className="py-16 px-4 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Fast Response</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Within 24 hours</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Free Consultation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">30-min discovery call</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Remote-First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Serving clients worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know before reaching out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA - Open Source ── */}
      <section className="py-16 px-4   dark:from-blue-700 dark:to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Building2 className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Prefer open source collaboration?
            </h2>
            <p className="text-blue-100 mb-6">
              Find us on GitHub. Star our repos, report issues, or contribute code.
            </p>
            <a
              href="https://github.com/spurvancelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-blue-50 transition-all"
            >
              <FaGithub size={18} />
              Visit GitHub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
