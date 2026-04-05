/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Zap, Globe } from 'lucide-react';

const Products = () => {
  const features = [
    { icon: Lock, text: 'End-to-end encrypted' },
    { icon: Shield, text: 'Open source & audited' },
    { icon: Zap, text: 'Lightning fast' },
    { icon: Globe, text: 'Made in Pakistan' }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">FLAGSHIP PRODUCT</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              NAT — Secure Chat for Pakistan
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pakistan's first open-source, encrypted messaging application built for privacy and speed.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Image/Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8">
              <div className="bg-gray-900 rounded-xl p-4 shadow-2xl">
                <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
                  {/* Placeholder for actual app screenshot */}
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-400 text-sm">App Preview</p>
                    <p className="text-gray-500 text-xs mt-2">Screenshot coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Privacy-first communication
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              NAT (National Authentified Telegrams) is designed with privacy at its core. No data collection, 
              no tracking, just secure conversations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/products/nat"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
            >
              Learn more about NAT
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Coming Soon Teaser */}
        <div className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <span className="text-xs font-mono text-gray-500">COMING SOON</span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
              More products in development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Spurvance Cloud • Developer Tools • Enterprise Suite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;