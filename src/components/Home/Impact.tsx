/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { 
  Cpu, 
  Shield, 
  Lock, 
  Code, 
  Globe, 
  Sparkles,
} from 'lucide-react';
const Impact = () => {
  return (
    <>
      {/* Our Impact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Building Digital Sovereignty
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Pakistan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Backbone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're creating the foundational technology that powers a secure, independent digital future for Pakistan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Secure Communications */}
            <div className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25">
                  <Lock className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-4">
                Sovereign Communications
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pakistan's first end-to-end encrypted messaging platform built on open-source principles. No backdoors, no surveillance, just private conversations protected by Pakistani security standards.
              </p>
              {/* <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn about N-Chat</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div> */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Military-grade encryption</span>
                </div>
              </div>
            </div>

            {/* Digital Infrastructure */}
            <div className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 shadow-lg shadow-cyan-500/25">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-4">
                Open Digital Infrastructure
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From operating systems to developer tools, we're building the open-source foundation that Pakistani tech companies need to thrive independently. No vendor lock-in, complete transparency.
              </p>
              {/* <div className="flex items-center text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore our projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div> */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <Code className="w-4 h-4 mr-2" />
                  <span>100% open-source</span>
                </div>
              </div>
            </div>

            {/* Security & Sovereignty */}
            <div className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 shadow-lg shadow-indigo-500/25">
                  <Shield className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-4">
                Digital Sovereignty
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We ensure Pakistan controls its digital destiny. Our solutions keep data within national borders while maintaining global interoperability and security standards.
              </p>
              {/* <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Read our manifesto</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div> */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Pakistan-first, global-ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-sm opacity-90">Backdoors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">End-to-End</div>
                <div className="text-sm opacity-90">Encrypted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Pakistani</div>
                <div className="text-sm opacity-90">Built & Controlled</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact