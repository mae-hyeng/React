const Controller = ({onClickBtn}) => {
    return (
        <div className="btn-area">
            <div>
                <button onClick={() => onClickBtn(1)}>1</button>
                <button onClick={() => onClickBtn(2)}>2</button>
                <button onClick={() => onClickBtn(3)}>3</button>
                <button onClick={() => onClickBtn('+')}>+</button>
            </div>
            <div>
                <button onClick={() => onClickBtn(4)}>4</button>
                <button onClick={() => onClickBtn(5)}>5</button>
                <button onClick={() => onClickBtn(6)}>6</button>
                <button onClick={() => onClickBtn('-')}>-</button>
            </div>
            <div>
                <button onClick={() => onClickBtn(7)}>7</button>
                <button onClick={() => onClickBtn(8)}>8</button>
                <button onClick={() => onClickBtn(9)}>9</button>
                <button onClick={() => onClickBtn('*')}>*</button>
            </div>
            <div>
                <button onClick={() => onClickBtn('C')}>C</button>
                <button onClick={() => onClickBtn(0)}>0</button>
                <button onClick={() => onClickBtn('=')}>=</button>
                <button onClick={() => onClickBtn('/')}>/</button>
            </div>
        </div>
    )
}

export default Controller;