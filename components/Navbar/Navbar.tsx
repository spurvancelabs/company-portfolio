/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, ArrowRight, ChevronDown, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from "framer-motion";
import TopBar from './Topbar';
import Logo from "../Logo";

// ========== TYPES ==========
interface DropdownItem {
  name: string;
  description: string;
  path: string;
  badge?: string | null;
}

interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdown?: DropdownItem[];
}

// ========== CONSTANTS ==========
const productsDropdown: DropdownItem[] = [
  {
    name: 'NAT',
    description: 'A Secure Open Source encrypted chat app',
    path: '/products/nat',
    badge: 'V1',
  },
];

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '#', hasDropdown: true, dropdown: productsDropdown },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

// ========== DARK MODE HOOK ==========
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
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

  return { isDark, toggleDarkMode };
};

// ========== DROPDOWN COMPONENT ==========
const Dropdown: React.FC<{ items: DropdownItem[]; onClose: () => void; isMobile?: boolean }> = ({ 
  items, onClose, isMobile = false 
}) => {
  const handleItemClick = useCallback(() => {
    if (isMobile) onClose();
  }, [isMobile, onClose]);

  return (
    
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.15 }}
      className={isMobile ? 'mt-1 pl-4' : 'absolute top-full left-0 mt-1 w-64'}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
              onClick={handleItemClick}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-xs font-medium rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ========== MAIN NAVBAR ==========
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(prev => prev === itemName ? null : itemName);
  };

  const mobileMenuVariants: Variants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
    <TopBar/>
      {/* Fixed Navbar */}
<nav className="fixed left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
     style={{ top: '40px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="lg" showTagline />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1" ref={dropdownRef}>
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1.5
                          ${activeDropdown === item.name
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200
                          ${pathname === item.path
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    <AnimatePresence>
                      {item.hasDropdown && activeDropdown === item.name && item.dropdown && (
                        <Dropdown items={item.dropdown} onClose={() => setActiveDropdown(null)} />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Donate Button */}
              <Link
                href="/donate"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span>Donate</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-3 space-y-1 bg-white dark:bg-gray-900">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 rounded-md hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && item.dropdown && (
                            <Dropdown items={item.dropdown} onClose={() => setActiveDropdown(null)} isMobile />
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block px-3 py-2.5 text-base font-medium rounded-md transition-colors
                          ${pathname === item.path
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Donate Button */}
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 mt-4 px-4 py-2.5 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-4 h-4" />
                  <span>Donate</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[104px]" /> 
    </>
  );
};

export default Navbar;