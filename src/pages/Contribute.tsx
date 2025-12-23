import SEO from "../components/SEO";
import Hero from "../components/Contribute/Hero";
import ContributionRoles from "../components/Contribute/ContributionRoles";
import ContributionProcess from "../components/Contribute/ContributionProcess";
import CertificationFramework from "../components/Contribute/CertificationFramework";
import LegalFramework from "../components/Contribute/LegalFramework";
import FinalCta from "../components/Contribute/FinalCta";
const Contribute = () => {
  return (
    <>
      <SEO
        title="Contribute to Spurvance Labs – Join Pakistan's Digital Sovereignty Movement"
        description="Contribute to open-source projects building Pakistan's digital infrastructure. Learn about roles, certification, legal agreements, and contribution benefits."
        canonical="https://spurvancelabs.com/contribute"
      />
<Hero/>
<ContributionRoles/>
<ContributionProcess/>
<CertificationFramework/>
<LegalFramework/>
<FinalCta/>

    </>
  );
};

export default Contribute;