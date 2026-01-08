/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import SEO from "../components/SEO";
import { 
  Shield, 
  Users, 
  AlertTriangle, 
  FileText, 
  Mail, 
  Lock, 
  Clock,
  CheckCircle,
  XCircle,
  Scale,
  ArrowRight,
  Sparkles,
  Eye,
  BookOpen,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import { useState } from "react";

const CodeOfConduct = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("our-commitment");

  const sections = [
    {
      id: "our-commitment",
      title: "Our Commitment",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p>
            This Code of Conduct outlines our expectations for all participants within the Spurvance Labs ecosystem—including employees, contractors, open-source contributors, and visitors. We are committed to providing a welcoming, rigorous, and inspiring environment.
          </p>
          <p>
            We expect this code to be honored in all professional interactions. Violation of these standards may result in removal from projects, revocation of lab access, or termination of engagement.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-3" />
              <h4 className="font-semibold text-blue-800">Scope of Application</h4>
            </div>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>All digital communication spaces (Slack, Discord, Matrix, etc.)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>All code repositories and contributions (GitHub, GitLab, etc.)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>In-person interactions at lab locations or industry events</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Professional representation in public forums</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "expected-behavior",
      title: "Expected Behavior",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Be Friendly & Patient",
                description: "Innovation moves at different speeds for everyone. Extend grace and understanding.",
                icon: "🤝"
              },
              {
                title: "Be Welcoming",
                description: "We support people of all backgrounds and identities. Diversity strengthens our work.",
                icon: "🌈"
              },
              {
                title: "Be Considerate",
                description: "Your work affects colleagues. Consider consequences of decisions on code or data.",
                icon: "💭"
              },
              {
                title: "Be Respectful",
                description: "Disagreement is natural, but personal attacks are strictly prohibited.",
                icon: "🙏"
              }
            ].map((behavior, idx) => (
              <div key={idx} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="text-2xl mb-3">{behavior.icon}</div>
                <h4 className="font-semibold text-green-800 mb-2">{behavior.title}</h4>
                <p className="text-green-700 text-sm">{behavior.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-amber-600 mr-3" />
              <h4 className="font-semibold text-amber-800">Intellectual Humility</h4>
            </div>
            <p className="text-amber-700">
              Focus on helping to resolve issues and learning from mistakes. Different perspectives lead to better technical outcomes. Being unable to understand a viewpoint doesn't mean it is wrong.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "unacceptable-behavior",
      title: "Unacceptable Behavior",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <div className="flex items-center mb-4">
              <XCircle className="w-5 h-5 text-red-600 mr-3" />
              <h4 className="font-semibold text-red-800">Harassment Includes:</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Offensive comments related to protected characteristics",
                "Unwelcome comments regarding lifestyle choices",
                "Deliberate misgendering or use of 'deadnames'",
                "Threats or incitement of violence",
                "Deliberate intimidation, stalking, or following",
                "Sustained disruption of discussions",
                "Unwelcome sexual attention",
                "Publication of private communication without consent"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-center mb-3">
              <Scale className="w-5 h-5 text-purple-600 mr-3" />
              <h4 className="font-semibold text-purple-800">Intellectual Dishonesty</h4>
            </div>
            <p className="text-purple-700">
              Falsifying data, plagiarism, or intentionally misrepresenting the work of others is strictly prohibited and considered a serious violation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "exceptions",
      title: "Exceptions (Non-Violations)",
      icon: <CheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p>We will not act on complaints regarding:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Good faith efforts to improve conditions for disadvantaged groups",
              "Reasonable communication of boundaries",
              "Refusal to explain or debate social justice concepts",
              "Criticizing oppressive behavior or biased technical assumptions",
              "Constructive technical critique delivered respectfully"
            ].map((exception, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-green-700 text-sm">{exception}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "reporting",
      title: "Reporting & Incident Response",
      icon: <Mail className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          {/* Reporting Channels */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Reporting Channels</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Standard Report",
                  description: "Email the Conduct Committee",
                  email: "compliance@spurvance.com",
                  icon: <Mail className="w-6 h-6" />,
                  color: "blue"
                },
                {
                  title: "Direct Escalation",
                  description: "Contact Head of Operations",
                  email: "hr@spurvance.com",
                  icon: <ArrowRight className="w-6 h-6" />,
                  color: "purple"
                },
                {
                  title: "Anonymous Report",
                  description: "Limited investigation capability",
                  link: "/conduct/report-anonymous",
                  icon: <Eye className="w-6 h-6" />,
                  color: "green"
                }
              ].map((channel, idx) => (
                <div key={idx} className={`bg-${channel.color}-50 rounded-xl p-6 border border-${channel.color}-100`}>
                  <div className={`text-${channel.color}-600 mb-4`}>{channel.icon}</div>
                  <h5 className="font-semibold text-gray-900 mb-2">{channel.title}</h5>
                  <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                  {channel.email ? (
                    <a href={`mailto:${channel.email}`} className={`text-${channel.color}-600 font-medium hover:text-${channel.color}-700`}>
                      {channel.email}
                    </a>
                  ) : (
                    <a href={channel.link} className={`text-${channel.color}-600 font-medium hover:text-${channel.color}-700`}>
                      Submit anonymously
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Investigation Process */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Investigation Process</h4>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Triage (Within 24 Hours)",
                  description: "Acknowledge receipt and assess immediate safety risks",
                  duration: "24 hours",
                  icon: <Clock className="w-5 h-5" />
                },
                {
                  step: "2",
                  title: "Fact-Finding (3-5 Business Days)",
                  description: "Interview witnesses and review digital evidence",
                  duration: "3-5 days",
                  icon: <FileText className="w-5 h-5" />
                },
                {
                  step: "3",
                  title: "Adjudication",
                  description: "Decision based on preponderance of evidence",
                  duration: "As needed",
                  icon: <Scale className="w-5 h-5" />
                },
                {
                  step: "4",
                  title: "Resolution",
                  description: "Notify all parties and implement appropriate measures",
                  duration: "Completed",
                  icon: <CheckCircle className="w-5 h-5" />
                }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">{step.title}</h5>
                      <div className="flex items-center text-sm text-gray-500">
                        {step.icon}
                        <span className="ml-2">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "confidentiality",
      title: "Confidentiality & Protection",
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <Lock className="w-5 h-5 text-blue-600 mr-3" />
                <h4 className="font-semibold text-blue-800">Confidentiality</h4>
              </div>
              <p className="text-blue-700">
                All reports are kept on a "need-to-know" basis. The identity of the reporter will only be shared with those directly investigating the incident.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-red-600 mr-3" />
                <h4 className="font-semibold text-red-800">Non-Retaliation Policy</h4>
              </div>
              <p className="text-red-700">
                Spurvance Labs has a Zero-Tolerance Policy for Retaliation. Any attempt to penalize or intimidate a person for filing a report is a Tier-1 violation.
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-center mb-4">
              <Scale className="w-5 h-5 text-purple-600 mr-3" />
              <h4 className="font-semibold text-purple-800">Conflict of Interest</h4>
            </div>
            <p className="text-purple-700">
              If a member of the Conduct Committee or HR is named in a report, or has a close personal/professional relationship with any party involved, they must recuse themselves immediately. An external third party or an uninvolved Lab Lead will be appointed.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Code of Conduct | Spurvance Labs"
        description="Our Code of Conduct outlines expectations for all participants in the Spurvance Labs ecosystem. Learn about expected behavior, reporting procedures, and our commitment to a safe, inclusive environment."
        canonical="https://spurvancelabs.com/conduct"
      />

      {/* Hero */}
      <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Community Standards
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Code of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Conduct</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Our commitment to creating a welcoming, rigorous, and inspiring environment for all participants in the Spurvance Labs ecosystem.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
              <div className="text-sm text-gray-600">Tolerance Retaliation</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Confidential</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2026</div>
              <div className="text-sm text-gray-600">Last Updated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents Navigation */}
      <section className="py-12 px-4 bg-white border-b border-gray-100 top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setExpandedSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-3 cursor-pointer rounded-xl font-medium transition-all duration-300 flex items-center ${
                  expandedSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-3">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
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
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-5 ${
                    expandedSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                    <div className="flex items-center mt-2">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        expandedSection === section.id ? 'bg-cyan-500' : 'bg-gray-300'
                      }`}></div>
                      <span className="text-sm text-gray-500">
                        {expandedSection === section.id ? 'Click to collapse' : 'Click to expand'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {expandedSection === section.id && (
                <div className="animate-fadeIn">
                  <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-lg p-10">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reporting Form */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-10 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-500 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="relative text-center">
              <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
              <h2 className="text-4xl font-bold mb-6">Need to Report an Incident?</h2>
              <p className="text-cyan-100 text-lg mb-10 max-w-2xl mx-auto">
                We take all reports seriously. Your confidentiality and safety are our top priorities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:compliance@spurvance.com"
                  className="px-8 py-5 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Email Compliance Team
                </a>
                <a
                  href="/conduct/report-anonymous"
                  className="px-8 py-5 bg-transparent border-2 border-cyan-400/30 text-cyan-100 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Eye className="w-6 h-6 mr-3" />
                  Submit Anonymously
                </a>
              </div>
              
              <div className="mt-10 pt-8 border-t border-cyan-800/50">
                <p className="text-cyan-200 text-sm">
                  All reports handled with discretion. Response within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Information */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
                <FileText className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm font-semibold text-blue-700">
                  Legal Documentation
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-4">Attribution</h4>
                  <p className="text-gray-600">
                    This Code of Conduct is based on the TODO Group Open Code of Conduct templates, with modifications for the Spurvance Labs research environment.
                  </p>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-4">Agreement</h4>
                  <p className="text-gray-600">
                    By participating in Spurvance Labs activities, you agree to abide by this Code of Conduct, our Terms of Service, and Privacy Policy.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/terms"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/privacy"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/legal/documents"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  All Legal Documents
                </a>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Last Updated: January 1, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodeOfConduct;