import React from 'react'

import Close from '../ui/Close'
import ImageEventPath from '../landing/ImageEventPath'

import classes from "./templates.scss"

function TemplateBoth(props) {

    return (
        <div >
            <Close handleClick={() => props.handleClose()} />
            <div className="template-container">
                <div className='template-title-container'>
                    <h1>
                        {props.event.title}
                    </h1>
                    <div className='template-subtitle'>
                        {props.event.subtitle}
                    </div>

                </div>
                <div className="template-body-container">
                    <div className='template-text'>
                        {props.event.text}
                    </div>
                    <div className='template-image-container'>
                        {props.event.photos.map((photo) => (
                            <img src={ImageEventPath[photo]} className='template-image' key={photo}></img>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TemplateBoth