import SEO from "../components/SEO";
import {
  BookOpen,
  Shield,
  Code,
  FileText,
  ExternalLink,
  AlertTriangle,
  Scale,
  Lock,
  Users,
  Globe,
  Cpu,
  Database,
  Server,
  Key,
  Mail,
  Building,
  Award,
  ShieldCheck,
  FileSearch,
  ArrowRight,
  Sparkles,
  Zap,
  ScaleIcon,
  CheckCircle,
  XCircle,
  AlertCircle,
  GitBranch,
  Layers
} from "lucide-react";
import { useState } from "react";

const Licensing = () => {
  const [selectedProject, setSelectedProject] = useState("n-chat");

  const projects = [
    {
      id: "n-chat",
      name: "N-Chat Platform",
      description: "End-to-end encrypted messaging platform",
      primaryLicense: "GNU AGPL v3",
      secondaryLicenses: ["MPL 2.0 for UI components"],
      commercialLicense: "Available",
      exportControl: "EAR Category 5 Part 2",
      compliance: ["GDPR", "PTA Guidelines", "Zero-Knowledge Design"],
      patentProtection: "Yes - Patent non-assertion covenant"
    },
    {
      id: "spurvance-os",
      name: "Spurvance OS",
      description: "Privacy-focused operating system",
      primaryLicense: "GNU GPL v3",
      secondaryLicenses: ["LGPL v3 for libraries", "MIT for utilities"],
      commercialLicense: "Required for OEM use",
      exportControl: "EAR Category 5 Part 1 & 2",
      compliance: ["Common Criteria", "FIPS 140-2", "Pakistani Govt Standards"],
      patentProtection: "Yes - Apache 2.0 patent grant"
    },
    {
      id: "developer-tools",
      name: "Developer SDKs & Tools",
      description: "APIs, libraries, and development tools",
      primaryLicense: "Apache License 2.0",
      secondaryLicenses: ["MIT for examples", "BSD for utilities"],
      commercialLicense: "Not required",
      exportControl: "EAR Category 5 Part 2",
      compliance: ["OSI Approved", "Pakistani Localization"],
      patentProtection: "Yes - Apache 2.0 patent grant"
    },
    {
      id: "security-libraries",
      name: "Security & Cryptography",
      description: "Encryption libraries and security components",
      primaryLicense: "GNU LGPL v3",
      secondaryLicenses: ["MIT for bindings"],
      commercialLicense: "Available",
      exportControl: "EAR Category 5 Part 2 - License Required",
      compliance: ["NIST Standards", "FIPS validation pending"],
      patentProtection: "Yes - Strong patent protection"
    }
  ];

  const licenseMatrix = {
    "gnu-agpl-v3": {
      name: "GNU Affero GPL v3",
      description: "Strong copyleft license with network use provision",
      useCase: "Network/server applications (like N-Chat)",
      canUseCommercially: "Yes, with source disclosure",
      canModify: "Yes",
      mustShareChanges: "Yes",
      patentProtection: "Yes",
      compatibility: ["GPL v3", "AGPL v3"],
      restrictions: ["Source must be shared if network accessible"]
    },
    "gnu-gpl-v3": {
      name: "GNU GPL v3",
      description: "Strong copyleft license for software freedom",
      useCase: "Operating systems and core applications",
      canUseCommercially: "Yes, with source disclosure",
      canModify: "Yes",
      mustShareChanges: "Yes, when distributed",
      patentProtection: "Yes",
      compatibility: ["GPL v3", "LGPL v3"],
      restrictions: ["Derivative works must be GPL v3"]
    },
    "apache-2.0": {
      name: "Apache License 2.0",
      description: "Permissive license with patent protection",
      useCase: "Libraries, SDKs, and tools",
      canUseCommercially: "Yes",
      canModify: "Yes",
      mustShareChanges: "No",
      patentProtection: "Strong patent grant",
      compatibility: ["MIT", "BSD", "GPL v3"],
      restrictions: ["Patent retaliation clause"]
    },
    "mit": {
      name: "MIT License",
      description: "Simple permissive license",
      useCase: "Utilities, examples, and non-critical components",
      canUseCommercially: "Yes",
      canModify: "Yes",
      mustShareChanges: "No",
      patentProtection: "No explicit patent terms",
      compatibility: ["Everything"],
      restrictions: ["Attribution required"]
    },
    "lgpl-v3": {
      name: "GNU LGPL v3",
      description: "Weak copyleft for libraries",
      useCase: "Shared libraries and runtime components",
      canUseCommercially: "Yes",
      canModify: "Yes",
      mustShareChanges: "Only to library itself",
      patentProtection: "Yes",
      compatibility: ["GPL v3", "LGPL v3"],
      restrictions: ["Dynamic linking allowed with proprietary code"]
    }
  };

  const commercialOptions = [
    {
      name: "Enterprise License",
      description: "For proprietary integration and redistribution",
      features: [
        "Proprietary use rights",
        "Indemnification protection",
        "Priority legal support",
        "Compliance certification"
      ],
      pricing: "Annual subscription",
      typicalUsers: ["Large corporations", "Government agencies", "OEMs"]
    },
    {
      name: "OEM License",
      description: "For hardware manufacturers and system integrators",
      features: [
        "Pre-installation rights",
        "Custom branding options",
        "Extended support",
        "Certification support"
      ],
      pricing: "Per-unit or volume-based",
      typicalUsers: ["Device manufacturers", "System integrators", "ISVs"]
    },
    {
      name: "Patent License",
      description: "Access to Spurvance Labs patent portfolio",
      features: [
        "Patent non-assertion",
        "Defensive termination protection",
        "Cross-licensing options",
        "Patent pool participation"
      ],
      pricing: "Negotiated terms",
      typicalUsers: ["Competitors", "Large tech companies", "Patent holders"]
    }
  ];

  const complianceRequirements = {
    pakistan: [
      "PTA Type Approval for telecom components",
      "SECP compliance for corporate use",
      "Data localization requirements",
      "Content moderation obligations"
    ],
    international: [
      "GDPR compliance for EU users",
      "EAR export controls for encryption",
      "OFAC sanctions compliance",
      "CCPA/CPRA for California users"
    ],
    industry: [
      "HIPAA compliance for healthcare use",
      "PCI DSS for payment processing",
      "SOC 2 for enterprise security",
      "ISO 27001 certification track"
    ]
  };

  return (
    <>
      <SEO
        title="Licensing & Legal Compliance | Spurvance Labs"
        description="Complete licensing framework for Spurvance Labs projects. Open-source licenses, commercial options, export controls, and compliance requirements for Pakistan's digital sovereignty initiative."
        canonical="https://spurvancelabs.com/licensing"
      />

      {/* Hero */}
      <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <ScaleIcon className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Legal & Licensing Framework
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Licensing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Sovereignty</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Our dual-licensing model ensures open-source accessibility while enabling commercial sustainability for Pakistan's digital infrastructure.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Open Source Core</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">OSI Licenses</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Backdoors</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">🇵🇰</div>
              <div className="text-sm text-gray-600">Pakistani Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project-Specific Licensing */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Project-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Licensing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each Spurvance Labs project has a tailored licensing approach based on its use case and security requirements.
            </p>
          </div>

          {/* Project Selector */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedProject === project.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Project Details */}
          {projects.map((project) => (
            selectedProject === project.id && (
              <div key={project.id} className="bg-white rounded-3xl border-2 border-blue-100 shadow-lg p-10">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <Code className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Primary License</div>
                        <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium inline-block">
                          {project.primaryLicense}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Secondary Licenses</div>
                        <div className="flex flex-wrap gap-2">
                          {project.secondaryLicenses.map((license, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                              {license}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Export Control Classification</div>
                        <div className="px-4 py-2 bg-red-50 text-red-700 rounded-lg font-medium inline-block">
                          {project.exportControl}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">License may be required for international distribution</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Compliance Requirements</div>
                        <div className="space-y-2">
                          {project.compliance.map((item, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Patent Protection</div>
                        <div className="flex items-center">
                          <ShieldCheck className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{project.patentProtection}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">Commercial Licensing</div>
                        <div className={`px-4 py-2 rounded-lg font-medium inline-block ${
                          project.commercialLicense === 'Available' 
                            ? 'bg-green-50 text-green-700'
                            : project.commercialLicense === 'Required for OEM use'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {project.commercialLicense}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <a
                    href={`/legal/licenses/${project.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    View Complete License Documentation
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </a>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* License Comparison Matrix */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <Layers className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                License Comparison
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              License <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Comparison Matrix</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the differences between licenses used across Spurvance Labs projects.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl border-2 border-gray-100 shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <th className="text-left p-6 font-semibold text-gray-900">License Feature</th>
                  {Object.entries(licenseMatrix).map(([key, license]) => (
                    <th key={key} className="p-6">
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">{license.name}</div>
                        <div className="text-sm text-gray-600 mt-1">{license.useCase}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-6 font-medium text-gray-900">Commercial Use</td>
                  {Object.entries(licenseMatrix).map(([key, license]) => (
                    <td key={key} className="p-6 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        license.canUseCommercially.startsWith('Yes')
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {license.canUseCommercially.startsWith('Yes') ? (
                          <CheckCircle className="w-4 h-4 mr-1" />
                        ) : (
                          <XCircle className="w-4 h-4 mr-1" />
                        )}
                        {license.canUseCommercially}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Modification Rights</td>
                  {Object.entries(licenseMatrix).map(([key, license]) => (
                    <td key={key} className="p-6 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        license.canModify === 'Yes'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {license.canModify === 'Yes' ? (
                          <CheckCircle className="w-4 h-4 mr-1" />
                        ) : (
                          <XCircle className="w-4 h-4 mr-1" />
                        )}
                        {license.canModify}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Share Changes</td>
                  {Object.entries(licenseMatrix).map(([key, license]) => (
                    <td key={key} className="p-6 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        license.mustShareChanges.startsWith('Yes')
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {license.mustShareChanges.startsWith('Yes') ? (
                          <AlertCircle className="w-4 h-4 mr-1" />
                        ) : (
                          <CheckCircle className="w-4 h-4 mr-1" />
                        )}
                        {license.mustShareChanges}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Patent Protection</td>
                  {Object.entries(licenseMatrix).map(([key, license]) => (
                    <td key={key} className="p-6 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        license.patentProtection === 'Yes'
                          ? 'bg-purple-100 text-purple-700'
                          : license.patentProtection.includes('Strong')
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {license.patentProtection === 'Yes' || license.patentProtection.includes('Strong') ? (
                          <ShieldCheck className="w-4 h-4 mr-1" />
                        ) : (
                          <XCircle className="w-4 h-4 mr-1" />
                        )}
                        {license.patentProtection}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">License Compatibility</td>
                  {Object.entries(licenseMatrix).map(([key, license]) => (
                    <td key={key} className="p-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {license.compatibility.map((comp, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commercial Licensing Options */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 mb-8">
              <Building className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Commercial Licensing
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Commercial <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Licensing Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For organizations requiring proprietary use, redistribution, or enterprise support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commercialOptions.map((option, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white rounded-3xl border-2 border-gray-100 hover:border-green-200 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.name}</h3>
                  <p className="text-gray-600 mb-8">{option.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-sm font-medium text-gray-500 mb-4">Includes:</div>
                    <ul className="space-y-3">
                      {option.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-sm font-medium text-gray-500 mb-2">Pricing Model:</div>
                    <div className="text-gray-700 font-medium">{option.pricing}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Typical Users:</div>
                    <div className="flex flex-wrap gap-2">
                      {option.typicalUsers.map((user, uIdx) => (
                        <span key={uIdx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                          {user}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 border-t border-gray-100">
                  <a
                    href={`/commercial/${option.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 p-10">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Custom Licensing?</h3>
              <p className="text-gray-600 mb-8">
                We work with enterprises, government agencies, and educational institutions to create tailored licensing solutions that meet specific requirements.
              </p>
              <a
                href="/contact?subject=Custom%20Licensing"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Scale className="w-5 h-5 mr-3" />
                Discuss Custom Licensing
                <ArrowRight className="w-4 h-4 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 mb-8">
              <ShieldCheck className="w-5 h-5 text-red-600 mr-3" />
              <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">
                Regulatory Compliance
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding regulatory requirements for using Spurvance Labs software in different jurisdictions and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(complianceRequirements).map(([key, requirements]) => (
              <div key={key} className="bg-white rounded-3xl border-2 border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  {key === 'pakistan' && <Globe className="w-8 h-8 text-green-600 mr-4" />}
                  {key === 'international' && <Globe className="w-8 h-8 text-blue-600 mr-4" />}
                  {key === 'industry' && <Building className="w-8 h-8 text-purple-600 mr-4" />}
                  <h3 className="text-2xl font-bold text-gray-900 capitalize">{key} Compliance</h3>
                </div>
                
                <ul className="space-y-4">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href={`/compliance/${key}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Detailed Requirements
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Export Control Notice */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl border-2 border-red-200 p-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start">
                <Lock className="w-10 h-10 text-red-600 mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Export Control Notice</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Spurvance Labs software contains strong encryption and is subject to export control regulations in multiple jurisdictions, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>United States Export Administration Regulations (EAR) Category 5 Part 2</li>
                      <li>European Union Dual-Use Regulation</li>
                      <li>Pakistan's Strategic Export Control Lists</li>
                    </ul>
                    <p className="font-semibold">
                      Export or re-export to certain countries, entities, or individuals may be prohibited. Please consult with legal counsel before international distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Resources */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Resources & Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 p-10">
              <div className="flex items-center mb-6">
                <FileSearch className="w-10 h-10 text-blue-600 mr-6" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">License Compliance Guide</h3>
                  <p className="text-gray-600 mt-2">Step-by-step guide to ensure compliance with Spurvance Labs licenses</p>
                </div>
              </div>
              <div className="space-y-4">
                <a href="/legal/compliance-guide" className="flex items-center text-blue-600 hover:text-blue-700">
                  <ArrowRight className="w-4 h-4 mr-3" />
                  Download Compliance Checklist
                </a>
                <a href="/legal/faq" className="flex items-center text-blue-600 hover:text-blue-700">
                  <ArrowRight className="w-4 h-4 mr-3" />
                  Licensing Frequently Asked Questions
                </a>
                <a href="/legal/contributor-agreement" className="flex items-center text-blue-600 hover:text-blue-700">
                  <ArrowRight className="w-4 h-4 mr-3" />
                  Contributor License Agreement
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl border-2 border-purple-200 p-10">
              <div className="flex items-center mb-6">
                <Scale className="w-10 h-10 text-purple-600 mr-6" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Legal Support</h3>
                  <p className="text-gray-600 mt-2">Contact our legal team for licensing questions and compliance support</p>
                </div>
              </div>
              <div className="space-y-4">
                <a href="mailto:legal@spurvancelabs.com" className="flex items-center text-purple-600 hover:text-purple-700">
                  <Mail className="w-4 h-4 mr-3" />
                  legal@spurvancelabs.com
                </a>
                <a href="/contact?subject=Licensing%20Inquiry" className="flex items-center text-purple-600 hover:text-purple-700">
                  <ArrowRight className="w-4 h-4 mr-3" />
                  Submit Licensing Inquiry Form
                </a>
                <a href="/legal/dispute-resolution" className="flex items-center text-purple-600 hover:text-purple-700">
                  <ArrowRight className="w-4 h-4 mr-3" />
                  Dispute Resolution Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
            <ScaleIcon className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700">
              Need Licensing Clarification?
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Legal Guidance</span>
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Our legal team specializes in open-source licensing, export controls, and regulatory compliance for Pakistan's digital sovereignty initiative.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:legal@spurvancelabs.com"
              className="px-12 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              <Mail className="w-6 h-6 mr-3" />
              Contact Legal Team
            </a>

            <a
              href="/legal/documents"
              className="px-12 py-5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              View All Legal Documents
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              All licensing matters are handled by Spurvance Labs Legal Department.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              This information does not constitute legal advice. Please consult with legal counsel for specific situations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Licensing;