/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Users,
  Star,
  Mail,
  Send,
  Eye,
  EyeOff
} from 'lucide-react';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


const WAITLIST_API_URL = 'https://spurvancelabs.com/api/waitlist.php';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await fetch(WAITLIST_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Show the server's error message (duplicate email, invalid, etc.)
      alert(data.message ?? 'Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  } catch (err) {
    alert('Network error. Please check your connection and try again.');
  } finally {
    setIsLoading(false);
  }
};

  const benefits = [
    { icon: Shield, text: 'Early access to NAT Chat preview' },
    { icon: Star, text: 'Be among first 10,000 users' },
    { icon: Users, text: 'Join private community of early testers' },
    { icon: Zap, text: 'Influence product direction' }
  ];

  const stats = [
    { label: 'On Waitlist', value: '2,847' },
    { label: 'Launching', value: 'Preview Soon' },
    { label: 'Open Source', value: '100%' }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6">
                <MessageCircle className="w-3 h-3" />
                NAT CHAT
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Join the Waitlist for
                <span className="block text-blue-600 dark:text-blue-400">Pakistan's First Encrypted Chat</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Be among the first to experience private, secure, and freedom-first 
                communication. No surveillance. No tracking. Just pure privacy.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Waitlist Form */}
            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                    {!isLoading && <Send className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-600 mt-3 text-center">
                  No spam. We'll only email you when NAT launches.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-md"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We'll notify you as soon as NAT Chat preview is ready. 
                  Thank you for your support.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Join the Waitlist?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Be part of something revolutionary. Early supporters get exclusive benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-sm border border-gray-200 dark:border-gray-800 text-center group hover:border-blue-600 dark:hover:border-blue-600 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What Makes NAT Different?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Built from the ground up for privacy, NAT Chat ensures your conversations 
                stay between you and who you're talking to — no one else.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">End-to-End Encryption</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Messages encrypted on your device, decrypted only on recipient's device.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Open Source & Auditable</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Every line of code is public. No hidden backdoors, ever.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Made in Pakistan, for the World</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Built locally, respecting global privacy standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="bg-gray-950 rounded-lg overflow-hidden">
                  <div className="bg-gray-900 px-4 py-3 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Secure Chat</div>
                        <div className="text-xs text-gray-400">End-to-end encrypted</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3 min-h-[250px]">
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-lg px-3 py-2">
                        <p className="text-sm text-gray-200">Your privacy is our priority</p>
                        <span className="text-xs text-gray-500">Encrypted 🔒</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-600 rounded-lg px-3 py-2">
                        <p className="text-sm text-white">No surveillance. No tracking.</p>
                        <span className="text-xs text-blue-200">End-to-end encrypted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about NAT Chat
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "When will NAT Chat be available?",
                a: "The preview version is launching soon. Join the waitlist to be notified immediately when it's ready."
              },
              {
                q: "Is NAT Chat really free?",
                a: "Yes, NAT Chat is completely free and open source. We believe privacy shouldn't be a premium feature."
              },
              {
                q: "How is NAT different from WhatsApp?",
                a: "NAT is fully open source, independently auditable, and built specifically with privacy-first architecture. No data collection, no metadata tracking."
              },
              {
                q: "Will NAT work on iOS and Android?",
                a: "Yes, NAT Chat will be available on both iOS and Android platforms at launch."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-sm border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Take Back Your Privacy?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of others waiting for Pakistan's first encrypted chat app.
            </p>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Join Waitlist Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #1f2937 1px, transparent 1px),
            linear-gradient(to bottom, #1f2937 1px, transparent 1px);
        }
      `}</style>
    </main>
  );
};

export default WaitlistPage;