import { Code, Users, Sparkles,  Heart, ArrowRight, Zap, Star, Users2 } from 'lucide-react';
import {Link} from "react-router-dom"
const WhatYouCanDo = () => {
  const opportunities = [
    {
      title: "Write Secure Code",
      description: "Contribute to N-Chat's encryption layer, build privacy-focused features, or optimize our open-source infrastructure. Every line of code strengthens Pakistan's digital sovereignty.",
      icon: <Code className="w-6 h-6" />,
      cta: "View Open Issues",
      href: "/contribute",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200",
      stats: "50+ PRs merged weekly",
      roleExamples: ["Security Engineers", "Backend Developers", "Mobile Developers"]
    },
    {
      title: "Lead Communities",
      description: "Start university chapters, moderate discussions, or organize hackathons. Help grow Pakistan's largest open-source community focused on digital independence.",
      icon: <Users2 className="w-6 h-6" />,
      cta: "Join Discord",
      href: "/community",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-100/50",
      borderColor: "border-cyan-200",
      stats: "1,000+ community members",
      roleExamples: ["Community Managers", "Campus Ambassadors", "Content Creators"]
    },
{
  title: "Earn Contributor Certificate",
  description: "Make meaningful open-source contributions and receive an official Spurvance Labs Contributor Certificate. Verified work, public recognition, and proof of impact you can use anywhere.",
  icon: <Star className="w-6 h-6" />,
  cta: "View Certificate Criteria",
  href: "/certificate",
  gradient: "from-indigo-500 to-blue-600",
  bgGradient: "from-indigo-50 to-blue-100/50",
  borderColor: "border-indigo-200",
  stats: "Certificates issued quarterly",
  roleExamples: ["Developers", "Designers", "Researchers", "Community Leads"]
}

  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Brand Promise */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Join The Movement
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pakistan's Digital Future</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're a developer, designer, student, or visionary—your skills can help create 
            technology that serves <span className="font-semibold text-blue-700">Pakistan first</span>.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opp, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Gradient Header */}
              <div className={`relative h-2 bg-gradient-to-r ${opp.gradient}`} />
              
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${opp.gradient} shadow-lg shadow-blue-500/25 mr-5`}>
                    <div className="text-white">
                      {opp.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {opp.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opp.description}
                </p>

                {/* Role Examples */}
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-500 mb-3">Perfect for:</div>
                  <div className="flex flex-wrap gap-2">
                    {opp.roleExamples.map((role, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Zap className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{opp.stats}</span>
                  </div>
                  <Link
                    to={opp.href}
                    className={`px-6 py-3 bg-gradient-to-r ${opp.gradient} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center`}
                  >
                    <span>{opp.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-500 to-cyan-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Benefits Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white overflow-hidden">
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">Portfolio Impact</h4>
                <p className="text-blue-100 text-sm">
                  Build real products used by millions. Your contributions are visible to employers worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">Mentorship</h4>
                <p className="text-blue-100 text-sm">
                  Learn from Pakistan's top security engineers and open-source veterans.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2">Paid Opportunities</h4>
                <p className="text-blue-100 text-sm">
                  Top contributors get priority for paid roles, internships, and leadership positions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start? Here's Your Path
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Join Discord", desc: "Introduce yourself", color: "bg-blue-500" },
              { step: "2", title: "Pick an Issue", desc: "Start with 'good first issue'", color: "bg-cyan-500" },
              { step: "3", title: "Submit PR", desc: "Get code reviewed", color: "bg-indigo-500" },
              { step: "4", title: "Grow with Us", desc: "Take on leadership", color: "bg-blue-600" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {item.step}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-3/4 w-full h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
{/* Support Section */}
<div className="mt-20 text-center">
  <h3 className="text-3xl font-bold text-gray-900 mb-4">
    Support Open-Source Development
  </h3>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
    Spurvance Labs is community-driven and open-source. Small donations help us
    maintain infrastructure, security audits, and contributor recognition programs.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <Link
      to="/donate"
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
    >
      <Heart className="w-5 h-5 mr-2" />
      Support with a Small Donation
    </Link>

    <Link
      to="/contribute"
      className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
    >
      <Code className="w-5 h-5 mr-2" />
      Contribute Instead
    </Link>
  </div>

  <p className="text-sm text-gray-500 mt-4">
    Donations are optional. Contributions always matter more.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo;