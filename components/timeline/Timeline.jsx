import React, { useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import TimelineDecade from "./TimelineDecade"

import DataCamps from "../data/camps.json"
import DataHistory from "../data/history.json"
import DataPilgrims from "../data/pilgrims.json"

function Timeline() {

    const child = { width: `100vw`, height: `100vh` }


    // const dataCamps = JSON.parse("../data/camps.json");
    // const dataHistory = JSON.parse("../data/history.json");
    // const dataPilgrims = JSON.parse("../data/pilgrims.json");

    return (
        <div className="timeline-container">
                {DataCamps.camps.map((item) => (
                    <div className="timeline-item" key={item.properties.ID}>
                        {item.properties.NAME}
                    </div>
                ))}


                {/* <TimelineDecade decade={1940} />
                <TimelineDecade decade={1950} />
                <TimelineDecade decade={1960} />
                <TimelineDecade decade={1970} />
                <TimelineDecade decade={1980} />
                <TimelineDecade decade={1990} />
                <TimelineDecade decade={2000} />
                <TimelineDecade decade={2010} /> */}
                <div className='timeline-spacer'></div>
        </div>
    )
}


export default Timeline