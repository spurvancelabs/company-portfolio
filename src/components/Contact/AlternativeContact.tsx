import { 
  Users, 
  MessageSquare,
  ExternalLink,
  Camera,
} from "lucide-react";

const AlternativeContact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Connect With Us on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Social Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow Spurvance Labs for updates, announcements, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Instagram",
              description: "Visual updates, project highlights, and behind-the-scenes content",
              link: "https://instagram.com/spurvancelabs",
              icon: <Camera className="w-8 h-8" />,
              bestFor: "General audience, students, and community awareness"
            },
            {
              title: "X (Twitter)",
              description: "Product announcements, open-source updates, and tech discussions",
              link: "https://x.com/spurvancelabs",
              icon: <MessageSquare className="w-8 h-8" />,
              bestFor: "Tech updates, releases, and public announcements"
            },
            {
              title: "Facebook",
              description: "Community posts, events, and local outreach in Pakistan",
              link: "https://facebook.com/spurvancelabs",
              icon: <Users className="w-8 h-8" />,
              bestFor: "Local community, outreach, and broader visibility"
            }
          ].map((method, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-6">
                {method.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {method.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {method.description}
              </p>

              <div className="mb-8">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Best For:
                </div>
                <div className="text-gray-700">
                  {method.bestFor}
                </div>
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
  );
};

export default AlternativeContact;
