var infoContent = "<p>The Royal Observatory, Greenwich is an observatory situated on a hill in Greenwich Park, overlooking the River Thames. It played a major role in the history of astronomy and navigation, and is best known as the location of the prime meridian.</p> <p>Source: Wikipedia</p>"

var initialize = function(){
  var centre = {lat: 51.509865, lng: -0.118092};
  var mapDiv = document.querySelector('#main-map');

  var mainMap = new MapWrapper(mapDiv, centre, 10);
  mainMap.addMarker(centre);

  var marker2coords = {lat:51.476853, lng:-0.000500};
  var infoMarker = mainMap.addMarker(marker2coords);
  mainMap.addInfoWindow(infoContent, infoMarker);

  var marker3coords = {lat:51.519413, lng:-0.126957};
  mainMap.addMarker(marker3coords);

  mainMap.addClickEvent();

  var button1 = document.querySelector('#button1');
  button1.onclick = mainMap.buttonClickHandler.bind(mainMap);

  var button2 = document.querySelector('#button2');
  button2.onclick = mainMap.whereAmI.bind(mainMap);

};




window.onload = initialize;