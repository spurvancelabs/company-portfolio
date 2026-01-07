# Spurvance Labs: Information Security Policy (ISP)

**Document Version:** 1.0  
**Classification:** Internal  
**Alignment:** ISO/IEC 27001:2022  
**Approved by:** Executive Management  
**Effective Date:** 1/1/2027  
**Next Review Date:** 1/1/2028  

---

## 1. Purpose & Objectives

The purpose of this policy is to establish the governance framework for protecting Spurvance Labs’ information assets. We are committed to:  

- **Confidentiality:** Ensuring proprietary research and sensitive data are accessible only to authorized individuals.  
- **Integrity:** Safeguarding the accuracy and completeness of information, software, and research outputs.  
- **Availability:** Ensuring systems and data are available to authorized users when required.  

---

## 2. Scope & Applicability

This policy applies to all employees, contractors, interns, and third-party collaborators. It covers all information assets, including data, software, hardware, and cloud-based systems (SaaS, PaaS, IaaS) managed by Spurvance Labs.

---

## 3. Governance & Risk Management

- **Ownership:** The Security Lead is the designated Process Owner for the Information Security Management System (ISMS).  
- **Risk-Based Approach:** Security controls are selected based on formal risk assessments, business requirements, and legal/contractual obligations.  
- **Continuous Improvement:** This policy follows the Plan-Do-Check-Act (PDCA) cycle to ensure ongoing efficacy.  
- **Policy Review & Approval:** Approved by executive management; reviewed at least annually or upon significant changes to operations, technology, or regulations.  

---

## 4. Human Resources & Access Control

- **Screening:** Access to Level 3 (Proprietary) or Level 4 (Restricted) data requires successful background checks and a signed NDA.  
- **Principle of Least Privilege:** Users are granted minimum access necessary for their role.  
- **Authentication:** Multi-Factor Authentication (MFA) is mandatory for all internal and cloud systems.  
- **Access Reviews:** User access rights reviewed quarterly and upon role changes.  
- **Termination:** All logical and physical access revoked within 4 business hours of role change or termination.  

---

## 5. Information Classification & Handling

All information assets must have an assigned owner responsible for classification, protection, and lifecycle management.  

| Classification | Description | Protection Requirements |
|----------------|------------|-------------------------|
| Level 1: Public | Approved for public release | No special controls |
| Level 2: Internal | Standard business communication | Restricted to `@spurvance.com` accounts |
| Level 3: Proprietary | Research data, algorithms, code | Encryption at rest/transit; MFA required |
| Level 4: Restricted | PII, keys, credentials | Audit logging; Explicit Lead approval; Residency limits |

- Personal data must be collected, processed, and retained only for legitimate business purposes and protected against unauthorized access or misuse.  
- **Data Residency:** Restricted data must comply with Pakistani laws, including PECA 2016 and the Personal Data Protection Bill (PDPB, when enacted). Cross-border transfers must implement appropriate safeguards.  

---

## 6. Secure Development & Supply Chain

- **Secrets Management:** Secrets must not be hardcoded; use approved vaults (e.g., GitHub Secrets, AWS Secrets Manager).  
- **Vulnerability Patching:** High-risk vulnerabilities must be remediated within 48 hours.  
- **Software Bill of Materials (SBOM):** Major releases must include an SBOM.  
- **Environment Isolation:** Production, Staging, and Development environments must be logically separated; production data must be anonymized for Development.  
- **Third-Party Security:** Vendors/partners with system or data access must meet defined security requirements. Spurvance Labs may audit Level 3/4 vendor controls.  

---

## 7. Mobile Device & Endpoint Security

- **Endpoint Protection:** Workstations must use full-disk encryption and be managed via the MDM solution.  
- **BYOD Standards:** Personal devices accessing lab data must have encrypted partitions, biometric/PIN locking, and remote-wipe capability.  

---

## 8. Physical Security & Asset Disposal

- **Facility Access:** Restricted to authorized personnel; visitors escorted at all times.  
- **Secure Disposal:** Level 3/4 hardware must be destroyed or cryptographically erased per NIST SP 800-88.  
- **Clean Desk Policy:** Sensitive documents and media must be secured when workstations are unattended.  

---

## 9. Logging, Monitoring & Incidents

- **Monitoring:** Security-relevant events centrally monitored for Indicators of Compromise (IoC).  
- **Incident Response:** Suspected breaches reported to `security@spurvance.com` immediately. Follow the Incident Management Procedure.  
- **Legal Cooperation:** Cooperate with Pakistani authorities while maintaining lawful confidentiality.  
- **Log Retention:** Security logs retained per legal, regulatory, or contractual requirements.  

---

## 10. Backup & Continuity

- **Redundancy:** Critical systems backed up using encrypted storage.  
- **Validation:** Quarterly backup restoration testing to ensure integrity and availability.  

---

## 11. Compliance & Enforcement

Spurvance Labs complies with Pakistani laws relating to information security, privacy, and electronic data, including PECA 2016 and ETO 2002. Unauthorized disclosure or misuse may result in civil or criminal liability.  

---

## 12. Exceptions

Any deviation from this policy must be documented, risk-assessed, and approved in writing by the Security Lead. Exceptions are time-bound and reviewed every 90 days.  
