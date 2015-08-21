// METODO INDEX


 var map = new GMaps({
      el: '#map_index',
      //zoom: 12,
      //lat: 40.65,
      lat: -12.044,
      //lng: -73.95,
      lng: -77.0247,
      mapTypeControlOptions: {
          mapTypeIds : ["hybrid", "roadmap", "satellite", "terrain", "osm"]
        }
    });

add_openstreetmap(map);
//get_geolocalization(map);


/*
var json = '{ "pontos" : [' +
'{ "latitude":-12.044012922866312 , "longitud": -77.02470665341184},' +
'{ "latitude":-12.05449279282314 , "longitud": -77.03024273281858},' +
'{ "latitude":-12.055122327623378 , "longitud": -77.03039293652341 } ]}';

obj = JSON.parse(json);
*/



//var rota_index = document.getElementById("map_index").getAttribute("data-index-source");
var rota_index= "http://localhost:3000/locations/mandar";



/*
$(document.ready(function() {

    $.get("http://localhost:3000/locations", function(data, status){
	alert("Data: " + data + "\nStatus: " + status);
	});

});
*/

var xmlhttp = new XMLHttpRequest();


//xmlhttp.responseType = "json";

var text;
xmlhttp.open("GET", rota_index, true);

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //obj = JSON.parse(xmlhttp.responseText); 
         
         var obj = JSON.parse(xmlhttp.responseText);
         
         pintar(obj);
        alert(xmlhttp.responseText);
	} 
 // alert("readyState:" + xmlhttp.readyState + ", status:" + xmlhttp.status );
 }
 
 xmlhttp.send();

var pintar = function(data){
	
	var i;
	rota = [];
	ponto = [];
	for (i=0; i < data.length; i++){
		ponto.push(data[i].latitude);
		ponto.push(data[i].longitude);
		alert("Latitude:" + ponto.toString());
		rota.push(ponto);
		ponto = [];
	}
	
	draw_trajectory(map, rota);
}

 
//alert(text);   


//alert("envio");
/*


*/



















/*

var json = JSON.parse(data);
			
var i;
rota = [];
ponto = [];
for (i=0; i < obj.pontos.length; i++){
	ponto.push(obj.pontos[i].latitude);
	ponto.push(obj.pontos[i].longitud);
	rota.push(ponto);
	ponto = [];
}

draw_trajectory(map, rota);

*/





/*
<!DOCTYPE html>
<html>
<body>

<div id="id01"></div>

<script>
var xmlhttp = new XMLHttpRequest();
var url = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
</script>

</body>
</html>



*/





/*
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
  */
  
