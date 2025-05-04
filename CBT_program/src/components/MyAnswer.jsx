import { CBTStateContext } from "../App";
import "./MyAnswer.css";
import { useContext, useState } from "react";

const MyAnswer = () => {
  const [inputValue, setInputValue] = useState(Array(100).fill(""));
  const grid = Array.from({ length: 100 }, (_, i) => i + 1);

  const { setAnswer, wrongQuestion } = useContext(CBTStateContext);

  const onChangeInput = (e, idx) => {
    const newInputValue = [...inputValue];
    newInputValue[idx] = e.target.value;
    setInputValue(newInputValue);
    setAnswer(newInputValue);
  };

  return (
    <div className="MyAnswer">
      <h3>MyAnswer</h3>
      <div className="MyAnswer-wrapper">
        {grid.map((num, idx) => {
          const isWrong = wrongQuestion.includes(idx);
          return (
            <div className={`MyAnswer-num ${isWrong ? "wrong" : ""}`} key={num}>
              {num}
              <input onChange={(e) => onChangeInput(e, idx)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAnswer;
