import React from 'react'

function FilterButton(props) {

    const getClasses = (selected) => {
        if (selected==true) {
            return ("button filter-button-selected");
        } else {
            return ("button filter-button-unselected");
        }
    }

    return (
        <div className={getClasses(props.selected)} onClick={props.handleClick}>
            {props.text}
        </div>
    )
}


export default FilterButton