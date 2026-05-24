/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight, Zap, PartyPopper } from 'lucide-react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Check localStorage on mount for dismissed state
  useEffect(() => {
    const dismissed = localStorage.getItem('topbar-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const now = Date.now();
      // Show again after 24 hours
      if (now - dismissedTime < 24 * 60 * 60 * 1000) {
        setIsVisible(false);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('topbar-dismissed', Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          {/* Background with animated gradient */}
          <div className="relative bg-gray-950 border-b border-white/5">
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600"
                animate={{
                  backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : ['0% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />
              {/* Subtle noise texture overlay */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatDelay: 2 }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-center h-11 sm:h-10">
                <div className="flex items-center gap-3">
                  {/* Animated icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <PartyPopper className="w-4 h-4 text-yellow-300" />
                  </motion.div>

                  {/* Text content */}
                  <span className="text-[13px] sm:text-sm text-white/90 font-medium">
                    Pakistan's First Open Source Chat App{' '}
                    <span className="font-bold text-white">"NAT"</span>{' '}
                    is now live!
                  </span>
                </div>

                {/* Dismiss button */}
                <button
                  onClick={handleDismiss}
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Dismiss announcement"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopBar;