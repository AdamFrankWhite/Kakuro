import React from 'react'

function GameButtons(props) {
    return (
        <div>
            <span onClick={(e) => props.handleClick(e)} className="game-btn">Clear All</span>
            <span onClick={(e) => props.handleClick(e)} className="game-btn">Hint</span>
            <span onClick={(e) => props.handleClick(e)} className="game-btn">Solve</span>
            <span onClick={props.newGame} className="game-btn">New Game</span>
        </div>
    )
}

export default GameButtons