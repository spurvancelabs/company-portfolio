/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
// TODO: WORK ON THESE FILES
import Licensing from "./pages/Licensing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandServices from "./pages/TermsandServices";
import Cla from "./pages/Cla";
import CodeOfConduct from "./pages/CodeOfConduct";
import Certificate from "./pages/Certificate";
export default function App() {
  return (
    <Router>
            <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-[rgb(var(--color-bg))]">
         <BackToTop />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            // Todo Create These Pages
            <Route path="/licensing" element={<Licensing />} />
            <Route path="/terms" element={<TermsandServices />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cla" element={<Cla />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
