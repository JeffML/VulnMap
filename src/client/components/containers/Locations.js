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

    flagMatching(string) {
        if (string.length < 3) {
            return;
        }

        const list = this.state.locations.slice(0);

        list.forEach((loc, i) => {
            const flag = loc.some(el => el.includes(string))
            list[i].flag = flag;
        })

        var flagged = list.reduce((acc, l) => {
            if (l.flag) acc.push(l)
            return acc
        }, []);

        console.log(flagged)

        this.setState({
            location: list
        })
    }

    render() {
        const props = {
            setCurrentIp: function(ip) {
                this.setState({
                    currentIp: ip
                })
            }.bind(this),
            findRows: function(evt) {
                this.flagMatching(evt.target.value)
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