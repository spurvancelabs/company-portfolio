/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { 
  Scale,
  CheckCircle,
  Lock,
  ArrowRight,
  HeartHandshake,
  FileCode,
} from "lucide-react";
import { Link } from "react-router-dom";
const LegalFramework = () => {
  return (
         <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-800 border border-gray-700 mb-8">
              <Scale className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Legal Framework
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Compliance & Agreements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protecting contributors, users, and Pakistan's digital sovereignty through clear legal agreements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Contributor License Agreement (CLA)",
                description: "Grants Spurvance Labs permission to use your contributions under project licenses while you retain copyright.",
                keyPoints: ["Individual & Corporate CLA versions", "Patent grant provisions", "Irrevocable worldwide license", "Compatible with DCO"],
                icon: <FileCode className="w-8 h-8" />,
                link: "/cla"
              },
              {
                title: "Code of Conduct",
                description: "Ensures respectful, inclusive, and professional collaboration in all community spaces.",
                keyPoints: ["Based on Contributor Covenant", "Enforced by moderation team", "Reporting & escalation process", "Applies to all interactions"],
                icon: <HeartHandshake className="w-8 h-8" />,
                link: "/conduct"
              },
              {
                title: "Security & Disclosure Policy",
                description: "Protocols for responsibly disclosing security vulnerabilities and protecting user data.",
                keyPoints: ["90-day disclosure policy", "Bug bounty eligibility", "Secure communication channels"],
                icon: <Lock className="w-8 h-8" />,
                link: "/security"
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-3xl border border-gray-700 p-8">
                <div className="text-blue-400 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <ul className="space-y-3 mb-8">
                  {item.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300"
                >
                  <span>Read Full Document</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* Legal Disclosures */}
          <div className="bg-gray-800/30 rounded-3xl border border-gray-700 p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Important Legal Disclosures</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-300 mb-4">📝 Intellectual Property</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Contributors retain copyright of their original work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>All contributions licensed under project's OSI license</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Dual licensing available for commercial use</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-300 mb-4">⚖️ Liability & Warranty</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Software provided "as is" without warranty</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>No liability for damages from software use</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span>Contributors not responsible for security audits</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  By contributing, you affirm that you have the right to submit the work and agree to all terms in the CLA.
                  All contributions are subject to review and may be rejected for legal, security, or quality reasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LegalFramework