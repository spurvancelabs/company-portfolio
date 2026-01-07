/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose prose-slate">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> January 1, 2026
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Consent</h2>
        <p>
          By using our Services, you acknowledge that you have read this Privacy Notice
          and provide your explicit consent to the collection, storage, and processing
          of your personal information as described herein. If you do not agree with
          these terms, please discontinue the use of our Services immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p>
          This Privacy Notice for Spurvance Labs ('we', 'us', or 'our') describes how
          and why we might access, collect, store, use, and/or share ('process') your
          personal information when you use our Services.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Visit our website at <a href="https://spurvancelabs.com" className="text-blue-600 hover:underline">https://spurvancelabs.com</a></li>
          <li>Engage with us in other related ways, including community events</li>
        </ul>
        <p>
          Questions or concerns? You can contact us at <a href="mailto:support@spurvancelabs.com" className="text-blue-600 hover:underline">support@spurvancelabs.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Summary of Key Points</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal information we process depends on your interaction with our Services.</li>
          <li>We usually don’t collect sensitive personal information.</li>
          <li>We may collect information from third parties and public sources.</li>
          <li>We process your information to provide services, improve security, and comply with the law.</li>
          <li>We share personal information only with specific third parties as needed.</li>
          <li>We implement organizational and technical security measures to protect your information.</li>
          <li>You have privacy rights depending on your jurisdiction.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>What information do we collect?</li>
          <li>How do we process your information?</li>
          <li>When and with whom do we share your personal information?</li>
          <li>Data residency and international transfers</li>
          <li>Third-party websites</li>
          <li>Cookies and tracking technologies</li>
          <li>AI-based products</li>
          <li>Social logins</li>
          <li>Retention periods</li>
          <li>Security measures</li>
          <li>Minors</li>
          <li>Privacy rights</li>
          <li>Do-not-track features</li>
          <li>Region-specific privacy rights</li>
          <li>Updates to this notice</li>
          <li>Contacting us</li>
          <li>Review, update, or delete your data</li>
          <li>Jurisdiction & governing law</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. What Information Do We Collect?</h2>
        <h3 className="text-xl font-medium mb-1">Personal Information You Disclose to Us</h3>
        <p>We collect personal information that you voluntarily provide to us when you express interest in our Services or contact us.</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Account Data:</strong> Names, usernames, email addresses, passwords.</li>
          <li><strong>Developer Metadata:</strong> GitHub/GitLab handles, SSH keys, job titles.</li>
          <li><strong>Public Contributions:</strong> Code, pull requests, comments (permanent in Git history).</li>
          <li><strong>Payment Data:</strong> Billing addresses, payment instruments (handled by third-party processors).</li>
        </ul>

        <h3 className="text-xl font-medium mb-1">Social Media Login Data</h3>
        <p>You may register using social media accounts (Facebook, X, etc.), and we collect profile info as described in "How We Handle Your Social Logins".</p>

        <h3 className="text-xl font-medium mb-1">Information Automatically Collected</h3>
        <p>We collect IP addresses, browser/device info, usage data, cookies, and analytics for security and reporting purposes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Process Your Information</h2>
        <p>We use your data to provide services, manage contributions, communicate updates, support volunteers, improve programs, ensure safety, comply with law, and improve products.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. When and With Whom We Share Your Information</h2>
        <p>We share information with vendors, service providers, law enforcement (when legally required), affiliates, program partners, public repositories, and other users in specific contexts.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">18. Jurisdiction & Governing Law</h2>
        <p>This Notice is governed by the laws of the Islamic Republic of Pakistan, including the Prevention of Electronic Crimes Act 2016 and Companies Act 2017. Disputes fall under the High Court of Lahore.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
