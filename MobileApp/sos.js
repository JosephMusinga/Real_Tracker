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
<<<<<<< HEAD
console.log(typeof (name))

const coordinatesInDB = ref(database, `user/${name}`)
=======

console.log(typeof(name))
const coordinatesInDB = ref(database, name)
>>>>>>> parent of 40f38cd (set  interval for coordinates update)

const sosButtonEl = document.getElementById('alertBtn')

let lat
let long

sosButtonEl.addEventListener('click', function () {

    getCoordinates()
})

function getPosition(position) {
    lat = position.coords.latitude
    long = position.coords.longitude

    console.log("Coordinates are Lat: " + lat + " \nLong: " + long)
    //send coordinates to DB
    update(coordinatesInDB, {
        "latitude": lat,
        "longitude": long,
    })
}

//get currrent position coordinates
function getCoordinates() {

   navigator.geolocation.getCurrentPosition(getPosition)
}
