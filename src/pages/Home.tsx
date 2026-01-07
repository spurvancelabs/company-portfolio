/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
import SEO from "../components/SEO";
import Hero from "../components/Home/Hero";
import Impact from "../components/Home/Impact";
import Mission from "../components/Home/Mission";
import BrandPromise from "../components/Home/BrandPromise";
import WhatYouCanDo from "../components/Home/WhatYouCanDo";
const Home = () => {
  return (
    <>
        <SEO
        title="Spurvance Labs - Secure, Open Digital Platforms"
        description="Spurvance Labs builds secure, open, people-first digital platforms from Pakistan for the world."
        canonical="https://spurvance.com/"
      />
<Hero/>
<Impact/>
<Mission/>
<BrandPromise/>
<WhatYouCanDo/>
    </>
  );
};

export default Home;