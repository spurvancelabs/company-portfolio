import { 
  Users, 
  FileCheck,
  ArrowRight,
  BadgeCheck,
  GitPullRequest,
  Search,
  UserCheck,
  Clock,
} from "lucide-react";

const ContributionProcess = () => {
  return (
          <section id="process" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Get Started</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this step-by-step process to make your first contribution.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Join & Introduce",
                description: "Join Discord/Matrix, read Code of Conduct, and introduce yourself in #introductions.",
                icon: <Users className="w-8 h-8" />,
                time: "10 minutes",
                link: "/community#join"
              },
              {
                step: "2",
                title: "Sign CLA",
                description: "Read and sign the Contributor License Agreement to grant usage rights.",
                icon: <FileCheck className="w-8 h-8" />,
                time: "5 minutes",
                link: "/cla"
              },
              {
                step: "3",
                title: "Find First Issue",
                description: "Browse 'good first issue' tagged issues on GitHub that match your skills.",
                icon: <Search className="w-8 h-8" />,
                time: "15-30 minutes",
                link: "https://github.com/spurvancelabs/contribute/issues"
              },
              {
                step: "4",
                title: "Submit PR",
                description: "Fork, code, test, and submit pull request following our guidelines.",
                icon: <GitPullRequest className="w-8 h-8" />,
                time: "1+ hours",
                link: "/contributing"
              },
              {
                step: "5",
                title: "Code Review",
                description: "Maintainers review for security, quality, and compliance before merging.",
                icon: <UserCheck className="w-8 h-8" />,
                time: "1-3 days",
                link: "/review-process"
              },
              {
                step: "6",
                title: "Get Recognition",
                description: "Receive contributor badge, certificate, and join contributor leaderboard.",
                icon: <BadgeCheck className="w-8 h-8" />,
                time: "After merge",
                link: "/certificate"
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>

                </div>
                {index < 5 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ContributionProcess