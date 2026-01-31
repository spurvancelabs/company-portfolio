/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { 
  Shield, 
  Code, 
  Users, 
  Layers,
  GitBranch,
} from "lucide-react";
import {Link} from "react-router-dom"
const ProductPortfolio = () => {
  return (
          <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the foundational technology stack for Pakistan's sovereign digital economy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mr-5">
                  {/*<MessageSquare className="w-7 h-7 text-white" />*/}
                  <img src="/assets/nat.png" alt='nat logo' />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">NAT</h3>
                  <p className="text-blue-600 font-medium">Secure Messaging Platform</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Pakistan's first end-to-end encrypted messaging platform. Built with Signal Protocol, open-source, and designed for both personal privacy and enterprise security.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <GitBranch className="w-4 h-4 mr-2" />
                <span><Link to="/products/nat">Active Development - Join Beta</Link></span>
              </div>
            </div>

            <div className="p-10 bg-gradient-to-br from-cyan-50 to-white rounded-3xl border-2 border-cyan-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center mr-5">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Agent</h3>
                  <p className="text-cyan-600 font-medium">Privacy-Focused Personal AI System</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                A Linux-based operating system with privacy and security built-in from the kernel up. Designed for government, enterprise, and privacy-conscious users.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold">
                <Code className="w-4 h-4 mr-2" />
                <span>Coming 2027 - Under Development</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Developer Tools", desc: "Localized SDKs & APIs for Pakistani developers", icon: <Code className="w-5 h-5" /> },
              { name: "Security Frameworks", desc: "Cryptographic libraries compliant with Pakistani standards", icon: <Shield className="w-5 h-5" /> },
              { name: "Digital Identity", desc: "Decentralized identity solutions for citizens", icon: <Users className="w-5 h-5" /> },
            ].map((product, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="text-blue-600 mb-3">{product.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProductPortfolio