import React from 'react'
import game from '../kakuro1'

function Row(props) {
    let cells = []
    for (let i=0; i<9; i++) {
        let cellTypes = game[props.num]
        let cell = 
            <td className={"cell " + cellTypes[i].type }>
                {cellTypes[i].type === "rule" ? <span><span className="left">{cellTypes[i].value[0]}</span><span className="right">{cellTypes[i].value[1]}</span></span> : ""}
            </td>

        cells.push(cell)
    }
    return (
        <tr>
            {cells}    
        </tr>
    )
}
    
export default Row


// TODO

// if you click on cell, brings up choice of numbers to click, more satisfying that typing, better UX