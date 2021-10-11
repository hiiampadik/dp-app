import React from 'react'

import images from "../landing/ImagePaths.jsx";

function TimelineSection(props) {

    const openEvent = (id) => {
        console.log(id)
    }

    const showContent = (types) => {
        let showIt = false;
        if (props.filter[0] == false && props.filter[1] == false && props.filter[2] == false) {
            return true;
        }
        if (props.filter[0] == true && types.includes("history")) {
            return true;
        }
        if (props.filter[1] == true && types.includes("camp")) {
            return true;
        }
        if (props.filter[2] == true && types.includes("trip")) {
            return true;
        }
        return false;
    }

    return (
        <div className={props.red ? "landing-timeline-container red" : "landing-timeline-container gray"}>

            <div className="landing-tiles-container">
                {props.data.map(element => {
                    return (
                        <div key={element.year}>
                            {showContent(element.types) ?
                                <div>
                                    <div className="year-title">
                                        {element.year}
                                    </div>
                                    <div className="tiles-container">
                                        {element.events.map(event => {
                                            return (
                                                <div className="tiles-subcontainer" key={event.ID}>
                                                    {showContent(event.type) ?
                                                        <div className="tile-wrap" >
                                                            <img src={images[event.preview]} className="tile-image" />
                                                            <div className="tile-label">{event.text}</div>
                                                        </div>
                                                        :
                                                        <div></div>
                                                    }
                                                </div>


                                            )
                                        })}
                                    </div>
                                </div>
                                :
                                <div></div>
                            }
                        </div>

                    )
                })}
            </div>
        </div>
    )
}


export default TimelineSection

