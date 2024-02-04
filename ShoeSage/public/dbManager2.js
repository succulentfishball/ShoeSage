// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDjCn2QpsXNxD7Bvdik1RngTiCds4unhbY",
authDomain: "ichack24-d0f70.firebaseapp.com",
projectId: "ichack24-d0f70",
storageBucket: "ichack24-d0f70.appspot.com",
messagingSenderId: "123364043667",
appId: "1:123364043667:web:2e66acb178ccb95f081666",
measurementId: "G-05KH0P1XB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docRef = doc(db, "terra", "2022-03-16", "activity", "-2023-02-09T00:00:00");
const docSnap = await getDoc(docRef);

async function connectTerra() {
    console.log("Connecting to Terra API");
    const url = await fetch("https://cors-anywhere.herokuapp.com/https://api.tryterra.co/v2/auth/generateWidgetSession", {
        method: "POST",
        headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "dev-id": "ichacktestapp-testing-Rs6Rjkzegp",
        "x-api-key": "jXhlLZRAjKlkHIx-NIUvbYO2m-NotmGk"
        },
        body: JSON.stringify({
        "reference_id": "test-username",
        "lang": "en"
        })
    }).then((res) => res.json())
        .then((data) => data.url);
    console.log("Connected, retrieving URL");
    window.location.replace(url);
}

var avg_cadence = 0;
var mileage = 0;
var weight = 0;

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    console.log("Average Cadence:", docSnap.data().movement_data.avg_cadence_rpm);
    avg_cadence = docSnap.data().movement_data.avg_cadence_rpm;
    mileage = docSnap.data().distance_data.summary.distance_meters / 1000;
    console.log(mileage);
    weight = 60;
}

const mileage1 = mileage.toFixed(1);
console.log(mileage1);
const avg_cadence1 = avg_cadence.toFixed(1);
console.log(avg_cadence1);
const relative_mileage = ((170 - avg_cadence)/200 + 1) * ((170 - avg_cadence)/200 + 1) * ((weight - 60)/200 + 1) * mileage;
console.log(relative_mileage);
const shoe_health = 100 * Math.exp(-0.006 * relative_mileage);
const use = (100 - shoe_health).toFixed(1);
console.log(Math.E);
console.log(shoe_health);
console.log(use);


new Vue({
    el: '#vue1',
    data: {
      shoeUse: use
    }
  });

new Vue({
el: '#vue2',
data: {
    mileage: mileage1
}
});

new Vue({
    el: '#vue3',
    data: {
      cadence: avg_cadence1
    }
});
