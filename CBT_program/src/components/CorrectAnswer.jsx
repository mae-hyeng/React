import { CBTStateContext } from "../App";
import "./CorrectAnswer.css";
import { useContext, useState } from "react";

const CorrectAnswer = () => {
  const [inputValue, setInputValue] = useState(Array(100).fill(""));
  const grid = Array.from({ length: 100 }, (_, i) => i + 1);

  const { setCorrect } = useContext(CBTStateContext);

  const onChangeInput = (e, idx) => {
    const newInputValue = [...inputValue];
    newInputValue[idx] = e.target.value;
    setInputValue(newInputValue);
    setCorrect(newInputValue);
  };

  return (
    <div className="CorrectAnswer">
      <h3>CorrectAnswer</h3>
      <div className="CorrectAnswer-wrapper">
        {grid.map((num, idx) => (
          <div className="CorrectAnswer-num" key={num}>
            {num}
            <input onChange={(e) => onChangeInput(e, idx)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorrectAnswer;
