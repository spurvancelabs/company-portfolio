/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import {
  Trophy,
  // TrendingUp,
  CheckCircle
} from "lucide-react";
// import { Link } from "react-router-dom";
const RecognitionRewards = () => {

  const recognitionTiers = [
    {
      tier: "Community Member",
      requirements: "Join any platform, follow Code of Conduct",
      perks: ["Access to community channels", "Event notifications", "Basic support"],
      badge: "🏅",
      color: "blue"
    },
    {
      tier: "Active Contributor",
      requirements: "1+ merged PRs or regular participation",
      perks: ["Contributor badge", "Early feature access", "Mentorship eligibility"],
      badge: "🥈",
      color: "purple"
    },
    {
      tier: "Community Leader",
      requirements: "Lead project or moderate community",
      perks: ["Leadership certificate", "Swag package", "Conference invites"],
      badge: "🥇",
      color: "amber"
    },
    {
      tier: "Ambassador",
      requirements: "Establish university chapter or major contribution",
      perks: ["Ambassador title", "Travel grants", "Advisory opportunities"],
      badge: "🏆",
      color: "green"
    }
  ];

  return (
          <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Trophy className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Community Recognition
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Recognized</span> for Your Contributions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We celebrate and reward community members who help build Pakistan's digital sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {recognitionTiers.map((tier, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl border-2 border-gray-100 shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{tier.badge}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.tier}</h3>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">Requirements:</div>
                    <p className="text-gray-700">{tier.requirements}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Perks & Benefits:</div>
                    <ul className="space-y-2">
                      {tier.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`h-2 ${
                  tier.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  tier.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  tier.color === 'amber' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                  'bg-gradient-to-r from-green-500 to-green-600'
                }`} />
              </div>
            ))}
          </div>

          {/* Leaderboard Preview */}
          {/* <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Community Leaderboard</h3>
                <p className="text-gray-600">Top contributors recognized monthly for their impact</p>
              </div>
              <Link
                to="/community/leaderboard"
                className="mt-4 md:mt-0 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center"
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                View Full Leaderboard
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { rank: "🥇", name: "Ahmad R.", contributions: "142 PRs", role: "Security Lead" },
                { rank: "🥈", name: "Sara K.", contributions: "89 PRs", role: "UI/UX Designer" },
                { rank: "🥉", name: "Zain M.", contributions: "76 PRs", role: "Backend Developer" }
              ].map((contributor, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{contributor.rank}</div>
                    <div>
                      <div className="font-bold text-gray-900">{contributor.name}</div>
                      <div className="text-sm text-gray-500">{contributor.role}</div>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <div className="font-semibold">{contributor.contributions}</div>
                    <div className="text-sm text-gray-500">merged this quarter</div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
  )
}

export default RecognitionRewards