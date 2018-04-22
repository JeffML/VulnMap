import React from 'react'

function doMap(lat, long) {
    var mapOptions = {
        center: new google.maps.LatLng(lat, long),
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

function initialize() {
    doMap(47.8060, -122.3740)
}

google.maps.event.addDomListener(window, 'load', initialize);

const Map = (props) => {
    return <div id="map-canvas">

    </div>
}

export default Map