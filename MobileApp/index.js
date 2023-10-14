import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'


const appSettings = {
    databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const coordinatesInDB = ref(database, 'test')

const sosButtonEl = document.getElementById('alertBtn')

sosButtonEl.addEventListener('click', function () {

    update(coordinatesInDB, {
        "latitude": 322333,
        "longitude": 3133,
    })
})




// function getPosition(position){
//     var lat = position.coords.latitude
//     var long = position.coords.longitude
//     var accuracy = position.coords.accuracy

//     console.log("Coordinates are Lat: "+lat+" ,Long: "+long+", Accuracy: "+accuracy)
//     }

//      if (!navigator.geolocation){
//         console.log("Your browser does not support the geolocation feature")
//     }else{
//     navigator.geolocation.getCurrentPosition(getPosition)
//     }