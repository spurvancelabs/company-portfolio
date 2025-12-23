import { 
  Mail, 
  Globe, 
  Users, 
  FileText, 
  Lock, 
  Scale,
  Building,
  CheckCircle,
  Clock,
  Key,
} from "lucide-react";
const ContactChannels = () => {


  const contactChannels = [
    {
      title: "General Inquiries",
      icon: <Mail className="w-6 h-6" />,
      description: "Questions about Spurvance Labs, partnerships, or general information",
      email: "contact@spurvancelabs.com",
      responseTime: "1-2 business days",
      confidentiality: "Standard",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      guidelines: [
        "Include clear subject line",
        "Specify purpose of inquiry",
        "Allow 48 hours for response"
      ]
    },
    {
      title: "Security & Vulnerabilities",
      icon: <Lock className="w-6 h-6" />,
      description: "Responsible disclosure of security vulnerabilities (see Security Policy)",
      email: "security@spurvancelabs.com",
      responseTime: "24 hours (critical)",
      confidentiality: "High - PGP Encryption Recommended",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      guidelines: [
        "Use PGP key for sensitive info",
        "Follow responsible disclosure policy",
        "Do not disclose publicly until fixed"
      ],
      pgpKey: "https://spurvancelabs.com/security/pgp.asc"
    },
    {
      title: "Legal & Compliance",
      icon: <Scale className="w-6 h-6" />,
      description: "Legal inquiries, compliance matters, and regulatory communications",
      email: "legal@spurvancelabs.com",
      responseTime: "2-3 business days",
      confidentiality: "High - Attorney-Client Privileged",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      guidelines: [
        "Mark as 'Legal Matter' in subject",
        "Include relevant jurisdiction",
        "Legal representatives only"
      ]
    },
    {
      title: "Press & Media",
      icon: <Globe className="w-6 h-6" />,
      description: "Media inquiries, interview requests, and press releases",
      email: "press@spurvancelabs.com",
      responseTime: "1 business day",
      confidentiality: "Standard",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      guidelines: [
        "Include media outlet and deadline",
        "Attach press credentials if applicable",
        "Allow 24 hours for response"
      ],
      pressKit: "https://spurvancelabs.com/press-kit.zip"
    },
    {
      title: "Community & Contributions",
      icon: <Users className="w-6 h-6" />,
      description: "Questions about contributing, community events, and onboarding",
      email: "community@spurvancelabs.com",
      responseTime: "1-2 business days",
      confidentiality: "Standard",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      guidelines: [
        "Check documentation first",
        "Include GitHub username if applicable",
        "Use community channels for quick questions"
      ]
    },
    {
      title: "Business & Partnerships",
      icon: <Building className="w-6 h-6" />,
      description: "Enterprise inquiries, partnership proposals, and commercial discussions",
      email: "business@spurvancelabs.com",
      responseTime: "2 business days",
      confidentiality: "Confidential - NDA Required",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      guidelines: [
        "Include company information",
        "Specify partnership type",
        "NDA available upon request"
      ]
    }
  ];
  return (
         <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Contact Channels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the appropriate channel based on your inquiry type and required confidentiality level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactChannels.map((channel, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200"
              >
                <div className={`h-2 bg-gradient-to-r ${channel.color}`} />
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{channel.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        Response: {channel.responseTime}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {channel.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-500 mb-2">Confidentiality:</div>
                    <div className={`text-sm px-3 py-1.5 rounded-lg inline-block ${channel.bgColor} ${channel.borderColor} border`}>
                      {channel.confidentiality}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-medium text-gray-500 mb-3">Guidelines:</div>
                    <ul className="space-y-2">
                      {channel.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={`mailto:${channel.email}`}
                      className="block px-6 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-500/30 hover:scale-[1.02] transition-all duration-300 text-center"
                    >
                      Email: {channel.email}
                    </a>
                    
                    {channel.pgpKey && (
                      <a
                        href={channel.pgpKey}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                      >
                        <Key className="w-5 h-5 mr-2" />
                        Download PGP Key
                      </a>
                    )}

                    {channel.pressKit && (
                      <a
                        href={channel.pressKit}
                        className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Download Press Kit
                      </a>
                    )}
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

export default ContactChannels