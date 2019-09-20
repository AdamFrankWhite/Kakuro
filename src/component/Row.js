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
                    showButtons={props.showButtons} 
                    cellValue={props.cellValue}
                    handleClick={props.handleClick} />)}    
        </tr>
    )
}
    
export default Row


// TODO

// if you click on cell, brings up choice of numbers to click, more satisfying that typing, better UX