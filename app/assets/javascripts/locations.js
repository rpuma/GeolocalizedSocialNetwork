// Todos os metodos de Locations



var add_openstreetmap = function(mapa){
	 mapa.addMapType("osm", {
      getTileUrl: function(coord, zoom) {
        return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
      },
      tileSize: new google.maps.Size(256, 256),
      name: "OpenStreetMap",
      maxZoom: 18
    });
}


var get_geolocalization = function(mapa){
	  GMaps.geolocate({
      success: function(position) {
        mapa.setCenter(position.coords.latitude, position.coords.longitude);
      },
      error: function(error) {
        alert('Geolocation failed: '+error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        alert("Done!");
      }
    });
}


//path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476],[-12.044012922866312, -77.02470665341184]];

var draw_trajectory = function(mapa,path){
	mapa.drawPolyline({
    path: path,
    strokeColor: '#131540',
    strokeOpacity: 0.6,
    strokeWeight: 6
    });
}


    


