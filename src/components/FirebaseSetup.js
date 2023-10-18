import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase, ref, onValue, snapshot } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

export function getCoordinatesInDb() {
  return ref(database, 'coordinates');
}

export function onCoordinatesChanged(callback) {
  const coordinatesInDb = getCoordinatesInDb();
  onValue(coordinatesInDb, callback);
}
