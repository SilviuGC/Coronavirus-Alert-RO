var map;
var marker;
var back_button_pressed=0, first_location=1;
var auxLat, auxLng;

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

  function marker_and_zoom_in_timeout(first_timeout, second_timeout, newLat, newLng){
		map.setZoom(zoom = 7.249);
		setTimeout(() => {
		  marker.setPosition({
			lat : newLat,
			lng : newLng,
		  }); 
		}, first_timeout);
	  
	  setTimeout(() => {map.setZoom(zoom = 9);}, second_timeout);	
  }

  function newLocation(newLat,newLng)
  {
      if(auxLat!=newLat && auxLng!=newLng)
      {     
        map.setCenter({
          lat : newLat,
          lng : newLng,
        });

        if(map.zoom!=7){
          map.setZoom(zoom = 7.25);
        } 
        else if(first_location==1){
        marker_and_zoom_in_timeout(0, 500, newLat, newLng);
      
        first_location=0;
      }
        
        if(back_button_pressed==0 && map.zoom!=9){
        marker_and_zoom_in_timeout(1000, 1200, newLat, newLng);
        }
      else if(back_button_pressed==1){
        setTimeout(() => {
          marker.setPosition({
          lat : newLat,
          lng : newLng,
          }); 
        }, 1000);
      }
    }

   auxLat = newLat;
   auxLng = newLng;

  }

  //Setting Location with jQuery
  $(document).ready(function ()
  {

    $("#Back").on('click', function ()
    {
      back_button_pressed=1;
      newLocation(45.9922858, 25.0094303);
      back_button_pressed=0;
	  first_location=1;
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