var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
    });
    return marker;
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log("yo!");
      var newLat = event.latLng.lat();
      var newLng = event.latLng.lng();
      var newCoords = {
       lat: newLat,
       lng: newLng
      };
        this.addMarker(newCoords);
    }.bind(this));
  },

  addInfoWindow: function(infoContent, marker){
    var infoWindow = new google.maps.InfoWindow({
      content: infoContent
    });
    marker.addListener('click', function(){
      infoWindow.open(this.googleMap, marker);
    });
  },

  buttonClickHandler: function(){
    var chicagoCentre = {lat: 41.878114, lng:-87.629798 };
    this.moveCenter(chicagoCentre);
  },

  moveCenter: function(newCoords){
    this.googleMap.setCenter(newCoords);
  }
};