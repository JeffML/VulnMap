import React, {
    Component
} from 'react'
import Map from '../presentational/Map'
import Table from '../presentational/Table'

const IP = Symbol();
const CITY = Symbol();

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
        const props = {};
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