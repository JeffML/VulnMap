import React, {
    Component
} from 'react'
import Map from '../presentational/Map'

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

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            geo: null
        }
    }

    getGeoIp(ip) {
        fetch(`/service/geoIp?ip=${ip}`)
            .then(res => res.json())
            .then(geo => {
                this.setState({
                    geo
                })
                doMap(geo.latitude, geo.longitude)
            })
            .catch(e => console.error(e))
    }

    shouldComponentUpdate(newProps, newState) {
        return newProps.currentIp && (newProps.currentIp !== this.props.currentIp);
    }

    componentWillUpdate(newProps, newState) {
        this.getGeoIp(newProps.currentIp)
    }

    render() {
        const props = {

        }
        Object.assign(props, this.state)
        return <Map {...props}/>
    }
}

export default MapContainer;