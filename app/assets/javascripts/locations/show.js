

// METODO SHOW



 var map_show = new GMaps({
      el: '#map_show',
      lat: -12.043333,
      lng: -77.028333,
      //zoom: 12,
      //lat: 40.65,
      //lng: -73.95,
      mapTypeControlOptions: {
          mapTypeIds : ["hybrid", "roadmap", "satellite", "terrain", "osm"]
        }
    });

add_openstreetmap(map_show);

circle = map_show.drawCircle({
  lat:  -12.043333,
  lng: -77.028333,
  radius: 350,  //350 meters
  strokeColor: '#432070',
  strokeOpacity: 1,
  strokeWeight: 3,
  fillColor: '#432070',
  fillOpacity: 0.6
});





  /*
    map.addMarker({
      lat: -12.043333,
      lng: -77.028333,
      title: 'Lima',
      infoWindow: {
        //content: '<p>HTML Content</p>'
        content: '<iframe width="420" height="345" src="http://www.youtube.com/embed/XGSy3_Czz8k"> </iframe>'
      },
      click: function(e) {
        alert('You clicked in this marker');
      },
    });*/
  // Obter geolocalizacao
   /*
    GMaps.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
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
   // Geocoding
   
    GMaps.geocode({
      address: $('#address').val(),
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          map.setCenter(latlng.lat(), latlng.lng());
          map.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng()
          });
        }
      }
    });
 */
    // Polyline (working)
    /*
    path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476],[-12.044012922866312, -77.02470665341184]];

    map.drawPolyline({
    path: path,
    strokeColor: '#131540',
    strokeOpacity: 0.6,
    strokeWeight: 6
    });

    // overlay (not working as expected)
    map.drawOverlay({
      lat: -12.043333,
      lng: -77.028333,
      content: '<p>HTML Content</p>'
    });
    */
   // Polygones 
    /*
    var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511], [-12.044804866577001,-77.02154422636042]];
    polygon = map.drawPolygon({
      paths: path, // pre-defined polygon shape
      strokeColor: '#BBD8E9',
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#BBD8E9',
      fillOpacity: 0.6
    });*/

    // GeoJSON Polygon (Ver GeoJSON en apuntes)

    /*polygon = map.drawPolygon({
      paths: paths,
      useGeoJSON: true,
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#BBD8E9',
      fillOpacity: 0.6
    });*/

    
    // Routes, travelMode: driving, bicycling or walking. Default is walking
/*
    map.drawRoute({
    origin: [-12.044012922866312, -77.02470665341184],
    destination: [-12.090814532191756, -77.02271108990476],
    travelMode: 'driving',
    strokeColor: '#131540',
    strokeOpacity: 0.6,
    strokeWeight: 6
    });
*/

    // Static maps (not working , maybe with JQuery)
   /* url = GMaps.staticMapURL({
    size: [610, 300],
    lat: -12.043333,
    lng: -77.028333
    });
    $('<img/>').attr('src', url)
    .appendTo('#map');
  */

  // Menu contextual
  /*  map.setContextMenu({
    control: 'map',
    options: [{
      title: 'Add marker',
      name: 'add_marker',
      action: function(e) {
        this.addMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          title: 'New marker'
        });
      }
    }, {
      title: 'Center here',
      name: 'center_here',
      action: function(e) {
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });

  // Geofences (Executar uma acao quando o marcador estiver fora de um certa area)
  var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511], [-12.044804866577001,-77.02154422636042]];
    polygon = map.drawPolygon({
    paths: path,
    strokeColor: '#BBD8E9',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#BBD8E9',
    fillOpacity: 0.6
  });
  map.addMarker({
    lat: -12.043333,
    lng: -77.028333,
    draggable: true,
    fences: [polygon],
    outside: function(marker, fence) {
      alert('This marker has been moved outside of its fence');
    }
  });

  // controles(botoes) no mapa
    map.addControl({
    position: 'top_right',
    content: 'Geolocate',
    style: {
      margin: '5px',
      padding: '1px 6px',
      border: 'solid 1px #717B87',
      background: '#fff'
    },
    events: {
      click: function(){
        //console.log(this);
        alert('Apertou Geolocate');
      }
    }
  });
*/
/*
    // KML y GeoRSS layers
    infoWindow = new google.maps.InfoWindow({});
      map.loadFromKML({
      //url: 'http://www.searcharoo.net/SearchKml/newyork.kml',
      url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss',
      suppressInfoWindows: true,
      events: {
        click: function(point){
          infoWindow.setContent(point.featureData.infoWindowHtml);
          infoWindow.setPosition(point.latLng);
          infoWindow.open(map.map);
      }
    }
  });

  // Usar otros tipos de mapa (OpenStreetMap)    
      map.addMapType("osm", {
      getTileUrl: function(coord, zoom) {
        return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
      },
      tileSize: new google.maps.Size(256, 256),
      name: "OpenStreetMap",
      maxZoom: 18
    });
     // map.setMapTypeId("osm");

  // Overlay Map Types (Definir qualquer tipo de overlay num mapa)
      var getTile = function(coord, zoom, ownerDocument) {
      var div = ownerDocument.createElement('div');
      div.innerHTML = coord;
      div.style.width = this.tileSize.width + 'px';
      div.style.height = this.tileSize.height + 'px';
      div.style.fontSize = '10';
      div.style.fontWeight = 'bolder';
      div.style.border = 'dotted 1px #aaa';
      div.style.textAlign = 'center';
      div.style.lineHeight = this.tileSize.height + 'px';
      return div;
    };

    map.addOverlayMapType({
      index: 0,
      tileSize: new google.maps.Size(256, 256),
      getTile: getTile
    });
*/