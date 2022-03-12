// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// global var 
var pos;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcrulFBbF6HnawvRDlGFOhqTJJfRtbGTM",
authDomain: "safeski-7c162.firebaseapp.com",
databaseURL: "https://safeski-7c162-default-rtdb.firebaseio.com",
projectId: "safeski-7c162",
storageBucket: "safeski-7c162.appspot.com",
messagingSenderId: "95077250865",
appId: "1:95077250865:web:2c0cf9e05bde5716fca210"
};

const firestore = getFirestore();



let map, infoWindow;
function initMap() {
  const myLatLng = { lat:39.4808, lng:-106.0676 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
   
    center: myLatLng,
  });

 
  infoWindow = new google.maps.InfoWindow();

  // const locationButton = document.createElement("button");


  // function addUserTrail(){
  //   const userTrailName = document.querySelector('#userTrailName');
  //   userTrailName.innerHTML = pos;
  //   console.log(pos);
  // }
    

document.getElementById('findMe').addEventListener("click", () => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
           pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
         addUserTrail();


          new google.maps.Marker({
            position: pos,
            map,
          });
          alert('Ski Patrol is on the way!(Not actually this is a test)');
          // infoWindow.setPosition(pos);
          // infoWindow.setContent("Location found.");
          // infoWindow.open(map);
          map.setCenter(pos);
         

        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

}
//dashboard button
// document.getElementById('dashboardBtn').addEventListener("click", () => {
//   window.location.href = 'skipatroldashboard.html'
// });




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

