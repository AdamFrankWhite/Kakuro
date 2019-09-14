import React from 'react'
import Row from './Row'
import Keypad from './Keypad'
import game from '../kakuro1'

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
           showButtons: [],
           guesses: []
        }
    }

    

    render() {
        console.log(game)
        return ( 
            <div className="game-cont">
                <table className="board">
                    <tbody>
                        <Row num="0" />
                        <Row num="1" />
                        <Row num="2" />
                        <Row num="3" />
                        <Row num="4" />
                        <Row num="5" />
                        <Row num="6" />
                        <Row num="7" />
                        <Row num="8" />
                        <Row num="9" />
                    </tbody>
                </table>
                {/* <Keypad /> */}
            </div> 
            
        )
    }
}

export default Board