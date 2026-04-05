/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import { motion } from 'framer-motion';
import { Shield, Code, Heart, Globe, Zap, Users, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: '100% Open Source',
      description: 'Transparent, auditable, and community-driven development.'
    },
    {
      icon: Heart,
      title: 'Built in Pakistan',
      description: 'Deep understanding of local infrastructure and user needs.'
    },
    {
      icon: Code,
      title: 'Modern Technology',
      description: 'React, Next.js, Node.js, Python, Go, and cloud-native architectures.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International security practices and compliance ready.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We don\'t just build — we collaborate and guide.'
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodology with continuous deployment.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-blue-600 dark:text-blue-400">WHY US</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Why Choose Spurvance Labs?
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <reason.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;