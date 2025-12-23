import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  FileText, 
  Shield,
  Lock,
  Code,
  Heart,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Users,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../Logo.tsx"
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Legal documents (you'll need to create these pages/files)
  const legalDocuments = [
    { name: 'Privacy Policy', href: '/privacy', icon: <Lock className="w-3 h-3" /> },
    { name: 'Terms of Service', href: '/terms', icon: <FileText className="w-3 h-3" /> },
    { name: 'Code of Conduct', href: '/conduct', icon: <Users className="w-3 h-3" /> },
    { name: 'Security Policy', href: '/security', icon: <Shield className="w-3 h-3" /> },
    { name: 'Contributor License Agreement', href: '/cla', icon: <Code className="w-3 h-3" /> },
    { name: 'Cookie Policy', href: '/cookies', icon: <Shield className="w-3 h-3" /> },
  ];

  const openSourceLicenses = [
    { name: 'GNU GPL v3', href: 'https://www.gnu.org/licenses/gpl-3.0.html', desc: 'Primary License' },
    { name: 'Apache 2.0', href: 'https://www.apache.org/licenses/LICENSE-2.0', desc: 'Components' },
    { name: 'MIT', href: 'https://opensource.org/licenses/MIT', desc: 'Libraries' },
    { name: 'CC BY-SA 4.0', href: 'https://creativecommons.org/licenses/by-sa/4.0/', desc: 'Documentation' },
  ];

  const complianceStandards = [
    { name: 'GDPR Compliant', verified: true },
    { name: 'ISO 27001 Framework', verified: false },
    { name: 'PTA Guidelines', verified: true },
    { name: 'Zero-Knowledge Architecture', verified: true },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
<Logo size='lg'/>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Spurvance Labs is a Pakistan-based multinational technology company 
              operating as a dual-entity structure: a non-profit foundation for 
              open-source development and a public benefit corporation for 
              commercial sustainability.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1.5 bg-blue-900/30 border border-blue-800 rounded-lg text-sm">
                🇵🇰 Registered in Pakistan
              </div>
              <div className="px-3 py-1.5 bg-green-900/30 border border-green-800 rounded-lg text-sm">
                🏛️ SECP Compliant
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-400" />
              Community
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contribute" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-2" />
                  Contribute
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-2" />
                  Join Community
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Heart className="w-3 h-3 mr-2" />
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-2" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Scale className="w-5 h-5 mr-2 text-blue-400" />
              Legal & Compliance
            </h4>
            <ul className="space-y-3">
              {legalDocuments.map((doc) => (
                <li key={doc.name}>
                  <Link 
                    to={doc.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
                  >
                    <span className="mr-2">{doc.icon}</span>
                    {doc.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h5 className="text-sm font-semibold mb-3 text-gray-300">Compliance Status</h5>
              <div className="space-y-2">
                {complianceStandards.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{item.name}</span>
                    {item.verified ? (
                      <span className="text-xs px-2 py-0.5 bg-green-900/30 text-green-400 rounded">Verified</span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded">In Progress</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              Contact
            </h4>
            
            <div className="space-y-4 mb-8">
              <div>
                <div className="text-sm text-gray-400 mb-1">General Inquiries</div>
                <a 
                  href="mailto:contact@spurvancelabs.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contact@spurvancelabs.com
                </a>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Legal & Security</div>
                <a 
                  href="mailto:legal@spurvancelabs.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  legal@spurvancelabs.com
                </a>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Press & Media</div>
                <a 
                  href="mailto:press@spurvancelabs.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  press@spurvancelabs.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/spurvancelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/spurvancelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/spurvancelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/spurvancelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Discord"
              >
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Open Source Licensing Section */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h5 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                Open Source Licensing
              </h5>
              <p className="text-gray-400 text-sm max-w-2xl">
                All Spurvance Labs projects are released under OSI-approved open source licenses. 
                Commercial use requires compliance with respective license terms and may require 
                a commercial license for proprietary integration.
              </p>
            </div>
            
            <a
              href="/licensing"
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center"
            >
              <span>View All Licenses</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {openSourceLicenses.map((license) => (
              <a
                key={license.name}
                href={license.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-600 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{license.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{license.desc}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Regulatory Disclosures */}
        <div className="mt-10 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
          <h6 className="font-semibold mb-3 text-gray-300">Regulatory Disclosures</h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Data Processing</div>
              <div className="text-gray-300">Data processed within Pakistan where possible. EU data processed under GDPR adequacy decisions.</div>
            </div>
            <div>
              <div className="text-gray-400">Encryption Standards</div>
              <div className="text-gray-300">AES-256, ChaCha20, Ed25519, Curve25519. No government backdoors implemented.</div>
            </div>
            <div>
              <div className="text-gray-400">Transparency</div>
              <div className="text-gray-300">Independent security audits conducted annually. Results published on security page.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright & Legal */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm">
                © {currentYear} Spurvance Labs. All rights reserved.
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Spurvance Labs Foundation (Non-Profit) • Spurvance Labs PBC (Public Benefit Corporation)
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link to="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility Statement
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/status" className="hover:text-white transition-colors">
                System Status
              </Link>
            </div>

            {/* Version & Build */}
            <div className="text-xs text-gray-500 flex items-center">
              <Code className="w-3 h-3 mr-2" />
              v1.0.0-alpha • Build #{'local'}
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Disclosures (if applicable) */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs text-gray-500">
            <p>
              Spurvance Labs does not provide legal, financial, or investment advice. 
              All product names, logos, and brands are property of their respective owners.
            </p>
            <p className="mt-1">
              This website uses essential cookies only. No tracking or analytics cookies are used.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;