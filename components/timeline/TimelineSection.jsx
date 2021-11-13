import React, { useState } from 'react'

import images from "../landing/ImagePreviewPaths.jsx";

function TimelineSection(props) {

    const [isTouchDevice] = useState(require('is-touch-device'))


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
        <div className="timeline-section-container">
            <div className="timeline-section-title-container">
                <div className="timeline-section-title">{props.title}</div>
                <div className="timeline-section-subtitle">{props.subtitle}</div>
            </div>
            <div className='timeline-section-years-container'>
                {props.data.map(element => {
                    return (
                        <div key={element.year}>
                            {showContent(element.types) ?
                                <div>
                                    <h3 className="year-title">
                                        {element.year}
                                    </h3>
                                    <div className="tiles-container">
                                        {element.events.map(event => {
                                            return (
                                                <div className="tiles-subcontainer" key={event.ID}>
                                                    {showContent(event.type) ?
                                                        <>
                                                            {event.content.type.includes("none") ?
                                                                <div className={"tile-wrap tile-wrap-noimage"}>
                                                                    <div className="tile-label tile-label-shown">{event.label}</div>
                                                                </div>
                                                                :
                                                                <div className={"tile-wrap tile-wrap-image"} onClick={() => props.handleClick(event)}>
                                                                    <img src={images[event.preview]} className="tile-image" />
                                                                    {isTouchDevice ?
                                                                        ""
                                                                        :
                                                                        <div className="tile-label tile-label-hover">{event.label}</div>
                                                                    }
                                                                    
                                                                </div>
                                                            }
                                                        </>
                                                        :
                                                        <div></div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default TimelineSection

