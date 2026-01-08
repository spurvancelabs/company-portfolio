/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import SEO from "../components/SEO";
import { 
  FileText, 
  Download, 
  Mail, 
  Shield, 
  Scale, 
  UserCheck,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Lock,
  Clock,
  Globe,
  FileCode,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const IndividualCLA = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            Thank you for your interest in Spurvance Labs. To clarify the intellectual property license 
            granted with Contributions from any person or entity, the Company must have on file a signed 
            Contributor License Agreement ("CLA") from each Contributor, indicating agreement with the license terms below.
          </p>
          <p>
            This agreement is for your protection as a Contributor as well as the protection of the 
            Company and its users. It does not change your rights to use your own Contributions for any other purpose.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mr-3" />
              <h4 className="font-semibold text-blue-800">Important Notice for Employees</h4>
            </div>
            <p className="text-blue-700">
              If You are an employee and have created the Contribution as part of your employment, You need 
              to have Your employer approve this Agreement or sign the Entity version of this document. If You do not 
              own the Copyright in the entire work of authorship, any other author of the Contribution should also 
              sign this.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "definitions",
      title: "1. Definitions",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">"You" (or "Your")</h4>
              <p className="text-gray-700 text-sm">
                Shall mean the copyright owner or legal entity authorized by the copyright owner that is making this Agreement with the company.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">"Contribution"</h4>
              <p className="text-gray-700 text-sm">
                Any original work of authorship, including any modifications or additions to an existing work, that is intentionally submitted to the Company.
              </p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-center mb-3">
              <FileCode className="w-5 h-5 text-purple-600 mr-3" />
              <h4 className="font-semibold text-purple-800">What Constitutes Submission</h4>
            </div>
            <p className="text-purple-700">
              "Submitted" means any form of electronic, verbal, or written communication sent to the Company or its representatives, 
              including communication on electronic mailing lists, source code control systems, and issue tracking systems that are 
              managed by, or on behalf of, the Company for the purpose of discussing and improving the Work.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "copyright-license",
      title: "2. Copyright License",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
              <h4 className="text-xl font-semibold text-green-800">License Granted to Spurvance Labs</h4>
            </div>
            <p className="text-green-700 mb-4">
              You hereby grant to Us a worldwide, royalty-free, exclusive, perpetual and irrevocable license, 
              with the right to transfer an unlimited number of non-exclusive licenses or to grant sublicenses 
              to third parties, under the Copyright covering the Contribution.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                "Publish the Contribution",
                "Modify the Contribution",
                "Prepare derivative works",
                "Reproduce in original or modified form",
                "Distribute and make available to public",
                "Display and publicly perform"
              ].map((right, idx) => (
                <div key={idx} className="flex items-center text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{right}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-4" />
              <h4 className="text-xl font-semibold text-blue-800">License Back to You</h4>
            </div>
            <p className="text-blue-700">
              Subject to the terms and conditions of this Agreement, We hereby grant to YOU a worldwide, 
              royalty-free, exclusive, perpetual and irrevocable license to use the Contribution by all means.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "patent-license",
      title: "3. Patent License",
      content: (
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
          <div className="flex items-center mb-4">
            <Scale className="w-6 h-6 text-amber-600 mr-4" />
            <h4 className="text-xl font-semibold text-amber-800">Patent Grant Terms</h4>
          </div>
          <p className="text-amber-700 mb-4">
            You hereby grant to the Company and to recipients of software distributed by the Company a 
            perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable patent license to make, 
            have made, use, offer to sell, sell, import, and otherwise transfer the Work.
          </p>
          <div className="mt-6 p-4 bg-amber-100/50 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-amber-800 mb-2">Termination Clause</h5>
            <p className="text-amber-700 text-sm">
              If any entity institutes patent litigation against You or any other entity alleging that your 
              Contribution constitutes direct or contributory patent infringement, then any patent licenses 
              granted to that entity under this Agreement shall terminate as of the date such litigation is filed.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "representations",
      title: "4-7. Representations & Warranties",
      content: (
        <div className="space-y-6">
          {[
            {
              title: "Legal Authority",
              description: "You represent that you are legally entitled to grant the above license.",
              icon: "⚖️"
            },
            {
              title: "Original Creation",
              description: "You represent that each of Your Contributions is Your original creation.",
              icon: "✍️"
            },
            {
              title: "Third-Party Disclosures",
              description: "You represent that Your submissions include complete details of any third-party license restrictions.",
              icon: "🔍"
            },
            {
              title: "No Support Obligation",
              description: "You are not expected to provide support for Your Contributions.",
              icon: "🛡️"
            },
            {
              title: "Third-Party Work",
              description: "For non-original work, you must identify complete details of its source.",
              icon: "📋"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-2xl mr-4">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "liability",
      title: "8-9. Liability & Waivers",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-4" />
              <h4 className="text-xl font-semibold text-red-800">Consequential Damage Waiver</h4>
            </div>
            <p className="text-red-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL YOU OR WE BE LIABLE FOR 
              ANY LOSS OF PROFITS, LOSS OF ANTICIPATED SAVINGS, LOSS OF DATA, INDIRECT, SPECIAL, INCIDENTAL, 
              CONSEQUENTIAL AND EXEMPLARY DAMAGES ARISING OUT OF THIS AGREEMENT.
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h4 className="font-semibold text-orange-800 mb-3">"AS IS" Basis</h4>
            <p className="text-orange-700">
              You provide Your Contributions on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
              either express or implied, including any warranties or conditions of TITLE, NON-INFRINGEMENT, 
              MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "governance",
      title: "10-11. Terms & Governance",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-3">Governing Law</h4>
              <p className="text-purple-700">
                This Agreement shall be governed by the laws of the Islamic Republic of Pakistan. 
                Any dispute arising out of or relating to this agreement shall be subject to the exclusive 
                jurisdiction of the High Court of Lahore, Pakistan.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-3">Term & Survival</h4>
              <p className="text-blue-700">
                This Agreement shall come into effect upon signing and apply for the term of the copyright 
                and patents licensed here. Certain sections survive termination.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Miscellaneous</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>In case of death, agreement continues with heirs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>If any provision is unenforceable, it will be replaced with the closest enforceable provision</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>You agree to notify of any facts that would make representations inaccurate</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "privacy",
      title: "Data Privacy Notice",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-indigo-600 mr-4" />
              <h4 className="text-xl font-semibold text-indigo-800">Personal Information Processing</h4>
            </div>
            <p className="text-indigo-700 mb-4">
              This document is a legal contract and contains Personally Identifiable Information (PII). 
              By signing this Agreement, you acknowledge that your Full Name, Public Name, and 
              GitHub/Discord ID will be stored by the Company and may be made publicly available in perpetuity 
              to document the provenance and licensing of the Work.
            </p>
            <div className="mt-6">
              <a 
                href="/privacy-policy" 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read our complete Privacy Policy
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Individual Contributor License Agreement (CLA) | Spurvance Labs"
        description="Review and sign the Individual Contributor License Agreement for contributing to Spurvance Labs open-source projects. Understand your rights and obligations as a contributor."
        canonical="https://spurvancelabs.com/legal/cla/individual"
      />

      {/* Hero */}
      <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Contributor Agreement
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Individual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Contributor License Agreement</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Your agreement to contribute to Spurvance Labs open-source projects. Protects both you and the project.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="/legal/cla/individual.pdf"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
            >
              <Download className="w-6 h-6 mr-3" />
              Download PDF Agreement
            </a>
            <a 
              href="/legal/cla/individual.docx"
              className="px-10 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              <FileText className="w-6 h-6 mr-3" />
              Download DOCX Template
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">Non-Exclusive</div>
              <div className="text-sm text-gray-600">Your Rights Preserved</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">Patent</div>
              <div className="text-sm text-gray-600">Protection Included</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">🇵🇰</div>
              <div className="text-sm text-gray-600">Pakistan Law</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2026</div>
              <div className="text-sm text-gray-600">Last Updated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-white border-b border-gray-100  top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setExpandedSection(expandedSection === section.id ? null : section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  expandedSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="truncate max-w-[120px]">{section.title}</span>
                {expandedSection === section.id ? (
                  <ChevronDown className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agreement Content */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {sections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className="mb-16 scroll-mt-24"
            >
              <div 
                className="cursor-pointer"
                onClick={() => setExpandedSection(
                  expandedSection === section.id ? null : section.id
                )}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${
                    expandedSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
              </div>

              {expandedSection === section.id && (
                <div className="animate-fadeIn">
                  <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Signing Information */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 p-10">
            <div className="text-center mb-10">
              <UserCheck className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Sign?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Follow these steps to complete your Individual Contributor License Agreement.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: "Download the Agreement",
                  description: "Download the PDF or DOCX version of the agreement",
                  action: "Download Template"
                },
                {
                  step: "2",
                  title: "Fill in Your Information",
                  description: "Complete all required fields including your full name, public name, and contact details",
                  action: "Complete Form"
                },
                {
                  step: "3",
                  title: "Review & Sign",
                  description: "Read the agreement carefully, then sign and date the document",
                  action: "Sign Electronically"
                },
                {
                  step: "4",
                  title: "Submit for Processing",
                  description: "Email the signed agreement to our compliance team",
                  action: "Submit Agreement"
                }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-600 font-medium">{step.action}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="mailto:contribution@spurvancelabs.com"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Mail className="w-6 h-6 mr-3" />
                Email Signed Agreement
                <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Send PDF copy to contribution@spurvancelabs.com only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Agreement Templates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred format. Both contain identical legal terms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PDF Download Card */}
            <div className="group relative bg-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-red-300 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 blur-lg opacity-30 rounded-full"></div>
                    <FileText className="w-12 h-12 text-red-600 relative z-10" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">PDF Version</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-green-600 font-medium">Ready to Print & Sign</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-10">
                  {[
                    "Best for physical signatures",
                    "Industry standard format",
                    "Maintains formatting integrity",
                    "Widely accepted by legal teams"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <a
                    href="/legal/cla/individual.pdf"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 inline mr-3" />
                    Download PDF Agreement
                  </a>
                  <a
                    href="/legal/cla/individual.pdf?view=preview"
                    className="block w-full text-center px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                  >
                    Preview Before Download
                  </a>
                </div>
              </div>
            </div>

            {/* DOCX Download Card */}
            <div className="group relative bg-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 blur-lg opacity-30 rounded-full"></div>
                    <FileText className="w-12 h-12 text-blue-600 relative z-10" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900">DOCX Template</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-blue-600 font-medium">Editable Format</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-10">
                  {[
                    "Best for digital signatures",
                    "Editable in Microsoft Word",
                    "Easy to fill form fields",
                    "Track changes and comments"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <a
                    href="/legal/cla/individual.docx"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 inline mr-3" />
                    Download DOCX Template
                  </a>
                  <a
                    href="/legal/cla/individual-guide.pdf"
                    className="block w-full text-center px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 inline mr-3" />
                    Download Filling Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
                <Globe className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm font-semibold text-blue-700">
                  Additional Resources
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <a 
                  href="/legal/terms" 
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Terms of Service</h4>
                  <p className="text-gray-600 text-sm">Read our complete terms and conditions</p>
                </a>
                <a 
                  href="/privacy-policy" 
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Privacy Policy</h4>
                  <p className="text-gray-600 text-sm">How we handle your personal information</p>
                </a>
                <a 
                  href="/legal/cla/corporate" 
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Corporate CLA</h4>
                  <p className="text-gray-600 text-sm">For company or organizational contributions</p>
                </a>
              </div>
              
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Last Updated: January 1, 2026
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  By signing this agreement, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndividualCLA;