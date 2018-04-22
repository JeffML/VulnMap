import React from 'react'

const tableStyle = {
    height: '100%',
    borderCollapse: 'collapse',
    margin: 'auto',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: 'black',
}

const borderStyle = {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: 'black',
}

const Table = (props) => {
    const locs = props.locations.map(loc => {
        const cols = loc.map(el => <td style={borderStyle}>{el}</td>)
        return <tr style={borderStyle}>
            {cols}
        </tr>
    });

    return <table style={tableStyle}>
        {locs}
    </table>
}

export default Table