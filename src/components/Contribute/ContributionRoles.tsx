import { 
  Target,
    Code, 
  BookOpen,
  Users2,
  ShieldCheck,
  Palette, 
  Scale
} from "lucide-react";

const ContributionRoles = () => {
      const roles = [
    {
      title: "Security Engineering",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Build encryption systems, conduct security audits, and implement privacy-preserving features.",
      examples: ["Cryptography", "Penetration Testing", "Security Architecture", "Compliance"],
      level: "Advanced",
      timeCommitment: "10+ hrs/week",
      priority: "High",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Software Development",
      icon: <Code className="w-6 h-6" />,
      description: "Contribute to N-Chat, operating systems, developer tools, and infrastructure projects.",
      examples: ["React/React Native", "Node.js/Go", "Mobile Development", "DevOps"],
      level: "Intermediate+",
      timeCommitment: "5+ hrs/week",
      priority: "High",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Design & UX Research",
      icon: <Palette className="w-6 h-6" />,
      description: "Design privacy-first interfaces, conduct user research, and improve accessibility.",
      examples: ["UI/UX Design", "User Research", "Accessibility", "Design Systems"],
      level: "All Levels",
      timeCommitment: "3+ hrs/week",
      priority: "Medium",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Technical Documentation",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Write guides, API documentation, and research papers in English and Urdu.",
      examples: ["API Docs", "Tutorials", "Whitepapers", "Localization"],
      level: "All Levels",
      timeCommitment: "2+ hrs/week",
      priority: "Medium",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      title: "Community Leadership",
      icon: <Users2 className="w-6 h-6" />,
      description: "Moderate forums, organize events, mentor newcomers, and build local chapters.",
      examples: ["Community Mgmt", "Event Planning", "Mentorship", "University Chapters"],
      level: "All Levels",
      timeCommitment: "3+ hrs/week",
      priority: "Medium",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Legal & Compliance",
      icon: <Scale className="w-6 h-6" />,
      description: "Review licenses, ensure regulatory compliance, and draft contributor agreements.",
      examples: ["License Review", "GDPR Compliance", "Contract Drafting", "Policy"],
      level: "Advanced",
      timeCommitment: "5+ hrs/week",
      priority: "High",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
  ];

  return (
          <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Your Skills Matter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We need diverse talents to build Pakistan's complete digital ecosystem. Find your role below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200"
              >
                <div className={`h-2 bg-gradient-to-r ${role.color}`} />
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} shadow-lg mr-5`}>
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 ${role.bgColor} text-gray-700 rounded-full`}>
                          {role.level}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{role.timeCommitment}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-500 mb-3">Focus Areas:</div>
                    <div className="flex flex-wrap gap-2">
                      {role.examples.map((ex, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-3 py-1.5 ${role.bgColor} text-gray-700 rounded-full border ${role.borderColor}`}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Target className="w-4 h-4 mr-2 text-blue-500" />
                      <span className={role.priority === "High" ? "text-red-600 font-semibold" : ""}>
                        {role.priority} Priority
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                      View Open Tasks
                    </button>
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

export default ContributionRoles