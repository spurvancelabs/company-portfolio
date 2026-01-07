/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { 
  Award, 
  CheckCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const CertificationFramework = () => {
      const contributionLevels = [
    {
      level: "Level 1: Contributor",
      requirements: "1+ merged PRs or meaningful contribution",
      certificate: "Digital Contributor Badge",
      perks: ["GitHub recognition", "Community access", "Newsletter"],
      color: "blue"
    },
    {
      level: "Level 2: Maintainer",
      requirements: "10+ merged PRs & mentorship experience",
      certificate: "Verified Contributor Certificate",
      perks: ["Digital certificate", "Priority support", "Project access"],
      color: "purple"
    },
    {
      level: "Level 3: Core Contributor",
      requirements: "50+ merged PRs & leadership role",
      certificate: "Core Contributor Certificate",
      perks: ["Physical certificate", "Swag pack", "Leadership opportunities"],
      color: "amber"
    },
    {
      level: "Level 4: Project Lead",
      requirements: "100+ merged PRs & project ownership",
      certificate: "Project Lead Certification",
      perks: ["Official title", "Paid opportunities", "Conference invites"],
      color: "green"
    },
  ];
  return (
          <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              {/* <Certificate className="w-5 h-5 text-blue-600 mr-3" /> */}
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Official Recognition Program
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contributor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Certification Levels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn verifiable credentials that demonstrate your contributions to Pakistan's digital sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionLevels.map((level, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden bg-gradient-to-b from-white to-gray-50 rounded-3xl border-2 ${
                  level.color === 'blue' ? 'border-blue-200' :
                  level.color === 'purple' ? 'border-purple-200' :
                  level.color === 'amber' ? 'border-amber-200' :
                  'border-green-200'
                } shadow-lg`}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${
                    level.color === 'blue' ? 'bg-blue-100' :
                    level.color === 'purple' ? 'bg-purple-100' :
                    level.color === 'amber' ? 'bg-amber-100' :
                    'bg-green-100'
                  } flex items-center justify-center mb-6`}>
                    <Award className={`w-8 h-8 ${
                      level.color === 'blue' ? 'text-blue-600' :
                      level.color === 'purple' ? 'text-purple-600' :
                      level.color === 'amber' ? 'text-amber-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.level}</h3>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">Requirements:</div>
                    <p className="text-gray-700">{level.requirements}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">Certificate:</div>
                    <p className="font-semibold text-gray-900">{level.certificate}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Perks:</div>
                    <ul className="space-y-2">
                      {level.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`h-2 ${
                  level.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  level.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  level.color === 'amber' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                  'bg-gradient-to-r from-green-500 to-green-600'
                }`} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/certificate/verify"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              <ShieldCheck className="w-5 h-5 mr-2" />
              Verify Contributor Certificates
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CertificationFramework