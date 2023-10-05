import React from 'react'
import './LiveMap.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue,snapshot } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'



const appSettings = {
    databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const coordinatesInDb = ref(database,"coordinates" )


onValue(coordinatesInDb, function(snapshot){
    let coordinatesArray = Object.entries(snapshot.val())
    let latitude = Object.values(snapshot.val().latitude)
    let longitude = Object.values(snapshot.val().longitude)

    console.log(latitude, longitude, coordinatesArray)
})


function LiveMap() {
    return (
        <>
            <div className='map'>
                <div className='map__header'>
                    <h1>Find Device</h1>
                </div>

                <div className='map__container'>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />

                    <MapContainer
                        center={[51.505, -0.09]}
                        zoom={13}
                        style={{ height: "90vh" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>

                    <GetCoordinates/>
                </div>
            </div>

        </>
    )
}

function GetCoordinates(){
    console.log(coordinatesInDb);
}

export default LiveMap