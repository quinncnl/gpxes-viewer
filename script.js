var canvas = document.getElementById("map");
canvas.addEventListener( "keydown", function(e){
	switch(e.keyCode){
	case 87://w
		goUp();
		break;
	case 65://a
		goLeft();
		break;
	case 68://d
		goRight();
		break;
	case 83://s
		goDown();
		break;
	}
}, true);

var dis_lat=0.045;
var dis_lng=0.12;

function goUp(){
	var latlng = L.latLng(map.getCenter().lat+dis_lat, map.getCenter().lng);
	map.setView(latlng, 14)
}
function goDown(){
	var latlng = L.latLng(map.getCenter().lat-dis_lat, map.getCenter().lng);
	map.setView(latlng, 14)
}
function goLeft(){
	var latlng = L.latLng(map.getCenter().lat, map.getCenter().lng-dis_lng);
	map.setView(latlng, 14)
}
function goRight(){
	var latlng = L.latLng(map.getCenter().lat, map.getCenter().lng+dis_lng);
	map.setView(latlng, 14)
}
