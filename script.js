// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;
function initMap() {
  const myLatLng = { lat:39.4808, lng:-106.0676 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
   
    center: myLatLng,
  });

 
  infoWindow = new google.maps.InfoWindow();

  // const locationButton = document.createElement("button");

document.getElementById('findMe').addEventListener("click", () => {
  // locationButton.textContent = "Pan to Current Location";
  // locationButton.classList.add("custom-map-control-button");
  // map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  // locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          new google.maps.Marker({
            position: pos,
            map,
          });
          alert('boo');
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

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}




