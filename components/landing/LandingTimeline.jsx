import React from 'react'

import prev1946 from "../../public/images/history/p-1947-0.jpg";

function LandingTimeline(props) {

    return (
        <div className="landing-timeline-container">        
            <div className="year-container year-2">
                <div className="year-title">
                    1946
                </div>
                <div className="tiles-container">
                    
                    <img src={prev1946} className="tile-image"/>
                    <img src={prev1946} className="tile-image"/>
                </div>
                

            </div>
        </div>
    )
}


export default LandingTimeline