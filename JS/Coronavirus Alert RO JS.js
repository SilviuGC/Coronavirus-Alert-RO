var map;
var marker;
var ok=0;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var location_coordinates = { lat: 45.9922858, lng: 25.0094303 };
  // The map, centered at Uluru
  var map_canvas = document.getElementById("map");

  var map_options = {
    zoom: 7.25,
	  zoomControl: false,
    center: location_coordinates,
    gestureHandling: "none",
	  streetViewControl:false,
  }

  map = new google.maps.Map(map_canvas, map_options);
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({
    position: location_coordinates,
    map: map,
  });

  function newLocation(newLat,newLng)
  {
    
    map.setCenter({
      lat : newLat,
      lng : newLng,
    });

    marker.setPosition({
      lat : newLat,
      lng : newLng,
    }); 

    if(map.zoom!=7){
      map.setZoom(zoom = 7.25);
    } 
    else map.setZoom(zoom = 9);
     
    if(ok==0 && map.zoom!=9){
      setTimeout(() => {  map.setZoom(zoom = 9); }, 1100);
    }

  }

  //Setting Location with jQuery
  $(document).ready(function ()
  {

    $("#Back").on('click', function ()
    {
      ok=1;
      newLocation(45.9922858, 25.0094303);
      ok=0;
    });

    $("#Alba").on('click', function ()
    {
      newLocation(46.067341, 23.580870);
    });
    
    $("#Arad").on('click', function ()
      {
      newLocation(46.175968, 21.319000);
    });
    
    $("#Arad").on('click', function ()
      {
      newLocation(46.175968, 21.319000);
    });

    $("#Arad").on('click', function ()
      {
      newLocation(46.175968, 21.319000);
    });

  });
}