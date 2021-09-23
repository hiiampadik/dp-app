import React from 'react'

import LandingIntro from './LandingIntro'
import LandingBooks from './LandingBooks'
import LandingTimeline from './LandingTimeline'

import classes from './landing.scss'

function LandingPage(props) {

    return (
        <div className="landing-container">
            <LandingIntro handleHistoryPush={props.handleHistoryPush}/>
            <LandingBooks />
            <div className='landing-transition-bg'>
                <div className='landing-transition-white'></div>
            </div>
            <LandingTimeline />


        </div>
    )
}


export default LandingPage