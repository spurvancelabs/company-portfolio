import { 
  Shield, 
  Globe, 
  CheckCircle,
  Key,
  FileCode,
  Download,
  Award,
  BookOpen,
  Zap,
  ArrowRight
} from "lucide-react";
const SecurityCommunication = () => {


  const securityPolicy = {
    encryption: {
      pgpKey: "https://spurvancelabs.com/security/pgp.asc",
      keyId: "0xABCD1234EF567890",
      fingerprint: "ABCD 1234 EF56 7890 1234 5678 90AB CDEF 1234 5678"
    },
    disclosurePolicy: {
      timeline: "90-day responsible disclosure",
      bounty: "Eligible for bug bounty program",
      scope: "All Spurvance Labs products and infrastructure"
    },
    reportingGuidelines: [
      "Use encrypted email for sensitive reports",
      "Include proof of concept or detailed description",
      "Do not test on production without permission",
      "Allow reasonable time for remediation"
    ]
  };
  return (
         <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 mb-8">
              <Shield className="w-5 h-5 text-red-600 mr-3" />
              <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">
                Security Communications
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Responsible <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Security Disclosure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take security seriously. Please follow these guidelines for responsible vulnerability disclosure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl border-2 border-red-100 p-8">
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">PGP Encryption</h3>
              </div>
              <p className="text-gray-600 mb-6">
                For sensitive security reports, please encrypt your communications using our PGP key.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-500">Key ID:</div>
                  <div className="font-mono text-sm bg-gray-100 p-3 rounded-lg">
                    {securityPolicy.encryption.keyId}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Fingerprint:</div>
                  <div className="font-mono text-sm bg-gray-100 p-3 rounded-lg">
                    {securityPolicy.encryption.fingerprint}
                  </div>
                </div>
              </div>
              <a
                href={securityPolicy.encryption.pgpKey}
                className="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PGP Key
              </a>
            </div>

            <div className="bg-white rounded-3xl border-2 border-orange-100 p-8">
              <div className="flex items-center mb-6">
                <FileCode className="w-8 h-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Disclosure Policy</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">{securityPolicy.disclosurePolicy.timeline}</div>
                    <div className="text-sm text-gray-600">Standard disclosure timeline</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">{securityPolicy.disclosurePolicy.bounty}</div>
                    <div className="text-sm text-gray-600">For qualified vulnerabilities</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">{securityPolicy.disclosurePolicy.scope}</div>
                    <div className="text-sm text-gray-600">All products and infrastructure</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl border-2 border-amber-100 p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-amber-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Reporting Guidelines</h3>
              </div>
              <ul className="space-y-3">
                {securityPolicy.reportingGuidelines.map((guideline, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    {guideline}
                  </li>
                ))}
              </ul>
              <a
                href="/security/policy"
                className="mt-6 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
              >
                <span>Read Full Security Policy</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

        </div>
      </section>
  )
}

export default SecurityCommunication