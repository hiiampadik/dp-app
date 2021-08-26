import React, {useState} from 'react'

import ReactMapGl from "react-map-gl";

const myToken = 'pk.eyJ1IjoiYnJvbmEtbXVzaWwiLCJhIjoiY2tzc3duNWI1MTB1ODJ0bWRpYWI1Z3BjNCJ9.DGZfQoXrdWKk199ZO-a-YQ'


function Map (props) {

    const [viewport, setViewport] = useState({
        latitude: 49.36,
        longitude: 16.61,
        zoom: 6.8,
        width: '100vw',
        height: '100vh'
    })

    return (
        <div className="map-container">
            <ReactMapGl 
                {...viewport}
                mapboxApiAccessToken={myToken}
                mapStyle="mapbox://styles/brona-musil/ckssx8qew3n6b17qhj2n9s0j2"
                onViewportChange={viewport => {setViewport(viewport)}}
            />
        </div>
    )
}


export default Map