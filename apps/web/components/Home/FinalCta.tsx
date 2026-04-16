/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail,  Heart } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you want to use our products or need help building your own, 
            we're here to help.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Heart className="w-4 h-4" />
              Support Open Source
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500 dark:text-gray-500">
            <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              hello@spurvance.com
            </Link>
            <Link href="https://github.com/spurvance" target="_blank" className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
              {/* <Github className="w-3.5 h-3.5" /> */}
              GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;