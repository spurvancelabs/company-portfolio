/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import {
  Heart,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Moon,
  Sun,
  Sparkles,
  ExternalLink,
  Zap,
  Code2,
  GraduationCap,
  Briefcase,
  Mail,
  Home,
  Info,
  FolderOpen,
  Phone
} from 'lucide-react';

// ========== TYPES ==========
interface DropdownItem {
  name: string;
  description: string;
  path: string;
  badge?: string | null;
  icon?: React.ReactNode;
}

interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdown?: DropdownItem[];
  icon?: React.ReactNode;
}

// ========== CONSTANTS ==========
const productsDropdown: DropdownItem[] = [
  {
    name: 'NAT',
    description: 'Secure encrypted messaging for teams',
    path: '/products/nat',
    badge: 'V1',
    icon: <Zap size={16} strokeWidth={1.5} />,
  },
];

const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: <Home size={16} strokeWidth={1.5} /> },
  { name: 'About', path: '/about', icon: <Info size={16} strokeWidth={1.5} /> },
  { name: 'Products', path: '#', hasDropdown: true, dropdown: productsDropdown, icon: <FolderOpen size={16} strokeWidth={1.5} /> },
  { name: 'Services', path: '/services', icon: <Briefcase size={16} strokeWidth={1.5} /> },
  { name: 'Courses', path: '/cources', icon: <GraduationCap size={16} strokeWidth={1.5} /> },
  { name: 'Internships', path: '/internship', icon: <Zap size={16} strokeWidth={1.5} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={16} strokeWidth={1.5} /> },
];

// ========== DARK MODE HOOK ==========
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDark(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newValue;
    });
  }, []);

  return { isDark, toggleDarkMode, mounted };
};

// ========== DESKTOP DROPDOWN ==========
const DesktopDropdown: React.FC<{ items: DropdownItem[]; onClose: () => void }> = ({ items, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-0 mt-2 w-80"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl shadow-black/10 dark:shadow-black/40 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden backdrop-blur-xl">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
            Our Products
          </span>
        </div>

        <div className="p-2">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <Link
                href={item.path}
                className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
                onClick={onClose}
              >
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
          <Link
            href="/products"
            className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            onClick={onClose}
          >
            <span className="font-medium">View all products</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ========== MOBILE DROPDOWN ==========
const MobileDropdown: React.FC<{ items: DropdownItem[]; onClose: () => void }> = ({ items, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="pl-4 pr-2 py-2 space-y-1">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
            onClick={onClose}
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.name}
                </span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

// ========== MAIN NAVBAR ==========
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleDarkMode, mounted } = useDarkMode();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Track scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(prev => prev === itemName ? null : itemName);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="w-32 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="hidden lg:flex items-center gap-6">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-16 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </nav>
    );
  }
  const handleDropdownEnter = (itemName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180); // small delay
  };
  return (
    <>
      {/* Main Navbar */}
      {/* <TopBar /> */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm shadow-black/5'
          : 'bg-white/50 dark:bg-gray-950/50 backdrop-blur-md border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Logo
              size="md"
              showTagline={false}
            />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1" ref={dropdownRef}>
              <div className="flex items-center gap-0.5">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.hasDropdown && handleDropdownEnter(item.name)
                    }
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5
          ${activeDropdown === item.name
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-900/20'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                          }`}
                      >
                        {item.name}

                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 relative group
          ${pathname === item.path
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    <AnimatePresence>
                      {item.hasDropdown &&
                        activeDropdown === item.name &&
                        item.dropdown && (
                          <DesktopDropdown
                            items={item.dropdown}
                            onClose={() => setActiveDropdown(null)}
                          />
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1.5">
              {/* Donate Button */}
              <Link
                href="/donate"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                <Heart className="w-3.5 h-3.5" fill="currentColor" />
                <span>Donate</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 lg:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                <Logo />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {item.hasDropdown ? (
                      <div className="mb-1">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 dark:text-gray-500">{item.icon}</span>
                            {item.name}
                          </div>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && item.dropdown && (
                            <MobileDropdown items={item.dropdown} onClose={() => setIsMenuOpen(false)} />
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-colors
                          ${pathname === item.path
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className={`${pathname === item.path ? 'text-indigo-500' : 'text-gray-400 dark:text-gray-500'}`}>
                          {item.icon}
                        </span>
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Support Our Mission
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;