import React, {
    Component
} from 'react'
import Map from '../presentational/Map'
import Table from '../presentational/Table'

const IP = Symbol();
const CITY = Symbol();

function doMap(lat, long) {
    console.log({
        lat,
        long
    })
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

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            selected: null,
            sortedBy: IP
        }

        fetch('/service/shunList')
            .then(res => res.json())
            .then(list => {
                this.setState({
                    locations: list
                });
            })
    }


    render() {
        const me = this;
        const props = {
            getGeoIP: function(ip) {
                fetch(`/service/geoIp?ip=${ip}`)
                    .then(res => res.json())
                    .then(geo => {
                        me.setState({
                            selected: {
                                lat: geo.latitude,
                                long: geo.longitude
                            }
                        });
                        doMap(geo.latitude, geo.longitude)
                    })
                    .catch(e => console.error(e))
            }
        };
        Object.assign(props, this.state)
        return <div className="container">
                <Map {...props}/><br/><hr/>
            <Table {...props}/>
        </div>
    }
}

export {
    IP,
    CITY
}
export default Locations