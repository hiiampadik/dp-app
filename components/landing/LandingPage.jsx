import React, { useState, setState } from 'react'

import Intro from '../intro/Intro'
import Books from '../books/Books'
import Timeline from '../timeline/Timeline'

import TemplateBoth from '../templates/TemplateBoth'
import TemplatePhotos from '../templates/TemplatePhotos'
import TemplateText from '../templates/TemplateText'

function LandingPage(props) {

    const [currentEvent, setCurretEvent] = useState();
    const [showEvent, setShowEvent] = useState(false);

    const handleEvent = (event) => {
        setCurretEvent(event.content);
        setShowEvent(true);
    }

    const getTemplate = () => {
        if (currentEvent.type == 'both') {
            return <TemplateBoth event={currentEvent} handleClose={() => setShowEvent(false)} />
        } else if (currentEvent.type == 'photos') {
            return <TemplatePhotos event={currentEvent} handleClose={() => setShowEvent(false)} />
        } else if (currentEvent.type == 'text') {
            return <TemplateText event={currentEvent} handleClose={() => setShowEvent(false)} />
        }
    }

    return (
        <div>
            <Intro handleHistoryPush={props.handleHistoryPush} />
            <Books />
            <Timeline handleClick={(eventContent) => handleEvent(eventContent)} handleClose={() => setShowEvent(false)} />

            {showEvent ?
                <>
                    {getTemplate()}
                </>
                :
                ''
            }
        </div>
    )
}

export default LandingPage