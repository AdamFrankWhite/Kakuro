import React from 'react'
import game from '../kakuro1'
import SelectNum from './SelectNum'

class Cell extends React.Component {
    constructor() {
        super()
    }

    

   
       
    
    
    render() {
        let cell = game[this.props.row][this.props.num]
        console.log(this.props.row, this.props.num)
        return (
            <td 
                className={"cell " + cell.type } 
                onClick={ (e) => {
                    this.props.handleClick(e, this.props.row, this.props.num)
                    console.log(this.props.cellValue)
                }}
            >
            {cell.type === "rule" ? 
                <span>
                    <span className="left">{cell.value[0]}</span>
                    <span className="right">{cell.value[1]}</span>
                </span> 
            : cell.type === "input" ? this.props.cellValue[this.props.row][this.props.num] : " "}
             
            {/* {this.props.showButtons[this.props.row][this.props.num] && <SelectNum />} */}
           
            </td>
        )
    }

    
}
    
export default Cell

// render() {
//     let row = this.props.row
//     let cellNum = this.props.num
//     let cell = game[row][cellNum]
//     return (
//         <td className={"cell " + cell.type } onClick={ (e) => this.props.handleClick(e, row, cellNum)}>
//         {cell.type === "rule" ? 
//             <span>
//                 <span className="left">{cell.value[0]}</span>
//                 <span className="right">{cell.value[1]}</span>
//             </span> 
//         : cell.type === "input" ? this.props.cellValue[row][cellNum] : " "}
       
                    
//         </td>
//     )
// }


// TODO

// if you click on cell, brings up choice of numbers to click, more satisfying that typing, better UX