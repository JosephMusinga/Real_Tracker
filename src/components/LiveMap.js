import React, { useState, useEffect } from 'react'
import './LiveMap.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, onValue, snapshot } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'



const appSettings = {
    databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const coordinatesInDb = ref(database, "coordinates")

function GetCoordinates() {
    const [coordinates, setCoordinates] = useState([-17.84, 31.04]);

    useEffect(() => {
        onValue(coordinatesInDb, (snapshot) => {
            const coordinatesArray = Object.values(snapshot.val());
            setCoordinates(coordinatesArray);
        });
    }, [setCoordinates]);

    return coordinates

}

function ConvertCoordinates() {
    let value = Object.values(GetCoordinates())

    let latitude = parseFloat(value[0])
    let longitude = parseFloat(value[1])
    var coordinates = [latitude, longitude]

    console.log("latitude = " + latitude + "\nlongitude = " + longitude)

    return coordinates

}

function LiveMap() {
    return (
        <>
            <div className='map__container'>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />


                <MapContainer
                    center={[-17.8487296, 31.0444032]} //Harare Coordinates
                    zoom={12}
                    style={{ height: "90vh" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={ConvertCoordinates()}
                    >
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}

export default LiveMap