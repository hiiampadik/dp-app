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
            <div className='landing-transition-bg'>
                <div className='landing-transition-white'></div>
            </div>

            <Filter handleClick={(index) => changeFilter(index)} filter0={filter0} filter1={filter1} filter2={filter2} />

            <TimelineSection data={Data1} red={false} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)}/>
            <TimelineSection data={Data2} red={true} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)}/>
            <TimelineSection data={Data3} red={false} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)}/>
            <TimelineSection data={Data4} red={true} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)}/>
            <TimelineSection data={Data5} red={false} filter={[filter0, filter1, filter2]} handleClick={(eventContent) => props.handleClick(eventContent)}/>
        </div>
    )
}


export default Timeline