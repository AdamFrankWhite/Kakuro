import React from 'react'
import Row from './Row'
import SelectNum from './SelectNum'
import game from '../kakuro1'

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
           showButtons: false,
           selectedSquare: [],
           guesses: [
                [ 
                    "", "", "", "", "", "", "", "", "" 
                ],

                [ 
                    "", "", "", "", "", "", "", "", ""  
                ],

                [ 
                    "", "", "", "", "", "", "", "", ""  
                ],

                [ 
                    "", "", "", "", "", "", "", "", ""  
                ],

                [ 
                    "", "", "", "", "", "", "", "", ""  
                ],

                [ 
                    "", "", "", "", "", "", "", "", ""  
                ],

                [ 
                    "", "", "", "", "", "", "", "", "" 
                ],

                [ 
                    "", "", "", "", "", "", "", "", "" 
                ],

                [ 
                    "", "", "", "", "", "", "", "", "" 
                ],
                
                [ 
                    "", "", "", "", "", "", "", "", "" 
                ],
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e, row, num) {
        // let cell = game[this.props.row][this.props.num]
        // if (cell.type ==="input" && this.state.showButtons === false) { 
        //     let thisButton = e.target
        //     console.log("Click!!")
        //     this.setState({
        //         showButtons: true
        //     })
        //     document.body.appendChild(<SelectNum />)

        // }
        // console.log(e.target.textContent)
        // if (e.target.textContent.length === 1) {
        //     this.setState({
        //         guesses: e.target.textContent
        //     })
        // }
        this.setState({showButtons: true})

        //save reference to square
        if (e.target.className.includes("input")) {
            e.target.className += " clicked"
            


            this.setState({selectedSquare: [row, num]})

            console.log(this.state.selectedSquare)
        }
        if (e.target.className == "num-btn") { // can't use strict here, not sure why
            // console.log(this.state.guesses)
            let newGuesses = [...this.state.guesses]
            let sqY = this.state.selectedSquare[0]
            let sqX = this.state.selectedSquare[1]
            newGuesses[sqY][sqX] = e.target.textContent !== "C" ? e.target.textContent : " "
            console.log(newGuesses, sqX, sqY)
            this.setState({guesses: newGuesses})
        // this.setState( prevState => {
        //     return {
        //         guesses: prevState.guesses[row][num] = e.target.value
        //     }
        // }) 
    }
        // console.log(e.target.textContent)
        // console.log(this.state.guesses) 
        // console.log(e.target)  
    
    }

    render() {
        let rows = [0,1,2,3,4,5,6,7,8,9]
        return ( 
            <div className="game-cont">
                <table className="board">
                    <tbody>
                        {rows.map( i => 
                            <Row 
                                num={i}
                                key={`r-${i}`} 
                                showButtons={this.state.showButtons} 
                                handleClick={this.handleClick}
                                cellValue={this.state.guesses}
                            />)}
                            
                    </tbody>
                </table>
                {this.state.showButtons && <SelectNum handleClick={this.handleClick}/>}
            </div> 
            
        )
    }
}

export default Board