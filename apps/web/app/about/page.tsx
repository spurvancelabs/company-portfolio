/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Code, 
  Heart, 
  Globe, 
  Lock,
  ShieldCheck,
  ArrowRight,
  Quote
} from 'lucide-react';

const AboutPage = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const values = [
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'End-to-end encryption. Zero surveillance. Complete data sovereignty.',
      color: 'blue'
    },
    {
      icon: ShieldCheck,
      title: 'Open Source',
      description: 'Transparent code. Community audited. No hidden backdoors.',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'For the Ummah',
      description: 'Digital freedom for Muslims and ordinary people worldwide.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Made in Pakistan',
      description: 'Built locally. Solving local problems. Serving globally.',
      color: 'red'
    }
  ];

  return (
    <main ref={targetRef} className="bg-white dark:bg-gray-900 overflow-hidden">
      
      {/* Hero Section - The Story */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-blue-600 dark:text-blue-400">OUR JOURNEY</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 mb-6 leading-tight">
                From Services to
                <span className="block text-blue-600 dark:text-blue-400"> Digital Freedom</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <p>
                We started as <span className="font-semibold text-gray-900 dark:text-white">IT-Khaver</span> in 2020 — a service-based company 
                helping businesses with their technology needs.
              </p>
              <p>
                In <span className="font-semibold text-gray-900 dark:text-white">2025</span>, we evolved into <span className="font-semibold text-gray-900 dark:text-white">Spurvance Labs</span>, 
                transitioning to a hybrid model that combines enterprise services with our own products.
              </p>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 pt-2">
                Our mission is bold but clear:
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 dark:text-gray-300">
                "To build privacy-first software that protects individuals, businesses, and communities from digital surveillance through encrypted communication and secure infrastructure."
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Pivot - Visual Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />
                <div className="space-y-8">
                  <div>
                    <div className="text-sm font-mono text-gray-500">2020</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">IT-Khaver</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Service-based company helping businesses with software solutions.</p>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-blue-600 dark:text-blue-400">2025 • EVOLUTION</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">Spurvance Labs</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Hybrid model — Services + Products for Digital Pakistan.</p>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-purple-600 dark:text-purple-400">PRESENT</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">Products for Freedom</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Building encrypted tools to protect privacy and ensure digital sovereignty.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-sm border border-gray-200 dark:border-gray-800"
            >
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 opacity-50" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "We realized that service alone wasn't enough. The Muslim world needs 
                its own digital infrastructure — secure, private, and free from western surveillance."
              </p>
              <p className="text-sm text-gray-500">— Spurvance Labs Founding Team</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide every product we build and every service we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-gray-50 dark:bg-gray-800/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-mono text-blue-400">OUR OFFERINGS</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Products & Services for Digital Sovereignty
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Encrypted communication tools that protect your privacy</p>
                </div>
                <div className="flex gap-3">
                  <Code className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Enterprise software development for businesses</p>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Cloud infrastructure and DevOps consulting</p>
                </div>
              </div>
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Explore our products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-400 mt-1">Open Source</div>
              </div>
              <div className="bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">End-to-End</div>
                <div className="text-sm text-gray-400 mt-1">Encryption</div>
              </div>
              <div className="bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">Zero</div>
                <div className="text-sm text-gray-400 mt-1">Surveillance</div>
              </div>
              <div className="bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">Made in</div>
                <div className="text-sm text-gray-400 mt-1">Pakistan</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Us in Building Digital Freedom
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Whether you want to use our products, contribute to open source, 
              or need enterprise solutions — we're here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/products/nat"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Try NAT Chat
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-900 dark:hover:border-white transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #1f2937 1px, transparent 1px),
            linear-gradient(to bottom, #1f2937 1px, transparent 1px);
        }
      `}</style>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      mainEntity: {
        "@type": "Organization",
        name: "Spurvance Labs",
        description:
          "A Pakistan-based privacy-first software company building encrypted tools and enterprise solutions.",
        foundingDate: "2020",
        founder: {
          "@type": "Organization",
          name: "Spurvance Labs Team",
        },
      },
    }),
  }}
/>
    </main>
  );
};
export default AboutPage;