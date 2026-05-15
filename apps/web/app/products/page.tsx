/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Zap, 
  Globe, 
  ArrowRight, 
  Sparkles,
  MessageCircle,
  Cpu,
  Database,
  Cloud,
  Eye,
  EyeOff,
  Clock,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const ProductsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const natFeatures = [
    { icon: Lock, text: 'End-to-End Encrypted' },
    { icon: Shield, text: 'Open Source & Audited' },
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Globe, text: 'Made in Pakistan' }
  ];

  const aiFeatures = [
    { icon: Cpu, text: 'Local AI Processing' },
    { icon: Database, text: 'Privacy-First Architecture' },
    { icon: Cloud, text: 'On-Premise Deployment' },
    { icon: Shield, text: 'Data Sovereignty' }
  ];

  return (
    <main className="bg-white dark:bg-gray-900 overflow-hidden">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <motion.div 
          style={{ opacity, y }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-mono text-blue-600 dark:text-blue-400">OUR PRODUCTS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                Built for Privacy.
                <span className="block text-blue-600 dark:text-blue-400"> Built for Freedom.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Open-source products that put you in control of your data. 
                No surveillance. No backdoors. Just pure privacy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* NAT Chat Product - Featured */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3" />
                PREVIEW LAUNCHING SOON
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  NAT Chat
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Pakistan's first open-source, end-to-end encrypted messaging app. 
                Secure communication for the Muslim Ummah and freedom lovers worldwide.
              </p>

              <div className="space-y-3 mb-8">
                {natFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products/nat"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://github.com/spurvance/nat"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-900 dark:hover:border-white transition-colors"
                >
                  View on GitHub
                </Link>
              </div>
            </motion.div>

            {/* Right - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
                {/* Mock Chat Interface */}
                <div className="bg-gray-950 rounded-lg overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gray-900 px-4 py-3 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Encrypted Chat</div>
                        <div className="text-xs text-gray-400">End-to-end encrypted</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 min-h-[300px]">
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-lg px-3 py-2 max-w-[70%]">
                        <p className="text-sm text-gray-200">This message is encrypted</p>
                        <span className="text-xs text-gray-500 mt-1 block">Locked 🔒</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-600 rounded-lg px-3 py-2 max-w-[70%]">
                        <p className="text-sm text-white">Privacy first communication</p>
                        <span className="text-xs text-blue-200 mt-1 block">Delivered 🔒</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-lg px-3 py-2 max-w-[70%]">
                        <p className="text-sm text-gray-200">No surveillance. No tracking.</p>
                        <span className="text-xs text-gray-500 mt-1 block">Read 🔒</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="bg-gray-900 px-4 py-3 border-t border-gray-800">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="flex-1 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-blue-600"
                        disabled
                      />
                      <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium text-white opacity-50">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Coming Soon Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Preview Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Platform - Blur/Coming Soon */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800/30 relative">
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - AI Platform Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-6">
                <Clock className="w-3 h-3" />
                UNDER PRE-DEVELOPMENT
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  AI Platform
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Privacy-first artificial intelligence platform with local processing. 
                Your data stays with you — always.
              </p>

              <div className="space-y-3 mb-8">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-medium cursor-not-allowed rounded-md">
                  Notify Me When Ready
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right - Blurred Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative group">
                {/* Blur Effect */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/30 dark:bg-gray-900/50 z-10 flex items-center justify-center rounded-2xl">
                  <div className="text-center p-6">
                    <EyeOff className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Preview Under Development</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Coming Q3 2026</p>
                  </div>
                </div>
                
                {/* Content (Blurred) */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 opacity-50">
                  <div className="bg-gray-950 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Cpu className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="h-5 w-32 bg-gray-700 rounded"></div>
                        <div className="h-3 w-24 bg-gray-800 rounded mt-1"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-20 bg-gray-800 rounded-lg"></div>
                      <div className="h-10 bg-gray-800 rounded-lg"></div>
                      <div className="h-10 bg-gray-800 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                    Pre-Development
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Source Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                100% Open Source. Forever.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                All our products are open source. No hidden agendas. No backdoors. 
                Just transparent, auditable code that anyone can inspect.
              </p>
              <Link
                href="https://github.com/spurvance"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
              >
                Explore on GitHub
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
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
    </main>
  );
};

export default ProductsPage;