import React from 'react'

function FilterButton(props) {

    const getClasses = (selected) => {
        if (selected==true) {
            return ("filter-button filter-button-selected");
        } else {
            return ("filter-button");
        }
    }

    return (
        <div className={getClasses(props.selected)} onClick={props.handleClick}>
            {props.text}
        </div>
    )
}


export default FilterButton