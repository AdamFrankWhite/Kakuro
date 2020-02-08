import React from 'react'
import game from '../kakuro1'
import Cell from './Cell'

function Row(props) {
    let cells = [0,1,2,3,4,5,6,7,8]
    
    return (
        
        <tr>
            {cells.map(i => 
                <Cell 
                    row={props.num} 
                    key={i} 
                    num={i} 
                    cellValue={props.cellValue}
                    selectedSquare={props.selectedSquare}
                    handleClick={props.handleClick}
                    kakuroNum={props.kakuroNum} />)}    
        </tr>
    )
}
    
export default Row

