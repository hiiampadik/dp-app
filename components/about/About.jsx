import React from 'react'

import Close from '../ui/Close'

import classes from "./about.scss"

function About(props) {

    return (
        <div className="about-container">        
                <Close handleClick={() => props.handleHistoryPush('/')}/>
        </div>
    )
}


export default About