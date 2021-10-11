import React from 'react'

import FilterButton from './FilterButton'

import classes from "./filter.scss"

function Filter(props) {

    return (
        <div className="filter-container">
            <div className="filter-button-container">
                <FilterButton handleClick={() => props.handleClick(0)} selected={props.filter0} text={"Historie"} />
                <FilterButton handleClick={() => props.handleClick(1)} selected={props.filter1} text={"Stanové\u00A0tábory"} />
                <FilterButton handleClick={() => props.handleClick(2)} selected={props.filter2} text={"Výpravy"} />
            </div>
        </div>
    )
}


export default Filter