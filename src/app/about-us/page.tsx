import React from 'react'
import Hero from './components/Hero'
import Founder from './components/Founder'
import WhatSetsUsApart from './components/WhatSetsUsApart'
import OurTeam from './components/OurTeam'
import OurJourney from './components/OurJourney'

const AboutUsPage = () => {
    return (
        <div>
            <Hero />
            {/* <Founder /> */}
            <OurJourney />
            <WhatSetsUsApart />
            <OurTeam />
        </div>
    )
}

export default AboutUsPage
