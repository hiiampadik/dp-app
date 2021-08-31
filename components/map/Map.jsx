import React, { useState } from 'react'

import ReactMapGl, { Marker } from "react-map-gl";
import parkDate from "../data/parks.json";

const myToken = 'pk.eyJ1IjoiYnJvbmEtbXVzaWwiLCJhIjoiY2tzc3duNWI1MTB1ODJ0bWRpYWI1Z3BjNCJ9.DGZfQoXrdWKk199ZO-a-YQ'

import MapDialog from './MapDialog'

function Map(props) {

    const [showCamp, setShowCamp] = useState(0);

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
                onViewportChange={viewport => { setViewport(viewport) }}
                width="100vw"
                height="100vh"
                getCursor={(e) => "default"}
            >
            {parkDate.features.map(park => (
                <Marker
                    key={park.properties.ID}
                    latitude={park.coordinates[0]}
                    longitude={park.coordinates[1]}
                >
                    <div onClick={() => setShowCamp(park.properties.ID)} className="map-marker"></div>
                </Marker>
                
            ))}
            </ReactMapGl>

            {showCamp != 0 ?
            <div>
                {console.log("map.dialog")}
                <MapDialog
                    setShowCamp={setShowCamp}
                />
            </div>
            :
            ""
            }

        </div>
    )
}


export default Map
