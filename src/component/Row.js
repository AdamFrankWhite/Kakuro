import React from 'react'
import game from '../kakuro1'

function Row(props) {
    let cells = []
    for (let i=0; i<9; i++) {
        let cellTypes = game[props.num]
        let cell = 
            <td className={"cell " + cellTypes[i].type }>
                {cellTypes[i].type === "rule" ? cellTypes[i].value[0] + cellTypes[i].value[1] : ""}
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
