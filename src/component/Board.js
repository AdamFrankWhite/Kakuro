import React from 'react'
import Row from './Row'
import SelectNum from './SelectNum'
import GameButtons from './GameButtons'
import WinBox from './WinBox'
import {answerSheet, games} from '../kakuro1'
import {emptyBoard, guessSheet} from '../emptyBoard'

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedSquare: [],
            guesses: JSON.parse(JSON.stringify(emptyBoard)), 
            won: false,
            kakuroNum: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.newGame = this.newGame.bind(this)
    }

    handleClick (e, row, num) {
        let correctAnswers = answerSheet(games[this.state.kakuroNum])
        //If game state is still playing
        if (!this.state.won) {
                    
            //save cell reference to state
            if (e.target.className.includes("input")) {
                this.setState({selectedSquare: [row, num]})
            }


            if (e.target.className == "num-btn" && JSON.stringify(this.state.selectedSquare) !== "[]") { // can't use strict here, not sure why + check if box selected
                
                let newGuesses = this.state.guesses
                let sqY = this.state.selectedSquare[0]
                let sqX = this.state.selectedSquare[1]
                let numbers = "123456789"
                newGuesses[sqY][sqX] = numbers.includes(e.target.textContent) ? parseInt(e.target.textContent) : ""
                this.setState({guesses: newGuesses})

            }  else if (e.target.textContent === "Hint") {

                let newGuesses = [...this.state.guesses]
                let sqY = this.state.selectedSquare[0]
                let sqX = this.state.selectedSquare[1]
                newGuesses[sqY][sqX] = correctAnswers[sqY][sqX]
                
                this.setState({guesses: newGuesses})

            } else if (e.target.textContent === "Solve") {
                this.setState({ guesses: correctAnswers })

            } else if (e.target.textContent === "Clear All") {
                this.setState({
                    guesses: JSON.parse(JSON.stringify(emptyBoard))
                }) 
            } 
            
            //Check if won

            if (JSON.stringify(correctAnswers) == JSON.stringify(this.state.guesses)) {
                this.setState({won: true})
            }
            
        } // end of ifplaying
        

    }


    newGame() {
        this.setState( prevState => {
            let kakuroNum = prevState.kakuroNum < games.length - 1 ? prevState.kakuroNum + 1 : 0
            return {
                selectedSquare: [],
                guesses: JSON.parse(JSON.stringify(emptyBoard)),
                won: false,
                kakuroNum: kakuroNum
            }
        })
    }


    render() {
        let rows = [0,1,2,3,4,5,6,7,8,9]
        //Check playing state
        let boardStyle = this.state.won ? "board-win" : ""
        
        return ( 
            <div className="game-cont">
                <table className={"board " + boardStyle}>
                    <tbody>
                        {rows.map( i => 
                            <Row 
                                num={i}
                                key={`r-${i}`} 
                                handleClick={this.handleClick}
                                selectedSquare={this.state.selectedSquare}
                                cellValue={this.state.guesses}
                                kakuroNum = {this.state.kakuroNum}
                            />)}
                            
                    </tbody>
                    <SelectNum handleClick={this.handleClick}/>
                </table>
                <WinBox won={this.state.won} newGame={this.newGame}/>
                <GameButtons handleClick={this.handleClick} newGame={this.newGame} />
                
            </div> 
            
        )
    }
}

export default Board