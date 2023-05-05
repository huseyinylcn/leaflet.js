var map = document.getElementById('map')
var btn = document.getElementById('btn')
var senaryo = document.getElementById('senaryo')



var map = L.map('map').setView([41.783876714985205, 26.82813371510416], 7);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var start1;
var start2;
var marker = L.marker([41.78429583672509, 26.828454016399732]).addTo(map);
var prevMarker;
map.on('click', function(e) {
  if (prevMarker) {
    map.removeLayer(prevMarker);
  }
  var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  prevMarker = marker;
  start1 = e.latlng.lat;
  start2 = e.latlng.lng;
});

btn.addEventListener('click',()=>{
  console.log(start1,start2)
  var startPoint = L.latLng(41.78429583672509, 26.828454016399732);
  var endPoint = L.latLng(start1, start2);

  var km = startPoint.distanceTo(endPoint);

  console.log("yağcıllı ile seçilen mesafe ile arasındaki mesafe: " + km );
})




var marker;
var circleMarker;

senaryo.addEventListener('click',()=>{

  circleMarker = L.circleMarker([41.78429583672509, 26.828454016399732], {
    radius: 00,
    stroke: false,
    fillColor: '#ff0000',
    fillOpacity: 0.5
  }).addTo(map);


  var radius = 0;
  var hiz = setInterval(function() {
    radius += 1;
    if (radius > 500) {
      clearInterval(hiz);
    }
    circleMarker.setRadius(radius);
  }, 50);
})



