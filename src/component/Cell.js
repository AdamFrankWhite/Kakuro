import React from 'react'
import games from '../kakuro1'

class Cell extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        let cell = games[this.props.kakuroNum][this.props.row][this.props.num]
        //Checks if cell instance matches the selected cell
        let checkSelect = this.props.selectedSquare[0] === this.props.row && this.props.selectedSquare[1] === this.props.num ? " selected" : ""
        
        return (
            <td 
                className={"cell " + cell.type + checkSelect } 
                onClick={ (e) => {
                    this.props.handleClick(e, this.props.row, this.props.num)
                }}
            >
            {/* Conditional Rendering for different cell types */}
            {cell.type === "rule" ? 
                <span>
                    <span className="left">{cell.value[0]}</span>
                    <span className="right">{cell.value[1]}</span>
                </span> 
            : cell.type === "input" ? this.props.cellValue[this.props.row][this.props.num] : " "}
           
            </td>
        )
    }

    
}
    
export default Cell
