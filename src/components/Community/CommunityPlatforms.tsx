/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import {
  MessageSquare,
  ExternalLink,
  ArrowRight,
  GitBranch,
  MessageCircle,
} from "lucide-react";
const CommunityPlatforms = () => {
      const communityPlatforms = [
    {
      name: "GitHub Organization",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Primary development platform for all Spurvance Labs projects",
      purpose: "Code contributions, issue tracking, project management",
      members: "500+ developers",
      link: "https://github.com/spurvancelabs",
      color: "from-gray-900 to-gray-800",
      guidelines: "Follow CONTRIBUTING.md in each repository"
    },
    {
      name: "Discord Community",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Real-time chat for community discussions and support",
      purpose: "General discussion, help channels, project updates",
      members: "1000+ members",
      link: "https://discord.gg/spurvancelabs",
      color: "from-indigo-600 to-purple-600",
      guidelines: "Read #welcome and accept rules to access channels"
    },
    {
      name: "Whatsapp",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Decentralized, privacy-focused communication platform",
      purpose: "Privacy discussions, security channels, federation",
      members: "300+ members",
      link: "https://matrix.to/#/#spurvancelabs:matrix.org",
      color: "from-green-600 to-cyan-600",
      guidelines: "End-to-end encrypted rooms available"
    },

  ];
  return (
          <section id="platforms" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Community Gathers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred platform to connect, collaborate, and contribute.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {communityPlatforms.map((platform, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200"
              >
                <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      <div className="text-sm text-gray-500">{platform.members}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">Primary Purpose:</div>
                    <p className="text-gray-700">{platform.purpose}</p>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-medium text-gray-500 mb-2">Guidelines:</div>
                    <p className="text-sm text-gray-600">{platform.guidelines}</p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center"
                    >
                      <span>Join Platform</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-blue-500 to-cyan-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CommunityPlatforms