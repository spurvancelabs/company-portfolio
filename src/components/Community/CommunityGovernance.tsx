/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import {
  ShieldCheck,
  Lock,
  FileText,
  Shield,
  Scale,
  ArrowRight,
  Mail,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const CommunityGovernance = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
            <Scale className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Policies & Trust
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Transparency & Respect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear policies that protect contributors, users, and the Spurvance Labs community.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Code of Conduct",
              description: "Standards for respectful and inclusive collaboration",
              points: [
                "Zero tolerance for harassment",
                "Inclusive & professional communication",
                "Enforced by project maintainers"
              ],
              icon: <ShieldCheck className="w-8 h-8" />,
              link: "/conduct",
              color: "blue"
            },
            {
              title: "Privacy Policy",
              description: "How we collect, use, and protect personal data",
              points: [
                "Minimal data collection",
                "No tracking or ads",
                "GDPR-aligned principles"
              ],
              icon: <Lock className="w-8 h-8" />,
              link: "/privacy",
              color: "purple"
            },
            {
              title: "Terms of Use",
              description: "Rules for using our website, services, and software",
              points: [
                "User responsibilities",
                "Acceptable use",
                "Limitation of liability"
              ],
              icon: <FileText className="w-8 h-8" />,
              link: "/terms",
              color: "green"
            },

          ].map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                  ${policy.color === "blue" && "bg-blue-100 text-blue-600"}
                  ${policy.color === "purple" && "bg-purple-100 text-purple-600"}
                  ${policy.color === "green" && "bg-green-100 text-green-600"}
                  ${policy.color === "red" && "bg-red-100 text-red-600"}
                `}
              >
                {policy.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {policy.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {policy.description}
              </p>

              <ul className="space-y-2 mb-6">
                {policy.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to={policy.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Read Policy
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Incident Reporting */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl border border-red-100 p-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Report a Conduct Issue
                </h3>
              </div>
              <p className="text-gray-600">
                If you experience or witness behavior that violates our Code of Conduct,
                please contact us. All reports are handled confidentially by maintainers.
              </p>
            </div>

            <a
              href="mailto:support@spurvancelabs.com"
              className="px-8 py-3.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-3" />
              Email Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGovernance;
