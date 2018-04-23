import React from 'react'

const LocationInfo = (props) => {
    if (!props.geo) {
        return <div />
    } else {
        return <div>
            <span>{props.geo.city}, </span>
            <span>{props.geo.region_name}</span><br/>
            <span>{props.geo.country_name}</span>
    </div>
    }
}

export default LocationInfo