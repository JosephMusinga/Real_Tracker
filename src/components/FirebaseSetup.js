// FirebaseSetup.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, onValue,onChildAdded } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const appSettings = {
  databaseURL: "https://real-tracker-55bfa-default-rtdb.firebaseio.com"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

export const getCoordinatesFromDatabase = (databaseRef) => {
  const coordinatesRef = ref(database, databaseRef)
  
  return new Promise((resolve, reject) => {
    onValue(coordinatesRef, (snapshot) => {
      const coordinatesArray = Object.values(snapshot.val())
      resolve(coordinatesArray)
    }, {
      onlyOnce: true
    })
  })
}

export const getAlertFromDatabase = () => {
    const alertRef = ref(database, 'alerts');
  
    return new Promise((resolve, reject) => {
      const initialDataFetched = new Set();
      onChildAdded(alertRef, (snapshot) => {
        const alertKey = snapshot.key;
        const alertValue = snapshot.val();
  
        // Check if the entry has already been fetched
        if (!initialDataFetched.has(alertKey)) {
          initialDataFetched.add(alertKey);
          const alertMessage = `${alertKey}: ${JSON.stringify(alertValue)}`;
          alert(alertMessage);
        }
      });
  
      // Clear the set when the initial data fetching is complete
      setTimeout(() => {
        initialDataFetched.clear();
      }, 1000);
    });
  };