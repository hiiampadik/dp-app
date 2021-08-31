import React from 'react'
import ReactDOM from 'react-dom'

function TimelineYear(props) {

    return (
        <div>
            <div className="timeline-year-first"> 
                {props.year}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 1}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 2}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 3}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 4}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 5}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 6}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 7}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 8}
            </div>
            <div className="timeline-year-others"> 
                {props.year + 9}
            </div>
        </div>
    )
}


export default TimelineYear