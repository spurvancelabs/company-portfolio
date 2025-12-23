import SEO from "../components/SEO";

import Hero from "../components/Community/Hero";
import CommunityPlatforms from "../components/Community/CommunityPlatforms";
import CommunityGovernance from "../components/Community/CommunityGovernance";
import RecognitionRewards from "../components/Community/RecognitionRewards";
import FinalCta from "../components/Community/FinalCta";

const Community = () => {


  return (
    <>
      <SEO
        title="Spurvance Labs Community – Join Pakistan's Digital Sovereignty Movement"
        description="Join thousands of developers, designers, and security experts building Pakistan's digital independence. Open-source community with events, mentorship, and global collaboration."
        canonical="https://spurvancelabs.com/community"
      />
<Hero/>
<CommunityPlatforms/>
<CommunityGovernance/>
<RecognitionRewards/>
<FinalCta/>

    </>
  );
};

export default Community;