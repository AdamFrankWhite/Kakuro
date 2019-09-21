import React from 'react'

function SelectNum(props) {
    return (
        <div className="select-num">
            <span onClick={(e) => props.handleClick(e)}className="num-btn">1</span>
            <span onClick={(e) => props.handleClick(e)}className="num-btn">2</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">3</span> 
            <span onClick={(e) => props.handleClick(e)} className="num-btn">4</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">5</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">6</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">7</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">8</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">9</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">C</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">Clear All</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">Hint</span>
            <span onClick={(e) => props.handleClick(e)} className="num-btn">Solve</span>
        </div>
    )
}

export default SelectNum