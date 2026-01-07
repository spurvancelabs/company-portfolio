/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import React from "react";

const TermsOfService: React.FC = () => {
  const sections = [
    "OUR SERVICES",
    "INTELLECTUAL PROPERTY RIGHTS",
    "USER REPRESENTATIONS",
    "DONATIONS AND CHARITABLE CONTRIBUTIONS",
    "PROHIBITED ACTIVITIES",
    "USER GENERATED CONTRIBUTIONS",
    "CONTRIBUTION LICENSE",
    "SERVICES MANAGEMENT",
    "TERM AND TERMINATION",
    "MODIFICATIONS AND INTERRUPTIONS",
    "GOVERNING LAW",
    "DISPUTE RESOLUTION",
    "CORRECTIONS",
    "DISCLAIMER",
    "LIMITATIONS OF LIABILITY",
    "INDEMNIFICATION",
    "USER DATA PRIVACY & SECURITY",
    "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
    "MISCELLANEOUS",
    "CONTACT US",
    "ANTI-MONEY LAUNDERING & CFT COMPLIANCE",
    "FOREIGN FUNDING LIMITATIONS",
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated 1/1/2026</p>

      <p className="mb-4 text-gray-700">
        We are Spurvance Labs ("the Company," "we," "us," "our"). By using our services, you agree to the following legal terms. If you do not agree, you must stop using the Services immediately.
      </p>

      {/* Table of Contents */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
        <ul className="list-disc list-inside text-blue-600">
          {sections.map((section, idx) => (
            <li key={idx}>
              <a href={`#${section.replace(/\s+/g, "-")}`} className="hover:underline">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-gray-700">
        {sections.map((section, idx) => (
          <div key={idx} id={section.replace(/\s+/g, "-")}>
            <h3 className="text-2xl font-semibold mb-2">{section}</h3>
            <p className="mb-4">
              {/* Placeholder: You can replace with actual content or import from a JSON file */}
              Content for <strong>{section}</strong> goes here. Replace this paragraph with the full text of the section.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-md text-center">
        <p className="text-gray-600 text-sm">
          By continuing to use our Services, you acknowledge that you have read, understood, and agree to these Terms of Service. For questions, contact <a href="mailto:support@spurvancelabs.com" className="text-blue-600 underline">support@spurvancelabs.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
