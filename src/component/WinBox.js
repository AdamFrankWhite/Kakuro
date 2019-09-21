import React from 'react'

function WinBox(props) {
    let winStyle = props.won ? "win-true" : "win-false"
    return (
        <div className={"win-text " + winStyle}>
            <h2>Puzzle Solved</h2>
            <h3>Congratulations!</h3>
            <h4 className="play-again" onClick={props.newGame}>Fancy another?</h4>
        </div>
    )
}

export default WinBox