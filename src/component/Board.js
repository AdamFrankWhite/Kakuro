import React from 'react'
import Row from './Row'
import SelectNum from './SelectNum'
import WinBox from './WinBox'
import {answerSheet, game} from '../kakuro1'
import emptyBoard from '../emptyBoard'

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
           showButtons: false,
           selectedSquare: [],
           guesses: emptyBoard, 
            won: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.newGame = this.newGame.bind(this)
    }

    handleClick (e, row, num) {
        console.log(answerSheet(game))
        this.setState({showButtons: true})



        let correctAnswers = answerSheet(game)
        

        

        //save reference to square
        if (e.target.className.includes("input")) {
            
            this.setState({selectedSquare: [row, num]})

            // console.log(this.state.selectedSquare)
        }
        if (e.target.className == "num-btn") { // can't use strict here, not sure why
            // console.log(this.state.guesses)
            let newGuesses = [...this.state.guesses]
            let sqY = this.state.selectedSquare[0]
            let sqX = this.state.selectedSquare[1]
            let numbers = "123456789"
            newGuesses[sqY][sqX] = numbers.includes(e.target.textContent) ? e.target.textContent : "" // checks number input
            // console.log(newGuesses, sqX, sqY)
            console.log(numbers.includes(e.target.textContent))
            if (e.target.textContent === "Clear All") {
                this.setState({
                    guesses: emptyBoard}) 
                } else if (e.target.textContent === "Hint") {
                    // this.setState({ })
                    console.log("hint")
                } else if (e.target.textContent === "Solve") {
                    this.setState({ guesses: correctAnswers })
                } else {
                    this.setState({guesses: newGuesses})
                }
            
            
        
    }




        // add hint button with slider animations for buttons
        // TODO - create random games with new game objects 
        
        
    
        // check win
        // console.log(JSON.stringify(correctAnswers))
        if (JSON.stringify(correctAnswers) === JSON.stringify(this.state.guesses)) {
            this.setState({won: true})
        }

    }


    newGame() {
        console.log('new game')
        this.setState({
            selectedSquare: [],
            guesses: emptyBoard,
            won: false
        })
    }


    render() {
        let rows = [0,1,2,3,4,5,6,7,8,9]
        let boardStyle = this.state.won ? "board-win" : ""
        
        return ( 
            <div className="game-cont">
                <table className={"board " + boardStyle}>
                    <tbody>
                        {rows.map( i => 
                            <Row 
                                num={i}
                                key={`r-${i}`} 
                                showButtons={this.state.showButtons} 
                                handleClick={this.handleClick}
                                selectedSquare={this.state.selectedSquare}
                                cellValue={this.state.guesses}
                            />)}
                            
                    </tbody>
                    
                </table>
                <WinBox won={this.state.won} newGame={this.newGame}/>
                {this.state.showButtons && <SelectNum handleClick={this.handleClick}/>}
                
            </div> 
            
        )
    }
}

export default Board