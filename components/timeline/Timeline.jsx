import React, { useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import TimelineDecade from "./TimelineDecade"
import TimelineYear from "./TimelineYear"


function Timeline(props) {

    const child = { width: `100vw`, height: `100vh` }

    return (
        <div className="timeline-container">
            <HorizontalScroll>
                <div className='timeline-spacer'></div>
                <TimelineDecade decade={1940} />
                <TimelineDecade decade={1950} />
                <TimelineDecade decade={1960} />
                <TimelineDecade decade={1970} />
                <TimelineDecade decade={1980} />
                <TimelineDecade decade={1990} />
                <TimelineDecade decade={2000} />
                <TimelineDecade decade={2010} />
                <div className="timeline-decade timeline-decade-last">
                    <div className="timeline-year-first">
                        2020
                    </div>
                    <div className="timeline-year-others">
                        2021
                    </div>
                </div>
                <div className='timeline-spacer'></div>
            </HorizontalScroll>
        </div>
    )
}


export default Timeline