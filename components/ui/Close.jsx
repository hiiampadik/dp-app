import React from 'react'

import classes from './ui.scss'

function Close(props) {

    return (
        <div className="ui-close-button" onClick={props.handleClick}>
        </div>
    )
}


export default Close