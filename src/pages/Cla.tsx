/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import React, { useState } from "react";

const ContributorLicenseAgreement: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    publicName: "",
    github: "",
    country: "",
    email: "",
    discord: "",
    notifyProject: "",
    signature: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for submitting your Contributor License Agreement! Please email a PDF copy to contribution@spurvancelabs.com");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Individual Contributor License Agreement (CLA)</h1>
      <p className="mb-6 text-gray-700">
        Thank you for your interest in Spurvance Labs. Please complete this agreement and email a PDF copy to <a href="mailto:contribution@spurvancelabs.com" className="text-blue-600 underline">contribution@spurvancelabs.com</a>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your full legal name"
            />
            <p className="text-xs text-gray-500 mt-1">If not entered, your full name will be public.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Public Name *</label>
            <input
              type="text"
              name="publicName"
              value={formData.publicName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name displayed publicly"
            />
            <p className="text-xs text-gray-500 mt-1">Do not include honorifics, suffixes, or middle names.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">GitHub / GitLab *</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. github.com/username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Country *</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Country of residence"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Discord ID (optional)</label>
            <input
              type="text"
              name="discord"
              value={formData.discord}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Discord username#1234"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Notify Project (optional)</label>
            <input
              type="text"
              name="notifyProject"
              value={formData.notifyProject}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Project you want to notify"
            />
          </div>
        </div>

        {/* Signature Section */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Signature</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Signature *</label>
              <input
                type="text"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                required
                placeholder="Type your name as signature"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            By signing, you agree to our <a href="https://spurvancelabs.com/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> and <a href="https://spurvancelabs.com/terms" className="text-blue-600 underline">Terms & Conditions</a>.
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit CLA
        </button>
      </form>
    </div>
  );
};

export default ContributorLicenseAgreement;
