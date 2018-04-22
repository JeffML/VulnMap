import React from 'react'

const tableStyle = {
    height: '100%',
    borderCollapse: 'collapse',
    margin: 'auto',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: 'black',
    // tableLayout: 'fixed'
}

const borderStyle = {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: 'black',
}

const Table = (props) => {
    const locs = props.locations.map((loc, r) => {
        const cols = loc.map((el, c) => <td style={borderStyle} key={c}>{el}</td>)
        return <tr style={borderStyle} key={r}>
            {cols}
        </tr>
    });

    const header = <tr>
        <th>IP</th><th>Date</th><th>Description</th>
    </tr>

    return <table style={tableStyle}>
        <tbody>
            {header}
            {locs}
        </tbody>
    </table>
}

export default Table