import React from 'react'

function SelectNum(props) {
    let cells = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C"]
    return (
        <div className="select-num">
            {cells.map(cell => 
                <span onClick={(e) => props.handleClick(e)}className="num-btn">{cell}</span>)
            }
        </div>
    )
}

export default SelectNum