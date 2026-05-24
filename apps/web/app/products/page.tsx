/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Metadata } from 'next';
import { 
  Shield, 
  Lock, 
  Zap, 
  Globe, 
  ArrowRight, 
  Sparkles,
  MessageCircle,
  Cpu,
  EyeOff,
  Clock,
  CheckCircle,
  ChevronRight,
  Mail
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Products | Spurvance Labs | Open Source Privacy Tools",
  description: "NAT Chat - Pakistan's first end-to-end encrypted messaging app. Privacy-first, open-source communication platform. AI Platform coming soon.",
  keywords: [
    "encrypted messaging",
    "privacy",
    "open source",
    "NAT Chat",
    "secure communication",
    "Pakistan",
    "AI platform"
  ],
  openGraph: {
    title: "Products | Spurvance Labs | Open Source Privacy Tools",
    description: "NAT Chat - End-to-end encrypted messaging. Privacy-first, open-source communication platform.",
    type: "website",
    url: "https://spurvancelabs.com/products",
    images: [
      {
        url: "https://spurvancelabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spurvance Labs Products",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Spurvance Labs | Open Source Privacy Tools",
    description: "NAT Chat - End-to-end encrypted messaging. Privacy-first, open-source communication.",
  },
};

'use client';

const ProductsPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const features = [
    { icon: Lock, text: 'End-to-End Encrypted' },
    { icon: Shield, text: 'Open Source & Audited' },
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Globe, text: 'Made in Pakistan' }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <main className="bg-black min-h-screen">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        
        <motion.div 
          style={{ opacity, y }}
          className="relative max-w-6xl mx-auto px-6 py-24"
        >
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono text-blue-400 tracking-wider">PRODUCTS</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
                Built for Privacy.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Built for Freedom.
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Open-source products that put you in control of your data. 
                No surveillance. No backdoors. Just pure privacy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* NAT Chat Product */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeRight}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3" />
                PREVIEW SOON
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-10 h-10 text-blue-400" />
                <h2 className="text-4xl font-bold text-white">NAT Chat</h2>
              </div>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Pakistan's first open-source, end-to-end encrypted messaging app. 
                Secure communication for everyone.
              </p>

              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <feature.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products/nat"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:gap-3"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="https://github.com/spurvance/nat"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 text-sm font-medium rounded-lg transition-all duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Preview Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeLeft}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 p-5 shadow-2xl">
                <div className="bg-black rounded-xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="px-4 py-3 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Secure Chat</div>
                        <div className="text-xs text-gray-500">End-to-end encrypted</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Messages */}
                  <div className="p-4 space-y-3 min-h-[280px]">
                    <div className="flex justify-start">
                      <div className="bg-gray-900 rounded-lg px-3 py-2 max-w-[75%]">
                        <p className="text-sm text-gray-200">This message is encrypted</p>
                        <span className="text-xs text-gray-600 mt-1 block">🔒 Locked</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-600 rounded-lg px-3 py-2 max-w-[75%]">
                        <p className="text-sm text-white">Privacy first communication</p>
                        <span className="text-xs text-blue-300 mt-1 block">✓ Delivered</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-900 rounded-lg px-3 py-2 max-w-[75%]">
                        <p className="text-sm text-gray-200">No tracking. No surveillance.</p>
                        <span className="text-xs text-gray-600 mt-1 block">✓ Read</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input */}
                  <div className="px-4 py-3 border-t border-gray-800">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="flex-1 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-blue-600"
                        disabled
                      />
                      <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium text-white opacity-60 cursor-not-allowed">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Preview Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Platform - Coming Soon */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeRight}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-6">
                <Clock className="w-3 h-3" />
                UNDER DEVELOPMENT
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-10 h-10 text-purple-400" />
                <h2 className="text-4xl font-bold text-white">AI Platform</h2>
              </div>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Privacy-first AI with local processing. Your data stays with you — always.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Cpu, text: 'Local AI Processing' },
                  { icon: Shield, text: 'Privacy-First Architecture' },
                  { icon: Globe, text: 'Data Sovereignty' }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <feature.icon className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed"
              >
                <Mail className="w-4 h-4" />
                Notify Me
              </button>
            </motion.div>

            {/* Right Side - Blurred Preview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeLeft}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <EyeOff className="w-10 h-10 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Preview Under Development</p>
                    <p className="text-xs text-gray-600 mt-1">Coming 2026</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 opacity-40">
                  <div className="bg-black rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Cpu className="w-8 h-8 text-purple-400" />
                      <div className="h-5 w-32 bg-gray-800 rounded"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-24 bg-gray-900 rounded-lg"></div>
                      <div className="h-12 bg-gray-900 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Source Commitment */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-white mb-3">
              100% Open Source. Forever.
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              All our products are open source. No hidden agendas. No backdoors. 
              Just transparent, auditable code that anyone can inspect.
            </p>
            <Link
              href="https://github.com/spurvance"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-200 hover:gap-3"
            >
              Explore on GitHub
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;