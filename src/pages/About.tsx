import SEO from "../components/SEO";
import Hero from "../components/About/Hero";
import ProblemSolution from "../components/About/ProblemSolution";
import OurApproach from "../components/About/OurApproach";
import ProductPortfolio from "../components/About/ProductPortfolio";
import TermsGovernance from "../components/About/TermsGovernance";
import FinalCta from "../components/About/FinalCta"
const About = () => {
  return (
    <>
      <SEO
        title="About Spurvance Labs – Building Pakistan's Digital Sovereignty"
        description="Spurvance Labs is pioneering Pakistan's digital independence through open-source infrastructure, secure communications, and privacy-first technology. Learn about our mission to build sovereign digital platforms."
        canonical="https://spurvancelabs.com/about"
      />
<Hero/>
<ProblemSolution/>
<OurApproach/>
<ProductPortfolio/>
<TermsGovernance/>
<FinalCta/>
    </>
  );
};

export default About;