import { 
  Users, 
  MessageSquare,
  ExternalLink,
  FileCode,
} from "lucide-react";
const AlternativeContact = () => {
  return (      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Alternative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Contact Methods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For non-urgent matters or general community interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Forums",
                description: "Public discussions for transparency and community support",
                link: "https://forum.spurvancelabs.com",
                icon: <Users className="w-8 h-8" />,
                bestFor: "Technical questions and community discussions"
              },
              {
                title: "GitHub Issues",
                description: "Bug reports, feature requests, and technical discussions",
                link: "https://github.com/spurvancelabs",
                icon: <FileCode className="w-8 h-8" />,
                bestFor: "Product feedback and development discussions"
              },
              {
                title: "Social Media",
                description: "General updates, announcements, and public engagement",
                link: "https://twitter.com/spurvancelabs",
                icon: <MessageSquare className="w-8 h-8" />,
                bestFor: "Public announcements and general engagement"
              }
            ].map((method, idx) => (
              <div key={idx} className="bg-white rounded-3xl border-2 border-gray-100 p-8">
                <div className="text-blue-600 mb-6">{method.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-500 mb-2">Best For:</div>
                  <div className="text-gray-700">{method.bestFor}</div>
                </div>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default AlternativeContact