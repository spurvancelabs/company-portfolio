/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Heart,
  Menu,
  X,
  Shield,
  ArrowRight,
  GitBranch,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Globe,
  Code,
  Package,
  Rocket,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  ExternalLink
} from 'lucide-react';
import Logo from "../Logo";

// Dropdown data structure
const productsDropdown = [
  {
    name: 'AI Platform',
    description: 'Advanced AI development suite',
    icon: <Cpu className="w-5 h-5" />,
    path: '/products/ai-platform',
    badge: 'New',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions',
    icon: <Globe className="w-5 h-5" />,
    path: '/products/cloud',
    badge: 'Popular',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Dev Tools',
    description: 'Developer productivity suite',
    icon: <Code className="w-5 h-5" />,
    path: '/products/dev-tools',
    badge: null,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Enterprise Suite',
    description: 'Complete enterprise solution',
    icon: <Package className="w-5 h-5" />,
    path: '/products/enterprise',
    badge: 'Enterprise',
    color: 'from-orange-500 to-red-500'
  }
];

const resourcesDropdown = [
  {
    name: 'Documentation',
    description: 'Complete API references',
    icon: <GitBranch className="w-5 h-5" />,
    path: '/docs'
  },
  {
    name: 'Tutorials',
    description: 'Step-by-step guides',
    icon: <Rocket className="w-5 h-5" />,
    path: '/tutorials'
  },
  {
    name: 'Blog',
    description: 'Latest updates & insights',
    icon: <MessageSquare className="w-5 h-5" />,
    path: '/blog'
  },
  {
    name: 'Community Forum',
    description: 'Connect with developers',
    icon: <Users className="w-5 h-5" />,
    path: '/forum'
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />,
      label: 'Navigate to Spurvance Labs homepage'
    },
    {
      name: 'Products',
      path: '#',
      icon: <Package className="w-4 h-4" />,
      label: 'Explore our products',
      hasDropdown: true,
      dropdown: productsDropdown
    },
    {
      name: 'Solutions',
      path: '/solutions',
      icon: <Shield className="w-4 h-4" />,
      label: 'Discover solutions'
    },
    {
      name: 'Resources',
      path: '#',
      icon: <GitBranch className="w-4 h-4" />,
      label: 'Access resources',
      hasDropdown: true,
      dropdown: resourcesDropdown
    },
    {
      name: 'Pricing',
      path: '/pricing',
      icon: <Zap className="w-4 h-4" />,
      label: 'View pricing plans'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <MessageSquare className="w-4 h-4" />,
      label: 'Contact Spurvance Labs team'
    }
  ];

  const userMenuItems = [
    { name: 'Profile', icon: <User className="w-4 h-4" />, path: '/profile' },
    { name: 'Settings', icon: <Settings className="w-4 h-4" />, path: '/settings' },
    { name: 'Sign out', icon: <LogOut className="w-4 h-4" />, path: '/logout', destructive: true }
  ];

  const renderDropdown = (items: typeof productsDropdown, isMobile = false) => (
    <div className={`${isMobile ? 'mt-2 pl-6' : 'absolute top-full left-0 mt-2'} w-full min-w-[280px]`}>
      <div className={`bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${isMobile ? '' : 'backdrop-blur-xl'}`}>
        <div className="p-4">
          <div className="grid gap-2">
            {items.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
                onClick={() => {
                  if (isMobile) setIsMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color || 'from-gray-100 to-gray-200'} group-hover:scale-110 transition-transform duration-200`}>
                  <div className="text-gray-700 group-hover:text-gray-900">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        item.badge === 'New' ? 'bg-green-100 text-green-800' :
                        item.badge === 'Popular' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
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
    </div>
  );

  return (
    <>
      {/* Floating Notifications Bar (Optional) */}
      <div className="fixed top-0 left-0 right-0 z-60 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-1.5 animate-slide-down">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>🎉 New AI Platform Launched! <a href="/products/ai-platform" className="underline font-semibold ml-1">Explore Now →</a></span>
          </span>
        </div>
      </div>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-7 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border-b border-gray-200/50 py-2'
            : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/30 py-3'
        }`}
        style={{
          transform: scrolled ? 'translateY(-4px)' : 'translateY(0)',
          margin: '0 auto',
          maxWidth: 'calc(100% - 2rem)',
          borderRadius: scrolled ? '1rem' : '0.75rem',
          marginTop: scrolled ? '0.5rem' : '1rem'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo with Animation */}
            <div className="flex items-center space-x-3 group">
              <Logo size="lg" showTagline />
              <div className="hidden lg:block relative">
                <span className="absolute -top-2 -right-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative px-2 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                      <span className="text-xs font-bold text-white">PRO</span>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4 lg:mx-8">
              <div className={`relative transition-all duration-300 ${searchOpen ? 'w-full opacity-100' : 'w-0 lg:w-full opacity-0 lg:opacity-100'}`}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation, APIs, tutorials..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded hidden lg:block">⌘K</kbd>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                        activeDropdown === item.name
                          ? 'text-blue-600 bg-blue-50/50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                      }`}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      aria-label={item.label}
                      className={({ isActive }) => `
                        relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive
                          ? 'text-blue-600 bg-blue-50/50 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                        }
                      `}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                    </NavLink>
                  )}

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    renderDropdown(item.dropdown)
                  )}
                </div>
              ))}

              {/* CTAs */}
              <div className="flex items-center space-x-2 ml-2">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="lg:hidden p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/30 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button className="p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/30 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Menu */}
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                      S
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                      {userMenuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className={`flex items-center space-x-2 px-4 py-2.5 text-sm transition-colors ${
                            item.destructive
                              ? 'text-red-600 hover:bg-red-50'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setUserMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                {/* Donate Button */}
                <NavLink
                  to="/donate"
                  className="group flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-200"
                >
                  <Heart className="w-4 h-4" />
                  <span>Donate</span>
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/30 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
            isMenuOpen
              ? 'max-h-screen opacity-100 border-t border-gray-200/30 mt-2'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 pt-2 pb-8 space-y-1 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            {navItems.map((item) => (
              <div key={`mobile-${item.name}`}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span aria-hidden="true">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && renderDropdown(item.dropdown, true)}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200
                      ${isActive
                        ? 'text-blue-600 bg-blue-50/50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                )}
              </div>
            ))}

            {/* Mobile User Menu */}
            <div className="pt-4 border-t border-gray-200/30 mt-4">
              <div className="grid grid-cols-2 gap-2 px-4">
                <NavLink
                  to="/profile"
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Profile</span>
                </NavLink>
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
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" aria-hidden="true"></div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-in {
          animation: animate-in 0.3s ease-out;
        }

        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .slide-in-from-top-2 {
          animation: slide-in-from-top-2 0.3s ease-out;
        }

        @keyframes slide-in-from-top-2 {
          from {
            transform: translateY(-8px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;