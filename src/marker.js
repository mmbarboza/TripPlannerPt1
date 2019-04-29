const mapboxgl = require('mapbox-gl');

function buildMarker(markerType, markerCoordinates) {
  const markerFS = document.createElement('div');
markerFS.style.width = '32px';
markerFS.style.height = '39px';

if (markerType === 'activity'){
  markerFS.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  return new mapboxgl.Marker(markerFS).setLngLat(markerCoordinates);
  } else if (markerType === 'hotel'){
    markerFS.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
    return new mapboxgl.Marker(markerFS).setLngLat(markerCoordinates);
  } else if (markerType === 'restaurant'){
    markerFS.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    return new mapboxgl.Marker(markerFS).setLngLat(markerCoordinates);
  }
}

module.exports = buildMarker;
