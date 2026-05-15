/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

'use client';
import Link from "next/link"
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
//   Github,
  Lock,
  Coffee,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  BookOpen,
  Server,
  Code2,
  Zap,
  CreditCard,
  Building2,
  Download
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DonationTier {
  amount: number;
  label: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

interface ImpactMetric {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const donationTiers: DonationTier[] = [
  {
    amount: 10,
    label: 'Supporter',
    description: 'For those who believe in our mission',
    icon: <Heart size={20} />,
    features: [
      'Name on supporters page',
      'Monthly newsletter',
      'Community access'
    ]
  },
  {
    amount: 25,
    label: 'Builder',
    description: 'Help us build core infrastructure',
    icon: <Code2 size={20} />,
    features: [
      'All Supporter benefits',
      'Early access to NAT preview',
      'Discord private channel',
      'Monthly dev updates'
    ]
  },
  {
    amount: 50,
    label: 'Guardian',
    description: 'Sustain our open source work',
    icon: <Shield size={20} />,
    features: [
      'All Builder benefits',
      'Priority support',
      'Feature voting rights',
      'Annual impact report',
      'Name in GitHub sponsors'
    ],
    popular: true
  },
  {
    amount: 100,
    label: 'Visionary',
    description: 'Shape the future of digital privacy',
    icon: <Sparkles size={20} />,
    features: [
      'All Guardian benefits',
      '1-on-1 founder call',
      'Strategic input sessions',
      'Custom thank you video',
      'Lifetime recognition'
    ]
  }
];

const impactMetrics: ImpactMetric[] = [
  {
    value: '5,000+',
    label: 'Users Protected',
    description: 'Across our open source tools',
    icon: <Users size={24} />
  },
  {
    value: '100%',
    label: 'Open Source',
    description: 'Every line of code transparent',
    icon: <Users size={24} />
  },
  {
    value: '24/7',
    label: 'Privacy Guarantee',
    description: 'No surveillance, ever',
    icon: <Lock size={24} />
  },
  {
    value: '50+',
    label: 'Contributors',
    description: 'Growing community',
    icon: <Users size={24} />
  }
];

const whatYourSupportFunds = [
  {
    icon: <Server size={22} />,
    title: 'Infrastructure Costs',
    description: 'Servers, bandwidth, and hosting for our open source services'
  },
  {
    icon: <Code2 size={22} />,
    title: 'Developer Hours',
    description: 'Paying maintainers to build and improve our products'
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Documentation',
    description: 'Guides, tutorials, and translation efforts'
  },
  {
    icon: <Users size={22} />,
    title: 'Community Programs',
    description: 'Workshops, mentorship, and local tech events'
  }
];

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
}

// ─── Donation Button Component ─────────────────────────────────────────────────

function DonationButton({ tier, isSelected, onSelect }: { 
  tier: DonationTier; 
  isSelected: boolean; 
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`relative w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
        isSelected
          ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/20 shadow-lg'
          : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700'
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold">
          Most Popular
        </span>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600 dark:text-blue-400">{tier.icon}</span>
            <h3 className="font-semibold text-gray-900 dark:text-white">{tier.label}</h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{tier.description}</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">${tier.amount}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
        </div>
      </div>
      
      <ul className="space-y-1.5 mt-4">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <CheckCircle size={12} className="text-green-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </button>
  );
}

// ─── Main Page Component ───────────────────────────────────────────────────────

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(50);
  const [isAnnual, setIsAnnual] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

const handleDonate = async () => {
  if (!selectedTier) return;

  setIsProcessing(true);

  const amount = isAnnual ? selectedTier * 12 * 0.9 : selectedTier;
  const billing = isAnnual ? 'yearly' : 'monthly';


  const phoneNumber = "923294171505"; 

  const message = `Hello! I want to donate $${amount} (${billing}) to support your project`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  setTimeout(() => {
    window.open(whatsappURL, "_blank");
    setIsProcessing(false);
  }, 500);
};

  const displayAmount = selectedTier ? (isAnnual ? selectedTier * 12 * 0.9 : selectedTier) : 0;
  const yearlySavings = selectedTier ? selectedTier * 12 * 0.1 : 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* ── Hero Section ── */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6 border border-blue-200 dark:border-blue-800">
              <Heart size={12} />
              Support Open Source
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Fund the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Freedom
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Your donation keeps our open source projects alive, independent, and free. 
              Help us build privacy-first tools for Pakistan and the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation Tiers ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose your impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every contribution, no matter the size, helps us build a more private digital world.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-3 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !isAnnual
                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isAnnual
                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-1.5 text-xs text-green-600 dark:text-green-400">Save 10%</span>
              </button>
            </div>
          </motion.div>

          {/* Donation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {donationTiers.map((tier) => (
              <DonationButton
                key={tier.amount}
                tier={tier}
                isSelected={selectedTier === tier.amount}
                onSelect={() => setSelectedTier(tier.amount)}
              />
            ))}
          </div>

          {/* Custom Amount & Checkout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isAnnual ? 'Yearly contribution' : 'Monthly contribution'}
                </h3>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${displayAmount}
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && yearlySavings > 0 && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    Save ${yearlySavings.toFixed(0)} with annual billing
                  </p>
                )}
              </div>

              <button
                onClick={handleDonate}
                disabled={isProcessing}
                className="w-full cursor-pointer flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <Heart size={18} />
                    Donate ${displayAmount}/{isAnnual ? 'year' : 'month'}
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-600">
                <span className="flex items-center gap-1">
                  <Lock size={12} />
                  Secure payment
                </span>
                <span className="flex items-center gap-1">
                  <CreditCard size={12} />
                  Credit card / PayPal
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp size={12} />
                  Tax deductible
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What Your Support Funds ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Where your money goes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              100% of donations go directly to building and maintaining open source infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYourSupportFunds.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/30"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source Promise ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, white 1.5px, transparent 1.5px)`,
                backgroundSize: '32px 32px',
              }}
            />
            
            <div className="relative">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                100% Open Source. Forever.
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Your donations keep our projects free, independent, and transparent. 
                No hidden agendas. No surveillance. Just code you can trust.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/spurvancelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
                >
                  <Users size={16} />
                  View on GitHub
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all"
                >
                  Learn our mission
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Enterprise Sponsorship ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <Building2 className="w-12 h-12 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Enterprise Sponsorship
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For organizations that want to support open source at scale. 
              Custom sponsorship packages available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              Talk to us about sponsorship
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Transparency Note ── */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            Spurvance Labs is an independent open source organization. We are not a non-profit, 
            but we operate with full financial transparency. All major expenses are documented 
            and shared with our community. Contact us for detailed financial reports.
          </p>
        </div>
      </section>

    </main>
  );
}
