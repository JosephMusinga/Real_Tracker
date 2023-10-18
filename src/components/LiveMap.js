import React, { useState, useEffect } from 'react';
import './LiveMap.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { getCoordinatesInDb, onCoordinatesChanged } from './FirebaseSetup';

function LiveMap() {
    const [coordinates, setCoordinates] = useState([-17.84, 31.04]);

    useEffect(() => {
        const coordinatesInDb = getCoordinatesInDb();
        onCoordinatesChanged((snapshot) => {
            const coordinatesArray = Object.values(snapshot.val());
            setCoordinates(coordinatesArray);
        });
    }, []);

    return (
        <>
            <div className='map__container'>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />

                <MapContainer
                    center={coordinates} //Harare Coordinates
                    zoom={11}
                    style={{ height: "90vh" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coordinates} />
                </MapContainer>
            </div>
        </>
    );
}

export default LiveMap;