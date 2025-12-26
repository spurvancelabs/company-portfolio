import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Users,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Logo size="lg" />
            <p className="text-gray-400 mt-4 max-w-sm">
              Spurvance Labs builds secure, scalable software and
              open-source technology focused on cybersecurity,
              automation, and engineering.
            </p>

            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 text-xs bg-blue-900/30 border border-blue-800 rounded">
                🇵🇰 Pakistan
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-400" />
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/community" className="hover:text-white">Community</Link></li>
              <li><Link to="/licensing" className="hover:text-white">Licensing</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <Mail className="w-4 h-4 mr-2 text-blue-400" />
              Contact
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@spurvancelabs.com"
                className="text-gray-400 hover:text-white block"
              >
                info@spurvancelabs.com
              </a>

              <div className="flex gap-4 mt-4 flex-wrap">
                <a
                  href="https://github.com/spurvancelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/spurvancelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/spurvancelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/spurvancelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/spurvancelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/XXXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>
            © {currentYear} Spurvance Labs. All rights reserved.
          </div>
          <div>
            Building secure & open technology.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
