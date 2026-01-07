/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import SEO from "../components/SEO";
import { Heart, Server, Shield, Award, Globe, Sparkles, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { useState } from "react";

const Donate = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)


  return (
    <>
      <SEO
        title="Support Spurvance Labs"
        description="Support Spurvance Labs through optional donations. Help sustain open-source infrastructure, security, and community initiatives."
        canonical="https://spurvancelabs.com/donate"
      />

      {/* Hero */}
      <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Community Powered
              </span>
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl opacity-30 rounded-full"></div>
                <Heart className="w-16 h-16 text-blue-600 relative z-10" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pakistan's Digital Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every contribution helps build secure, open-source infrastructure that keeps Pakistan's technology sovereignty in our hands.
            </p>
          </div>
        </div>
      </section>

      {/* Why Support - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Support Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation directly funds these critical areas of Pakistan's digital sovereignty initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-10 h-10" />,
                title: "Infrastructure & Tools",
                description: "Servers, CI/CD pipelines, development environments, and testing tools",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                stats: "40% of funds allocated"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Security & Audits",
                description: "Third-party security audits, penetration testing, and encryption research",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                stats: "30% of funds allocated"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Community & Growth",
                description: "Contributor recognition, university chapters, and educational programs",
                color: "from-amber-500 to-amber-600",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
                stats: "30% of funds allocated"
              }
            ].map((item, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 ${item.borderColor} ${item.bgColor} ${
                  hoveredCard === index 
                    ? 'shadow-2xl transform scale-[1.02]' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Gradient Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-3xl">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-8 -translate-y-8`}></div>
                </div>
                
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${item.color} shadow-lg`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                
                {/* Stats */}
                <div className="pt-6 border-t border-gray-200/50">
                  <div className="text-sm font-medium text-gray-500 mb-2">Fund Allocation</div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: item.stats }}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm font-semibold text-gray-700">{item.stats}</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Support Method</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple secure options to support Pakistan's digital sovereignty.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Online Donations - Enhanced */}
            <div className="group relative bg-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-30 rounded-full"></div>
                    <Globe className="w-12 h-12 text-blue-600 relative z-10" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">Online Donations</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-green-600 font-medium">Secure & Encrypted</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Secure online donations via Stripe. Instant processing, tax receipts provided, and multiple currency support.
                </p>
                
                <div className="space-y-4 mb-10">
                  {[
                    "💳 Credit/Debit Card",
                    "🏦 Bank Transfer (Pakistan)",
                    "🌐 PayPal (International)",
                    "🔐 End-to-end encrypted"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <span>Donate Now</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Processing fee: 2.9% + $0.30 per transaction
                </p>
              </div>
              
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full mb-6">
                    <Zap className="w-4 h-4 mr-2" />
                    Coming Soon
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Online Payments Launching Soon</h4>
                  <p className="text-gray-600 mb-6">
                    We're working on secure payment integration. In the meantime, please use direct support options.
                  </p>
                  <div className="text-sm text-gray-500">
                    Expected launch: Q1 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Support - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-cyan-300 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-30 rounded-full"></div>
                    <Heart className="w-12 h-12 text-cyan-600 relative z-10" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">Direct Support</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      <span className="text-sm text-amber-600 font-medium">Bank Transfer & Crypto</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  For local bank transfers within Pakistan or cryptocurrency donations. Lower fees, direct impact.
                </p>
                
                <div className="space-y-4 mb-10">
                  {[
                    "🏦 Direct Bank Transfer (No fees in Pakistan)",
                    "₿ Cryptocurrency (BTC, ETH, USDT)",
                    "🏛️ Corporate Sponsorship Inquiries",
                    "📄 Tax-deductible in Pakistan"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="mailto:donate@spurvancelabs.com?subject=Direct%20Support%20Inquiry"
                  className="group relative w-full py-4 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl block text-center"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span>Contact for Bank Details</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Response time: 24-48 hours
                </p>
              </div>
              
              {/* Available Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                  AVAILABLE NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Quick Stats */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Open Source" },
              { value: "0", label: "Hidden Fees" },
              { value: "Tax-Deductible", label: "In Pakistan" },
              { value: "Quarterly", label: "Transparency Reports" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;