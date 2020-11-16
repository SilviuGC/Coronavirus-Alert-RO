// Initialize and add the map
function initMap() {
  // The location of Uluru
  const location_coordinates = { lat: 45.9922858, lng: 25.0094303 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.25,
	zoomControl: false,
    center: location_coordinates,
    gestureHandling: "none",
	streetViewControl:false,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location_coordinates,
    map: map,
  });
}