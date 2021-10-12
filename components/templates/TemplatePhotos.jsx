import React from 'react'

import Close from '../ui/Close'
import ImageEventPath from '../landing/ImageEventPath'

import classes from "./templates.scss"

function TemplatePhotos(props) {

    return (
        <div className="template-container">
            <Close handleClick={() => props.handleClose()} />
            <div className='template-title-container'>
                <div className='template-title'>
                    {props.event.title}
                </div>
                <div className='template-subtitle'>
                    {props.event.subtitle}
                </div>
            </div>

            <div className='template2-image-container'>
                {props.event.photos.map((photo) => (
                    <img src={ImageEventPath[photo]} className='template2-image' key={photo}></img>
                ))}
            </div>

        </div>
    )
}


export default TemplatePhotos