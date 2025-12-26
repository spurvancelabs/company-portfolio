import AlternativeContact from "../components/Contact/AlternativeContact";
import ContactChannels from "../components/Contact/ContactChannels";
import FinalNotice from "../components/Contact/FinalNotice";
import Hero from "../components/Contact/Hero";
import SecurityCommunication from "../components/Contact/SecurityCommunication";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Spurvance Labs – Secure Communications & Legal Inquiries"
        description="Contact Spurvance Labs for security disclosures, legal matters, press inquiries, and general communications. PGP encryption available for sensitive information."
        canonical="https://spurvancelabs.com/contact"
      />

<Hero/>
<ContactChannels/>
<SecurityCommunication/>
<AlternativeContact/>
<FinalNotice/>
   
    </>
  );
};

export default Contact;