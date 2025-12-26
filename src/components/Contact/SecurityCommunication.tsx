import {
  Shield,
  Key,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const SecurityCommunication = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-red-50 border border-red-100 mb-8">
            <Shield className="w-5 h-5 text-red-600 mr-3" />
            <span className="text-sm font-semibold text-red-700 uppercase">
              Security
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Responsible Security Disclosure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We welcome responsible security research and reports that help keep our systems safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8">
            <div className="flex items-center mb-4">
              <Key className="w-8 h-8 text-red-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Secure Contact</h3>
            </div>
            <p className="text-gray-600 mb-6">
              For sensitive vulnerability reports, please contact us via email.
              PGP encryption is recommended for confidential information.
            </p>
            <a
              href="mailto:security@spurvancelabs.com"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
            >
              security@spurvancelabs.com
            </a>
          </div>

          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Security Policy</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our security policy outlines responsible testing guidelines and reporting expectations.
            </p>
            <a
              href="/security"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Read Security Policy
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCommunication;
