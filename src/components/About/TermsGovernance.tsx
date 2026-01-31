/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

const TermsGovernance = () => {
  return (
          <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built by Pakistanis, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">for Pakistan's Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines cybersecurity expertise, open-source experience, and a deep commitment to Pakistan's digital sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                role: "Founder & CEO/CTO",
                name: "Muhammad Abdullah",
                bio: "Specializes in encryption protocols and secure system design. Previously worked on government security projects.",
                focus: "Security Architecture"
              },
              {
                role: "Co-founder & COO/CLO",
                name: "Muhammad Hamza",
                bio: "Leads UX research and product planning. Focuses on making complex security technology accessible and managing legal things.",
                focus: "User Experience"
              },
            ].map((member, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">{member.name.charAt(0)}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm text-blue-600 font-semibold">{member.role}</div>
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                </div>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="text-sm text-gray-500">
                  <strong>Focus:</strong> {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TermsGovernance