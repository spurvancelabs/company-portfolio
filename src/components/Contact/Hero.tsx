/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import { 
  MessageSquare,
} from "lucide-react";

const Hero = () => {
  return (
          <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Secure & Official Communications
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Spurvance Labs</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Official communication channels for security disclosures, legal matters, press inquiries, and general communications with Pakistan's digital sovereignty initiative.
            </p>
          </div>

          {/* Important Notice */}
          {/* <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>For security vulnerabilities, use PGP encryption and follow our responsible disclosure policy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Legal communications are protected by attorney-client privilege when appropriate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Community questions are best answered in public forums for transparency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
  )
}

export default Hero