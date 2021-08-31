import React from 'react'
import ReactDOM from 'react-dom'

import TimelineYear from "./TimelineYear"

function TimelineDecade(props) {

    return (
        <div className="timeline-decade">
            <TimelineYear year={props.decade} />
        </div>
    )
}


export default TimelineDecade