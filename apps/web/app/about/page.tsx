/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield,
  Code,
  Heart,
  Globe,
  Lock,
  ShieldCheck,
  ArrowRight,
  Quote,
  Sparkles,
  Cpu,
  Users,
  Eye,
  Zap,
  Target,
  Award,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const targetRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      // Hero parallax elements
      gsap.fromTo('.hero-element',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
          }
        }
      );

      // Timeline animations
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          }
        }
      );

      // Value cards hover animations
      document.querySelectorAll('.value-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'End-to-end encryption. Zero surveillance. Complete data sovereignty for every user.',
      color: 'blue',
      stat: '100% Encrypted',
      statIcon: Shield
    },
    {
      icon: ShieldCheck,
      title: 'Open Source',
      description: 'Transparent code. Community audited. No hidden backdoors or proprietary lock-in.',
      color: 'green',
      stat: '100% Open',
      statIcon: Code
    },
    {
      icon: Globe,
      title: 'For the Ummah',
      description: 'Digital freedom for Muslims and ordinary people worldwide, without compromise.',
      color: 'purple',
      stat: 'Global Reach',
      statIcon: Users
    },
    {
      icon: Heart,
      title: 'Made in Pakistan',
      description: 'Built locally. Solving local problems. Serving the global community with pride.',
      color: 'red',
      stat: 'Local First',
      statIcon: Award
    }
  ];

  const achievements = [
    { number: '5000+', label: 'Active Users', icon: Users },
    { number: '100%', label: 'Privacy Focused', icon: Shield },
    { number: '24/7', label: 'Support', icon: Zap },
    { number: '50+', label: 'Enterprise Clients', icon: Target }
  ];

  const connectWithFounder = () => {
    window.location.href =
      "mailto:abdullahkhaver@spurvnacelabs.com?subject=Connect%20with%20Founder%20-%20Spurvance%20Labs&body=Hi%20Muhammad%20Abdullah%20Khaver%2C%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding...";
  };
  return (
    <main ref={targetRef} className="bg-white dark:bg-gray-900 overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-30" />

        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          ref={heroRef}
          style={{ opacity, y }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-element"
            >
              <span className="inline-flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3" />
                OUR JOURNEY
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mt-6 mb-6 leading-[1.2] tracking-tight">
                From Services to
                <span className="block text-blue-600 dark:text-blue-400 mt-2"> Digital Freedom</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-element space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <p>
                We started as <span className="font-semibold text-gray-900 dark:text-white">IT-Khaver</span> in 2020 — a service-based company
                helping businesses navigate their technology needs with precision and care.
              </p>
              <p>
                In <span className="font-semibold text-gray-900 dark:text-white">2025</span>, we evolved into <span className="font-semibold text-gray-900 dark:text-white">Spurvance Labs</span>,
                embracing a hybrid model that seamlessly blends enterprise services with innovative in-house products.
              </p>
              <div className="pt-4">
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Our mission is bold but clear:
                </p>
                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 dark:text-gray-300 text-lg">
                  "To build privacy-first software that protects individuals, businesses, and communities from digital surveillance through encrypted communication and secure infrastructure."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity + Founder Section */}
      {/* Identity + Founder Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

          {/* Company Definition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6 leading-tight">
              Spurvance Labs is a <span className="text-blue-600 dark:text-blue-400">Privacy-First</span> Software Company
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                We design and build secure digital systems focused on privacy, encryption,
                and open-source infrastructure. Our goal is to give individuals and businesses
                full control over their digital presence and data sovereignty.
              </p>
              <p>
                Unlike traditional IT service companies, we are transitioning into a
                product-driven engineering lab — building tools for communication,
                cybersecurity, and decentralized infrastructure that puts users first.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {['Privacy-first architecture', 'Open-source development', 'Hybrid services + products', 'Digital sovereignty focus'].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Redesigned Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Main Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">

              {/* Top accent bar */}
              <div className="h-1.5 bg-blue-600" />

              {/* Card Content */}
              <div className="p-8">
                {/* Header with image and name */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    {/* Ring effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-600 blur-md opacity-60 animate-pulse" />
                    <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-lg">
                      <img
                        src="/ceo.jpeg"
                        alt="Muhammad Abdullah Khaver"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Muhammad Abdullah Khaver
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">
                      Founder & CEO
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I founded Spurvance Labs to build privacy-first, secure, and open-source digital systems.
                    My focus is on creating technology that protects users from surveillance and gives complete
                    control over their data and communication.
                  </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">5+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Privacy Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">Open</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Source</div>
                  </div>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    Security
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    Infrastructure
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    Product Strategy
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    Open Source
                  </span>
                </div>

                {/* Contact button */}
                <button
                  onClick={connectWithFounder}
                  className=" cursor-pointer w-full mt-6 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Connect with Founder</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div ref={timelineRef}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
                  <Target className="w-3 h-3" />
                  OUR EVOLUTION
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-8">
                  The Journey to Digital Freedom
                </h2>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-gray-300 dark:before:bg-gray-700 ml-3">
                <motion.div
                  className="timeline-item relative pl-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-900" />
                  <div className="text-sm font-mono text-gray-500 mb-1">2020</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">IT-Khaver Founded</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Service-based company helping businesses with software solutions and IT consulting.</p>
                </motion.div>

                <motion.div
                  className="timeline-item relative pl-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900" />
                  <div className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-1">2025 • EVOLUTION</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Spurvance Labs</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Hybrid model — Services + Products for Digital Pakistan and beyond.</p>
                </motion.div>

                <motion.div
                  className="timeline-item relative pl-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-400 border-4 border-white dark:border-gray-900" />
                  <div className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-1">PRESENT & FUTURE</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Products for Freedom</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Building encrypted tools to protect privacy and ensure digital sovereignty for all.</p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6 opacity-60" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                "We realized that service alone wasn't enough. The Muslim world needs
                its own digital infrastructure — secure, private, and free from surveillance."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Spurvance Labs Team</p>
                  <p className="text-xs text-gray-500">Founding Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Improved Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
              <Heart className="w-3 h-3" />
              CORE VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              These principles guide every product we build and every service we deliver.
            </p>
          </motion.div>

          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="value-card group relative bg-white dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
              >
                {/* Icon with animated background */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {value.description}
                </p>

                {/* Stat badge */}
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-full">
                  <value.statIcon className="w-3 h-3" />
                  <span>{value.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                <Cpu className="w-3 h-3" />
                OUR OFFERINGS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 leading-tight">
                Products & Services for Digital Sovereignty
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Shield, text: 'Encrypted communication tools that protect your privacy', color: 'text-blue-400' },
                  { icon: Code, text: 'Enterprise software development for businesses', color: 'text-blue-400' },
                  { icon: Globe, text: 'Cloud infrastructure and DevOps consulting', color: 'text-blue-400' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-500/30 transition-colors">
                      <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-all group"
              >
                <span>Explore our products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: '100%', label: 'Open Source', icon: Code },
                { value: 'End-to-End', label: 'Encryption', icon: Shield },
                { value: 'Zero', label: 'Surveillance', icon: Eye },
                { value: 'Made in', label: 'Pakistan', icon: Award }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 hover:bg-white/10 p-5 rounded-xl text-center transition-all duration-300 border border-white/10"
                >
                  <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-blue-400">{item.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full mb-6">
              <Sparkles className="w-3 h-3" />
              JOIN THE MOVEMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Us in Building Digital Freedom
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you want to use our products, contribute to open source,
              or need enterprise solutions — we're here to help you take control of your digital future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/products/nat"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all rounded-full shadow-sm hover:shadow-md"
              >
                <span>Try NAT Chat</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-full"
              >
                <span>Work With Us</span>
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
                "@type": "Person",
                name: "Muhammad Abdullah Khaver",
              },
            },
          }),
        }}
      />
    </main>
  );
};

export default AboutPage;