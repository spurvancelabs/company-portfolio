import { 
  Lock, 
  Code, 
  Globe, 
  Users, 
  Target,
  ArrowRight
} from 'lucide-react';
import {Link} from "react-router-dom";
const Mission = () => {
  return (
    <>
          {/* Mission & Vision Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission Card */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl rotate-12"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 mr-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Mission</div>
                    <h3 className="text-3xl font-bold text-gray-900">Digital Independence Through Technology</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're breaking Pakistan's dependency on foreign technology platforms by building secure, 
                  open-source alternatives that prioritize user privacy, data sovereignty, and local innovation.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">Create Pakistan's first complete digital ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">Empower local developers with world-class tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">Establish Pakistan as a global cybersecurity leader</span>
                  </li>
                </ul>
                <Link
                  to={"/about"}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Our Complete Story</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>

            {/* Vision & Values */}
            <div>
              <div className="mb-12">
                <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-4">Our Vision</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  A Pakistan Where Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">Serves Its People</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a future where every Pakistani can communicate, collaborate, and create using 
                  technology built with their values, privacy, and security at heart—free from foreign surveillance 
                  and corporate exploitation.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Security First</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Every line of code is written with security as the non-negotiable foundation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-2xl border border-cyan-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Community Driven</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Built by Pakistanis, for Pakistanis. Our community shapes our direction.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Global Standards</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    World-class technology that competes globally while serving locally.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Radical Transparency</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    All our code is open for inspection. No hidden agendas, no secret features.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <h4 className="text-2xl font-bold mb-2">Ready to Build With Us?</h4>
                    <p className="text-blue-200">
                      Join hundreds of Pakistani developers shaping our digital future.
                    </p>
                  </div>
                  <Link
                    to={"/contribute"}
                    className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 hover:scale-[1.05] transition-all duration-300 whitespace-nowrap"
                  >
                    Start Contributing Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Mission