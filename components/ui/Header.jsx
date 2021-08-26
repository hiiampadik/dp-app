import React from 'react'
import ReactDOM from 'react-dom'

function Header(props) {

    return (
        <div className={props.classes}>
            <div className="header-link-container">

                <div onClick={() => props.handleHeader('/')} className='header-link'>
                    Domů
                </div>
                <div onClick={() => props.handleHeader('/map')} className='header-link'>
                    Mapa
                </div>
                <div onClick={() => props.handleHeader('/timeline')} className='header-link'>
                    Časová osa
                </div>
            </div>

        </div>
    )
}


export default Header