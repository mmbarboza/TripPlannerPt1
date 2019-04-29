const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

console.log('Hello from JavaScript');

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFuaXNoYWJhbGFrdW1hciIsImEiOiJjanYyamowem0wYnNsNGRvY2QzNmdjMnVkIn0.4UbR6pxINKW7X0dce86_qA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerChicago = document.createElement('div');
markerChicago.style.width = '32px';
markerChicago.style.height = '39px';
markerChicago.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerChicago).setLngLat([-87.641, 41.895]).addTo(map);

const currentMarker = buildMarker('activity', [-74.009, 40.705]);
currentMarker.addTo(map);

