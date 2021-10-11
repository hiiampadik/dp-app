import React from 'react'

import Intro from '../intro/Intro'
import Books from '../books/Books'
import Timeline from '../timeline/Timeline'

function LandingPage(props) {

    return (
        <div>
            <Intro handleHistoryPush={props.handleHistoryPush} />
            <Books/>
            <Timeline />
        </div>
    )
}

export default LandingPage