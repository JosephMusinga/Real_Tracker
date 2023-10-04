import React from 'react'
import './LiveMap.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

function LiveMap() {
    return (
        <>
            <div className='map'>

                <div className='map__header'>
                    <h1>Map</h1>
                </div>

                <div className='map__container'>
                    <MapContainer
                        className="markercluster-map"
                        center={[-17, 31]}
                        zoom={13}
                        maxZoom={18}
                    >
                        <Marker
                            position={[-17, 31]}
                        />
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default LiveMap