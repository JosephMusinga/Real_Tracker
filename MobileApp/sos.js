import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'


const appSettings = {
    databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

//get reference value from input
var searchParams = new URLSearchParams(window.location.search);
var name = searchParams.get('inputValue').toString();
console.log(typeof (name))

const coordinatesInDB = ref(database, name)

const sosButtonEl = document.getElementById('alertBtn')

let lat
let long

sosButtonEl.addEventListener('click', function () {
   //TODO implement notifications functionn
})

//get currrent position coordinates
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

function getCoordinates() {
    navigator.geolocation.getCurrentPosition(getPosition)
}

function coordinatesUpdateInterval(myFunction) {
    setInterval(myFunction, 15 * 1000);
}

coordinatesUpdateInterval(getCoordinates);
