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

  moveCenter: function(newCoords){
    this.googleMap.setCenter(newCoords);
  },

  buttonClickHandler: function(){
    var chicagoCentre = {lat: 41.878114, lng:-87.629798 }; //I don't think I should have hardcoded data in here but I don't understand how to pass outside info to the buttonClickHandler in the app
    this.moveCenter(chicagoCentre);
  },

  whereAmI: function(){
    navigator.geolocation.getCurrentPosition(function(position){
      var locationObject = {lat:position.coords.latitude, lng: position.coords.longitude}
      this.moveCenter(locationObject);
      this.addMarker(locationObject);
    }.bind(this));
  }
};