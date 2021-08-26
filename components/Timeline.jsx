import React, {useState} from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

function Timeline (props) {

    const child   = { width: `300em`, height: `100%`}

    return (
        <div className="timeline-container">
            <HorizontalScroll>
            <div style={child}>
                <div className="timeline-year">
                    1946
                </div>
                <div className="timeline-year">
                    1950
                </div>
                <div className="timeline-year">
                    1960
                </div>
                <div className="timeline-year">
                    1970
                </div>
                <div className="timeline-year">
                    1980
                </div>
                <div className="timeline-year">
                    1990
                </div>
                <div className="timeline-year">
                    2000
                </div>
            </div>
            </HorizontalScroll>
        </div>
    )
}


export default Timeline