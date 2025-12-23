import {
  Shield,
  Users2,
  ShieldCheck,
  Scale,
  ArrowRight,
  Target,
  Mail,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
const CommunityGovernance = () => {
  return (
          <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Scale className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Community Governance
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Our Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Stays Healthy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear policies and governance structures to ensure respectful, productive collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Code of Conduct",
                description: "Based on Contributor Covenant, enforced by moderators",
                points: ["Zero tolerance for harassment", "Inclusive language requirements", "Professional conduct"],
                icon: <ShieldCheck className="w-8 h-8" />,
                link: "/conduct",
                color: "blue"
              },
              {
                title: "Moderation Policy",
                description: "Transparent moderation process and escalation paths",
                points: ["Clear violation reporting", "Appeal process", "Moderator training"],
                icon: <Users2 className="w-8 h-8" />,
                link: "/moderation",
                color: "purple"
              },
              {
                title: "Governance Model",
                description: "Community-elected steering committee and project leads",
                points: ["Quarterly elections", "Transparent decision making", "Community voting"],
                icon: <Target className="w-8 h-8" />,
                link: "/governance",
                color: "green"
              }
            ].map((policy, index) => (
              <div key={index} className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-2xl ${
                  policy.color === 'blue' ? 'bg-blue-100' :
                  policy.color === 'purple' ? 'bg-purple-100' :
                  'bg-green-100'
                } flex items-center justify-center mb-6`}>
                  <div className={
                    policy.color === 'blue' ? 'text-blue-600' :
                    policy.color === 'purple' ? 'text-purple-600' :
                    'text-green-600'
                  }>
                    {policy.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{policy.title}</h3>
                <p className="text-gray-600 mb-6">{policy.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {policy.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={policy.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  <span>Read Full Policy</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* Incident Reporting */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl border border-red-100 p-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-red-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Need to Report an Incident?</h3>
                </div>
                <p className="text-gray-600">
                  If you experience or witness behavior that violates our Code of Conduct, please report it immediately.
                  All reports are confidential and handled by our trained moderation team.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:conduct@spurvancelabs.com"
                  className="px-8 py-3.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Email Incident Report
                </a>
                <a
                  href="/conduct/report"
                  className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-300 text-center"
                >
                  Anonymous Reporting Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CommunityGovernance