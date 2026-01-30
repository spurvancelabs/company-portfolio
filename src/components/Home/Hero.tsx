/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import React from "react"
import { Shield, Cpu, Globe, ArrowRight, Code, Rocket, Users, Target, GitBranch, CheckCircle, Monitor, Cloud, Server, Database } from 'lucide-react';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Type-safe interfaces
interface StatCard {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface Feature {
  text: string;
  icon: React.ComponentType<any>;
}


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Handle visibility with error boundary
  useEffect(() => {
    try {
      setIsVisible(inView);
    } catch (error) {
      console.error('Error in visibility observer:', error);
      setIsVisible(true);
    }
  }, [inView]);



  // Responsive stats data
  const stats: StatCard[] = [
    {
      value: '10K+',
      label: 'Active Contributors',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      value: '99.9%',
      label: 'Uptime SLA',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      value: '50+',
      label: 'Open Source Projects',
      icon: GitBranch,
      color: 'bg-purple-500'
    },
    {
      value: '150+',
      label: 'Countries Served',
      icon: Globe,
      color: 'bg-orange-500'
    },
  ];

  // Feature points
  const features: Feature[] = [
    { text: 'End-to-end encryption', icon: Shield },
    { text: 'Open source infrastructure', icon: Code },
    { text: 'Global scalability', icon: Globe },
    { text: '24/7 support', icon: CheckCircle },
  ];

  // Tech stack icons
  const techStack = [
    { icon: Monitor, label: 'Web Apps' },
    { icon: Cloud, label: 'Cloud' },
    { icon: Server, label: 'Servers' },
    { icon: Database, label: 'Databases' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };



  return (
    <section
      ref={(node) => {
        try {
          heroRef.current = node;
          ref(node);
        } catch (error) {
          console.error('Error setting ref:', error);
        }
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50 pt-16" // Added pt-16 for sticky navbar
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100" />

        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
      </div>

      {/* Floating tech elements - subtle version */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`absolute ${index === 0 ? 'top-1/4 left-1/4' : ''} ${index === 1 ? 'top-1/3 right-1/4' : ''} ${index === 2 ? 'bottom-1/4 left-1/3' : ''} ${index === 3 ? 'bottom-1/3 right-1/4' : ''} hidden lg:block`}
          >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <tech.icon className="w-8 h-8 text-blue-600/50" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="text-center lg:text-left"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="block">Building</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pakistan's Digital
              </span>
              <span className="block mt-2">Future</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-700 max-w-xl mb-8 leading-relaxed"
            >
              Spurvance Labs is revolutionizing Pakistan's technology landscape
              through{' '}
              <span className="font-semibold text-gray-900">
                secure, open-source infrastructure
              </span>{' '}
              that champions digital sovereignty, privacy, and innovation at
              global scale.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/contribute"
                className="group px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                aria-label="Start contributing to Spurvance Labs"
              >
                <Cpu className="w-5 h-5" />
                <span>Start Contributing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="group px-6 sm:px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                aria-label="Learn more about Spurvance Labs mission"
              >
                <Shield className="w-5 h-5" />
                <span>Explore Mission</span>
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-sm text-gray-600 mb-3">
                Built with modern technology
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100"
                  >
                    <tech.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Our Impact in Numbers
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-3 mb-3 ${stat.color} rounded-lg group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 pt-6 border-t border-gray-100"
            >
              <p className="text-sm text-gray-600 mb-4 text-center">
                Trusted by innovative teams worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                {['TECHNOLOGY', 'INNOVATION', 'SECURITY', 'OPEN SOURCE'].map(
                  (word, index) => (
                    <div
                      key={index}
                      className="text-sm sm:text-base font-semibold text-gray-700 bg-gray-50 px-3 py-1 rounded-lg"
                    >
                      {word}
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Simple wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-30">
        <svg
          className="w-full h-16 sm:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-current text-white"
          />
        </svg>
      </div>

      {/* Scroll indicator for sticky navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Error Boundary wrapper component
export const HeroWithErrorBoundary: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white pt-16">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We're having trouble loading the hero section. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary onError={() => setHasError(true)}>
      <Hero />
    </ErrorBoundary>
  );
};

// Simple Error Boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Hero section error:', error, errorInfo);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default HeroWithErrorBoundary;
