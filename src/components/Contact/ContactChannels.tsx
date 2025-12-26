import {
  Mail,
  Lock,
  Scale,
  Globe,
  Users,
  Building,
} from "lucide-react";

const ContactChannels = () => {
  const channels = [
    {
      title: "General Contact",
      icon: <Mail className="w-6 h-6" />,
      description: "General questions, partnerships, or information about Spurvance Labs",
      email: "contact@spurvancelabs.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Security Reports",
      icon: <Lock className="w-6 h-6" />,
      description: "Responsible disclosure of security vulnerabilities",
      email: "security@spurvancelabs.com",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Legal & Compliance",
      icon: <Scale className="w-6 h-6" />,
      description: "Legal inquiries, policy questions, and compliance matters",
      email: "legal@spurvancelabs.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Community & Contributions",
      icon: <Users className="w-6 h-6" />,
      description: "Open-source contributions, community questions, and onboarding",
      email: "community@spurvancelabs.com",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Press & Media",
      icon: <Globe className="w-6 h-6" />,
      description: "Media inquiries and public communications",
      email: "press@spurvancelabs.com",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Business & Partnerships",
      icon: <Building className="w-6 h-6" />,
      description: "Commercial discussions and partnership proposals",
      email: "business@spurvancelabs.com",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Spurvance Labs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach us through the appropriate channel for faster and clearer communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition"
            >
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-8">
                <div className="flex items-center mb-4 text-blue-600">
                  {c.icon}
                  <h3 className="ml-3 text-xl font-bold text-gray-900">{c.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{c.description}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
                >
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;
