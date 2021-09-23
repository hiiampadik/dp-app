import React from 'react'

import classes from "./ui.scss"

function LandingIntroButton(props) {

    return (
        <div className="ui-landing-intro-button" onClick={props.handleClick}>
            {props.text}
        </div>
    )
}


export default LandingIntroButton