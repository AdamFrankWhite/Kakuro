import React from 'react'
import game from '../kakuro1'
import SelectNum from './SelectNum'
import onClickOutside from 'react-onclickoutside'

class Cell extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            showButtons: false,
            guess: ""
        }
    }

    handeClickOutside() {
        
    }
    handleClick(e) {
        let cell = game[this.props.row][this.props.num]
        if (cell.type ==="input" && this.state.showButtons === false) { 
            let thisButton = e.target
            console.log("Click!!")
            this.setState({
                showButtons: true
            })
            return <SelectNum />

        }
        console.log(e.target.textContent)
        if (e.target.textContent.length === 1) {
            this.setState({
                guess: e.target.textContent
            })
        }
        

        if (e.target.className !== "select-num" && e.target.className !== "num-btn") {
            console.log("close")
        }
     
    }

   
       
    
    
    render() {
        let cell = game[this.props.row][this.props.num]
        return (
            <td className={"cell " + cell.type } onClick={this.handleClick}>
            {cell.type === "rule" ? 
                <span>
                    <span className="left">{cell.value[0]}</span>
                    <span className="right">{cell.value[1]}</span>
                </span> 
            : cell.type === "input" ? this.state.guess : " "}
            {this.state.showButtons && <SelectNum />}
                        {/* : cell.type === "input" ? cell.answer  */}
            </td>
        )
    }
}
    
export default Cell


// TODO

// if you click on cell, brings up choice of numbers to click, more satisfying that typing, better UX