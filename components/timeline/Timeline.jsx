import React, { useState, setState } from 'react'

import Filter from './filter/Filter'
import TimelineSection from './TimelineSection'

import Data1 from "../../data/data_45-50.json"
import Data2 from "../../data/data_51-67.json"
import Data3 from "../../data/data_68-69.json"
import Data4 from "../../data/data_70-88.json"
import Data5 from "../../data/data_89-21.json"

import classes from "./timeline.scss"

function Timeline(props) {

    // true - show, false - hide 
    // false, false, false - show everything by default
    const [filter0, setFilter0] = useState(false);
    const [filter1, setFilter1] = useState(false);
    const [filter2, setFilter2] = useState(false);

    const changeFilter = (i) => {
        if (i == 0) {
            setFilter0(!filter0);
        } else if (i == 1) {
            setFilter1(!filter1);
        } else {
            setFilter2(!filter2);
        }
    }

    return (
        <div>

            <Filter handleClick={(index) => changeFilter(index)} filter0={filter0} filter1={filter1} filter2={filter2} />

            <TimelineSection data={Data1} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)} title="1945–1950" subtitle="Obnovení skautingu"/>
            <TimelineSection data={Data2} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)} title="1951–1967" subtitle="Zrušení skautingu"/>
            <TimelineSection data={Data3} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)} title="1968–1969" subtitle="Obnovení skautingu"/>
            <TimelineSection data={Data4} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)} title="1970–1989" subtitle="Zrušení skautingu"/>
            <TimelineSection data={Data5} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)} title="1989" subtitle="Obnovení skautingu"/>
        </div>
    )
}


export default Timeline