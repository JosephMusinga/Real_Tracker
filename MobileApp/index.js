import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'


const appSettings = {
    databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const coordinatesInDB = ref(database, 'test')

const sosButtonEl = document.getElementById('alertBtn')

let lat
let long

sosButtonEl.addEventListener('click', function () {

    getCoordinates()

})

function getPosition(position) {
    lat = position.coords.latitude
    long = position.coords.longitude

    console.log("Coordinates are Lat: " + lat + " ,Long: " + long)

    //send coordinates to DB
    update(coordinatesInDB, {
        "latitude": lat,
        "longitude": long,
    })

}

//get currrent position coordinates
async function getCoordinates() {

   navigator.geolocation.getCurrentPosition(getPosition)
}
