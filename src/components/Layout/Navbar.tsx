/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Heart, Menu, X, ArrowRight, ChevronDown, Sparkles, User, Settings, LogOut, Search, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../Logo";
import TopBar from './TopBar';

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
  label: string;
  hasDropdown?: boolean;
  dropdown?: DropdownItem[];
}


// ========== CONSTANTS ==========
const productsDropdown: DropdownItem[] = [
  {
    name: 'AI Platform',
    description: 'Advanced AI development suite',
    path: '/products/ai-platform',
    badge: 'New',
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions',
    path: '/products/cloud',
    badge: 'Popular',
  },
  {
    name: 'Dev Tools',
    description: 'Developer productivity suite',
    path: '/products/dev-tools',
  },
  {
    name: 'Enterprise Suite',
    description: 'Complete enterprise solution',
    path: '/products/enterprise',
    badge: 'Enterprise',
  }
];

const resourcesDropdown: DropdownItem[] = [
  {
    name: 'Documentation',
    description: 'Complete API references',
    path: '/docs'
  },
  {
    name: 'Tutorials',
    description: 'Step-by-step guides',
    path: '/tutorials'
  },
  {
    name: 'Blog',
    description: 'Latest updates & insights',
    path: '/blog'
  },
  {
    name: 'Community Forum',
    description: 'Connect with developers',
    path: '/forum'
  }
];

const navItems: NavItem[] = [
  {
    name: 'Home',
    path: '/',
    label: 'Navigate to Spurvance Labs homepage'
  },
  {
    name: 'Products',
    path: '#',
    label: 'Explore our products',
    hasDropdown: true,
    dropdown: productsDropdown
  },
  {
    name: 'Solutions',
    path: '/solutions',
    label: 'Discover solutions'
  },
  {
    name: 'Resources',
    path: '#',
    label: 'Access resources',
    hasDropdown: true,
    dropdown: resourcesDropdown
  },
  {
    name: 'Pricing',
    path: '/pricing',
    label: 'View pricing plans'
  },
  {
    name: 'Contact',
    path: '/contact',
    label: 'Contact Spurvance Labs team'
  }
];




// ========== COMPONENTS ==========
interface DropdownProps {
  items: DropdownItem[];
  onClose: () => void;
  isMobile?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onClose, isMobile = false }) => {
  const handleItemClick = useCallback(() => {
    if (isMobile) {
      onClose();
    }
  }, [isMobile, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`${
        isMobile 
          ? 'mt-2 pl-6 w-full' 
          : 'absolute top-full left-0 mt-2 w-full min-w-[280px] z-50'
      }`}
    >
      <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ${
        isMobile ? '' : 'backdrop-blur-xl'
      }`}>
        <div className="p-4">
          <div className="grid gap-2">
            {items.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                onClick={handleItemClick}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        item.badge === 'New' 
                          ? 'bg-green-100 text-green-800' 
                          : item.badge === 'Popular' 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};



// ========== MAIN NAVBAR COMPONENT ==========
const Navbar: React.FC = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  // Refs
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      try {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      } catch (error) {
        console.error('Error handling click outside:', error);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll effect with error handling
  useEffect(() => {
    const handleScroll = () => {
      try {
        setScrolled(window.scrollY > 10);
      } catch (error) {
        console.error('Error handling scroll:', error);
        setScrolled(false);
      }
    };

    try {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } catch (error) {
      console.error('Error adding scroll listener:', error);
    }

    return () => {
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (error) {
        console.error('Error removing scroll listener:', error);
      }
    };
  }, []);

  // Reset state on route change
  useEffect(() => {
    try {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } catch (error) {
      console.error('Error resetting state on route change:', error);
    }
  }, [location.pathname]);

  // Toggle functions with error handling
  const toggleMenu = useCallback(() => {
    try {
      setIsMenuOpen(prev => !prev);
      setActiveDropdown(null);
    } catch (error) {
      console.error('Error toggling menu:', error);
      setIsMenuOpen(false);
    }
  }, []);

  const toggleDropdown = useCallback((itemName: string) => {
    try {
      setActiveDropdown(prev => prev === itemName ? null : itemName);
    } catch (error) {
      console.error('Error toggling dropdown:', error);
      setActiveDropdown(null);
    }
  }, []);


  // Mobile menu variants for Framer Motion
  const mobileMenuVariants = {
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    }
  };

  // Navbar height variants for smooth animation
  const navbarHeightVariants = {
    normal: { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
    scrolled: { paddingTop: '0.5rem', paddingBottom: '0.5rem' }
  };

  // Error fallback UI
  if (hasError) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <p className="text-sm text-gray-600">Navigation temporarily unavailable</p>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <TopBar />
      
      <motion.nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-7 left-0 right-0 z-50 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
            : 'bg-white/90 backdrop-blur-lg border-b border-gray-200/30'
        }`}
        style={{
          margin: '0 auto',
          maxWidth: 'calc(100% - 2rem)',
          borderRadius: scrolled ? '1rem' : '0.75rem',
          marginTop: scrolled ? '0.5rem' : '1rem'
        }}
        animate={scrolled ? 'scrolled' : 'normal'}
        variants={navbarHeightVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout: Logo Left | Links Center | CTA Right */}
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo with proper spacing */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Logo size="lg" showTagline />
              <motion.span 
                className="hidden lg:block ml-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
              </motion.span>
            </motion.div>

            {/* Center: Navigation Links (hidden on mobile) */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8" ref={dropdownRef}>
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeDropdown === item.name
                            ? 'text-blue-600 bg-blue-50/50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                        }`}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                    ) : (
                      <NavLink
                        to={item.path}
                        aria-label={item.label}
                        className={({ isActive }) => `
                          relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                          ${isActive
                            ? 'text-blue-600 bg-blue-50/50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                          }
                        `}
                        end
                      >
                        {({ isActive }) => (
                          <>
                            <span>{item.name}</span>
                            {isActive && (
                              <motion.div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/2"
                                layoutId="activeIndicator"
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    )}

                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.hasDropdown && activeDropdown === item.name && item.dropdown && (
                        <Dropdown
                          items={item.dropdown}
                          onClose={() => setActiveDropdown(null)}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Buttons & User Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Action Buttons */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/donate"
                  className="group flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-200"
                  aria-label="Donate to Spurvance Labs"
                >
                  <Heart className="w-4 h-4" />
                  <span>Donate</span>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.span>
                </NavLink>
              </motion.div>

            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/30 transition-colors focus:outline-none"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMenuOpen ? 'open' : 'closed'}
                className="relative w-5 h-5"
              >
                <Menu className="absolute inset-0" />
                <X className="absolute inset-0" />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            id="mobile-menu"
            className="lg:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate={isMenuOpen ? 'open' : 'closed'}
            aria-hidden={!isMenuOpen}
          >
            <div className="px-4 pt-2 pb-8 space-y-1 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl mt-2">
              {navItems.map((item) => (
                <div key={`mobile-${item.name}`} className="space-y-1">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/30 transition-colors"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && item.dropdown && (
                          <Dropdown
                            items={item.dropdown}
                            onClose={() => setActiveDropdown(null)}
                            isMobile={true}
                          />
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200
                        ${isActive
                          ? 'text-blue-600 bg-blue-50/50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200/30 mt-4">
                <div className="grid grid-cols-2 gap-3 px-4">

                  <NavLink
                    to="/donate"
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">Donate</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-24" aria-hidden="true" />
    </>
  );
};

// Error Boundary for Navbar
export class NavbarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Navbar error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-blue-600">Spurvance Labs</div>
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Reload Navigation
              </button>
            </div>
          </div>
        </nav>
      );
    }

    return this.props.children;
  }
}

export default function NavbarWithErrorBoundary() {
  return (
    <NavbarErrorBoundary>
      <Navbar />
    </NavbarErrorBoundary>
  );
}