let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:39.4808, lng:-106.0676 },
    zoom: 14,
    
  });
  infoWindow = new google.maps.InfoWindow();

  document.getElementById('findMe').addEventListener("click", () => {
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

         

          
          map.setCenter(pos);

        //   setTimeout(function(){
        //     window.location.href = 'ontheway.html';
        //  }, 5000);
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

document.getElementById('locationSent').addEventListener("click", () => {

            window.location.href = 'ontheway.html';




});

[
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fffdf0"
      },
      {
        "saturation": 90
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#efebeb"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 6.5
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#efebeb"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dcf2f4"
      }
    ]
  }
]


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})