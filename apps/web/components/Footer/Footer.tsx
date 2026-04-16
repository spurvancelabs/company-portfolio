/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
'use client';

import Link from 'next/link';
import {
//   Github
//   Twitter,
//   Linkedin,
  Mail,
  Users,
//   Instagram,
//   Facebook,
  MessageCircle
} from "lucide-react";
import Logo from "../Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Github, href: "https://github.com/spurvancelabs", label: "GitHub" },
    // { icon: Twitter, href: "https://x.com/spurvancelabs", label: "Twitter" },
    // { icon: Linkedin, href: "https://linkedin.com/company/spurvancelabs", label: "LinkedIn" },
    // { icon: Instagram, href: "https://instagram.com/spurvancelabs", label: "Instagram" },
    // { icon: Facebook, href: "https://facebook.com/spurvancelabs", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/+923294171505", label: "WhatsApp" }
  ];

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/products/nat", label: "NAT" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div>
            <Logo size="lg" />
            <p className="text-gray-400 dark:text-gray-500 mt-4 text-sm leading-relaxed max-w-sm">
              Spurvance Labs builds secure, scalable software and open-source
              technology focused on cybersecurity, automation, and engineering.
            </p>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 dark:text-gray-400 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400 dark:text-blue-500" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 dark:text-gray-400 mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400 dark:text-blue-500" />
              Contact
            </h4>
            
            <div className="space-y-3">
              <a
                href="mailto:info@spurvancelabs.com"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-300 transition-colors block"
              >
                info@spurvancelabs.com
              </a>
              <a
                href="https://wa.me/+923294171505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-300 transition-colors block"
              >
                +92 329 4171505
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-6 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500 dark:text-gray-600">
            © {currentYear} Spurvance Labs. All rights reserved.
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-600">
            Building secure & open technology.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;