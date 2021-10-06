import React from 'react'

import prev1946 from "../../public/images/history/p-1947-0.jpg";

function LandingTimeline(props) {

    const openEvent = (id) => {
        console.log(id)
    } 

    return (
        <div className="landing-timeline-container">        
            <div className="year-container">
                <div className="year-title">
                    1946
                </div>
                <div className="tiles-container">
                    <div className="tile-wrap" onClick={() => openEvent(1)}>
                        <img src={prev1946} className="tile-image"/>
                        <div className="tile-label">13. 5. 1946<br/>Vznik 94. oddílu</div>
                    </div>
                    <div className="tile-wrap">
                        <img src={prev1946} className="tile-image"/>
                        <div className="tile-label">Tábor, louka Havran</div>
                    </div>
                </div>
            </div>
            <div className="year-container">
                <div className="year-title">
                    1946
                </div>
                <div className="tiles-container">
                    <div className="tile-wrap">
                        <img src={prev1946} className="tile-image"/>
                        <div className="tile-label">Zalozeni 94</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LandingTimeline