/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */

'use client';

import Link from 'next/link';
import {
  Mail,
  Users,
  MessageCircle,
  Send,
  Globe,
  ShieldCheck
} from 'lucide-react';
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa6';
import { useState } from 'react';
import Logo from '../Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const WEB3FORMS_KEY = '02e13be8-e457-44b7-a770-f9588315f1a2';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    setStatus('idle');

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('email', email);
      formData.append('subject', 'New Newsletter Subscription - Spurvance Labs');
      formData.append('from_name', 'Spurvance Labs Newsletter');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/spurvancelabs',
      label: 'GitHub',
    },
    {
      icon: FaXTwitter,
      href: 'https://x.com/spurvancelabs',
      label: 'X',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/spurvancelabs',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/spurvancelabs',
      label: 'Instagram',
    },
    {
      icon: FaFacebookF,
      href: 'https://facebook.com/spurvancelabs',
      label: 'Facebook',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/923294171505',
      label: 'WhatsApp',
    },
  ];

  const companyLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: 'Donate' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size="lg" />

            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 max-w-md">
              Spurvance Labs builds secure, privacy-focused software and
              open-source technology for modern infrastructure, communication,
              and cybersecurity.
            </p>

            {/* Status */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">
                <ShieldCheck className="w-4 h-4" />
                Open Source
              </div>

              <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-xs text-gray-600 dark:text-gray-400">
                <Globe className="w-4 h-4" />
                Remote First
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-5">
              <Users className="w-4 h-4" />
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-5">
              <Mail className="w-4 h-4" />
              Contact
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@spurvancelabs.com"
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                info@spurvancelabs.com
              </a>

              <a
                href="mailto:sales@spurvancelabs.com"
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                sales@spurvancelabs.com
              </a>

              <a
                href="https://wa.me/923294171505"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                +92 329 4171505
              </a>
            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-2 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter */}
                <div className="mt-14 border-t border-gray-200 dark:border-gray-800 pt-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                Stay updated
              </h4>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Product updates, open-source releases, and security research.
              </p>

              {status === 'success' && (
                <p className="mt-2 text-xs text-green-600">
                  ✔ Successfully subscribed!
                </p>
              )}

              {status === 'error' && (
                <p className="mt-2 text-xs text-red-600">
                  Something went wrong. Try again.
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full lg:w-72 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-sm text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Subscribe'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} Spurvance Labs. All rights reserved.
          </div>

          {/* <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;