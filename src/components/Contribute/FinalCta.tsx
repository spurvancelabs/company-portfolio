/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { 
  GitBranch,
  Star,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const FinalCta = () => {
  return (
          <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
            <Star className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700">
              Your Contribution Matters
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Pakistan's Digital Sovereignty?
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of Pakistani contributors building technology that keeps our digital future secure, open, and controlled by Pakistanis.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a
              href="https://github.com/spurvancelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 rounded-xl bg-gradient-to-r from-gray-900 to-blue-900 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
            >
              <GitBranch className="w-6 h-6 mr-3" />
              Start on GitHub
            </a>

            <Link
              to="/community"
              className="px-8 py-5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Join Community
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              Questions? Contact <a href="mailto:support@spurvancelabs.com" className="text-blue-600 hover:underline">support@spurvancelabs.com</a>
            </p>
            <p className="text-gray-400 text-xs mt-2">
              All contributions subject to legal review and security assessment.
            </p>
          </div>
        </div>
      </section>
  )
}

export default FinalCta