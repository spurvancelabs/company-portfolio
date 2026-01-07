/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { useState, useEffect } from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Heart,
  Menu,
  X,
  Shield,
  ArrowRight,
  GitBranch,
  MessageSquare
} from 'lucide-react';
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />,
      label: 'Navigate to Spurvance Labs homepage'
    },
    {
      name: 'About',
      path: '/about',
      icon: <Shield className="w-4 h-4" />,
      label: 'Learn about Spurvance Labs mission and vision'
    },
    {
      name: 'Contribute',
      path: '/contribute',
      icon: <GitBranch className="w-4 h-4" />,
      label: 'Contribute to Spurvance Labs open-source projects'
    },
    {
      name: 'Community',
      path: '/community',
      icon: <Users className="w-4 h-4" />,
      label: 'Join the Spurvance Labs community'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <MessageSquare className="w-4 h-4" />,
      label: 'Contact Spurvance Labs team'
    },
    {
      name: 'Donate',
      path: '/donate',
      icon: <Heart className="w-4 h-4" />,
      label: 'Support Spurvance Labs through donation',
      isHighlighted: true
    }
  ];


  return (
    <>
      <nav 
        role="navigation" 
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" showTagline />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  aria-label={item.label}
                  className={({ isActive }) => `
                    relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2
                    ${item.isHighlighted 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-md hover:shadow-blue-500/25 hover:scale-[1.02]' 
                      : isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }
                  `}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.isHighlighted && (
                    <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-gray-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.name}`}
                to={item.path}
                aria-label={item.label}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                  ${item.isHighlighted
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                    : isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                <span aria-hidden="true" className={item.isHighlighted ? 'text-white/90' : ''}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </NavLink>
            ))}
            
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" aria-hidden="true"></div>
    </>
  );
};

export default Navbar;