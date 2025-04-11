import { useState } from "react";

const AddTodo = ({onClickTodo}) => {
    const [inputTodo, setInputTodo] = useState();

    const onChangeInput = (e) => {
        setInputTodo(e.target.value);
    }

    return (
        <div>
            <input placeholder="새로운 Todo..." onChange={onChangeInput} value={inputTodo}></input>
            <button onClick={() => {onClickTodo(inputTodo)}}>추가</button>
        </div>
    )
}

export default AddTodo;