mapboxgl.accessToken = 'pk.eyJ1IjoicGV0aXRsYXR0ZSIsImEiOiJjamFib2pldjcwMjJ6MnhtaHlvcXRrbmdmIn0.0MVivy-vilcBL98R80FTiw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
  center: [173, -41],
  zoom: 4.8,
});

//MARKERS 

//help: https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/