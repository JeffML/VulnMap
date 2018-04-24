import React from 'react'

const tableStyle = {
    // height: '100%',
    width: '100%',
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

const divStyle = {
    width: '80%',
    height: '45%',
    margin: 'auto',
    overflow: 'auto',
}

const flaggedStyle = Object.assign({
    backgroundColor: 'yellow',
}, borderStyle);


const Table = (props) => {
    const locs = props.locations.map((loc, r) => {
        const cols = loc.map((el, c) => {
            if (c === 0) {
                el = <button key={el} onClick={()=>props.setCurrentIp(el.key)}>{el}</button>
            }
            return <td style={borderStyle} key={c}>{el}</td>
        })

        return <tr style={loc.flag? flaggedStyle : borderStyle} key={r}>
            {cols}
        </tr>
    });

    const header = <tr>
        <th>IP</th><th>Date</th><th>Description</th>
    </tr>

    return <div>
        <span>Search Description or IP: </span> <input type="text" name="search" onKeyUp={evt => props.findRows(evt)} />

        <br/><br/>

        <div style={divStyle}>
            <table style={tableStyle}>
                <tbody>
                    {header}
                    {locs}
                </tbody>
            </table>
        </div>
    </div>
}

export default Table