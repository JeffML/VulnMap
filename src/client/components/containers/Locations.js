import React, {
    Component
} from 'react'
import MapContainer from './MapContainer'
import Table from '../presentational/Table'

const IP = Symbol();
const CITY = Symbol();

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            currentIp: null,
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
        const props = {
            setCurrentIp: function(ip) {
                this.setState({
                    currentIp: ip
                })
            }.bind(this)
        };
        Object.assign(props, this.state)
        return <div className="container">
            <MapContainer {...props}/><br/><hr/>
            <Table {...props}/>
        </div>
    }
}

export {
    IP,
    CITY
}
export default Locations