/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  Shield,
  Lock,
  Globe,
  Sparkles,
  Users,
  MessageCircle,
  ChevronRight,
  Mail,
  Send,
  Clock3,
  CheckCircle2,
  Layers3,
  Zap,
  X,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "NAT Chat | Secure Encrypted Messaging | Spurvance Labs",
  description: "NAT Chat - Pakistan's first open-source, end-to-end encrypted messaging platform. Privacy-first communication. Join the waitlist for preview access.",
  keywords: [
    "NAT Chat",
    "encrypted messaging",
    "secure communication",
    "privacy",
    "open source",
    "Pakistan",
    "messaging app"
  ],
  openGraph: {
    title: "NAT Chat | Secure Encrypted Messaging | Spurvance Labs",
    description: "Pakistan's first open-source, end-to-end encrypted messaging platform. Privacy-first communication.",
    type: "website",
    url: "https://spurvancelabs.com/products/nat",
    images: [
      {
        url: "https://spurvancelabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NAT Chat - Secure Messaging",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAT Chat | Secure Encrypted Messaging | Spurvance Labs",
    description: "Pakistan's first open-source, end-to-end encrypted messaging platform.",
  },
};

const WEB3FORMS_ACCESS_KEY =
  '7bee7d3e-2c37-475c-b80a-a92f8b18633b';

const features = [
  {
    icon: Shield,
    title: 'Privacy-First',
    description:
      'Built around encrypted communication and minimal data collection.',
  },
  {
    icon: Globe,
    title: 'Open Ecosystem',
    description:
      'Designed for interoperability, transparency, and community-driven development.',
  },
  {
    icon: Zap,
    title: 'Modern Messaging',
    description:
      'Fast, lightweight messaging experience with scalable infrastructure.',
  },
  {
    icon: Layers3,
    title: 'Community Driven',
    description:
      'Early supporters help shape features, priorities, and integrations.',
  },
];

const faqs = [
  {
    q: 'What is NAT?',
    a: 'NAT is Spurvance Labs’ communication platform initiative focused on secure and modern messaging experiences.',
  },
  {
    q: 'Is the platform available yet?',
    a: 'We are currently preparing preview access and infrastructure partnerships before the public launch.',
  },
  {
    q: 'Why join the waitlist?',
    a: 'Early members get preview access, launch updates, and invitations to future beta programs.',
  },
  {
    q: 'Will it support mobile devices?',
    a: 'Yes. The platform is being designed for modern mobile and desktop experiences.',
  },
];

'use client';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) return;

    setError('');
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append(
        'access_key',
        WEB3FORMS_ACCESS_KEY
      );

      formData.append('email', email);

      formData.append(
        'subject',
        'New NAT Waitlist Signup'
      );

      formData.append(
        'from_name',
        'Spurvance Labs Waitlist'
      );

      formData.append(
        'message',
        `A new user joined the NAT waitlist.\n\nEmail: ${email}`
      );

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!data.success) {
        setError(
          data.message ||
            'Something went wrong. Please try again.'
        );
        return;
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(
        'Network error. Please check your internet connection.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/70 backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Spurvance Labs Communication Initiative
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              The Future of
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Secure Messaging
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
            >
              We’re building the next phase of NAT with a stronger
              infrastructure strategy, privacy-first architecture,
              and community-driven development.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                {
                  value: '2.8K+',
                  label: 'Early Supporters',
                },
                {
                  value: 'Preview Soon',
                  label: 'Beta Access',
                },
                {
                  value: 'Privacy First',
                  label: 'Core Philosophy',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <div className="text-lg font-semibold text-white sm:text-2xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mx-auto mt-14 max-w-xl"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

                        <input
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          placeholder="Enter your email address"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 pl-11 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isLoading ? (
                          'Joining...'
                        ) : (
                          <>
                            Join Waitlist
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {error && (
                      <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        <X className="h-4 w-4" />
                        {error}
                      </div>
                    )}

                    <p className="mt-4 text-center text-xs text-white/35">
                      No spam. Product updates only.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center backdrop-blur-2xl"
                  >
                    <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-emerald-400" />

                    <h3 className="text-2xl font-semibold text-white">
                      You're on the list
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Thanks for joining the NAT waitlist.
                      We’ll notify you about preview access
                      and future updates.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}