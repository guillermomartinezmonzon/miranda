import { MarkerClusterer } from "@googlemaps/markerclusterer";

// Spain Locations
const locations = [
  { lat: 40.4665, lng: -3.79256 },
  { lat: 40.4135, lng: -3.70256 },
  { lat: 40.4365, lng: -3.72756 },
  { lat: 41.30879, lng: 2.00899 },
  { lat: 41.35879, lng: 2.14899 },
  { lat: 41.38879, lng: 2.15899 },
  { lat: 39.46975, lng: -0.37739 },
  { lat: 41.65606, lng: -0.87734 },
  { lat: 36.72016, lng: -4.42034 },
  { lat: 37.98704, lng: -1.13004 },
];

const google = window.google;

let map, infoWindow;

// Initialize and add the map
export function initMap() {

  // The map 
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: locations[0], 
  });


  infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });  

  // Current Location

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
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


  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });
    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;    
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });


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

// async function getLocations() {
//   return await fetch("data/locations.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//   .then((res) => res.json())
//   .catch((e) => console.log(e));
// }
