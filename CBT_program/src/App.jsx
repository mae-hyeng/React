import { createContext, useRef, useState } from "react";
import "./App.css";
import CorrectAnswer from "./components/CorrectAnswer";
import MyAnswer from "./components/MyAnswer";

export const CBTStateContext = createContext();

function App() {
  const [answer, setAnswer] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [wrongQuestion, setWrongQuestion] = useState([]);
  const score = useRef(0);

  // 정답체크 버튼
  const onClickBtn = () => {
    let wrongQuestions = [];
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === correct[i] && (answer[i] !== "" || correct[i] !== "")) {
        score.current++;
      } else {
        wrongQuestions.push(i);
      }
    }

    setWrongQuestion(wrongQuestions);
  };

  return (
    <CBTStateContext.Provider
      value={{ answer, setAnswer, correct, setCorrect, wrongQuestion }}
    >
      <div className="App">
        <div className="App-wrapper">
          <MyAnswer />
          <CorrectAnswer />
        </div>
        <div className="button-wrapper">
          <button onClick={onClickBtn}>정답체크</button>
          <div>점수: {score.current}</div>
          <div>틀린 문제 번호: {wrongQuestion.join(", ")}</div>
        </div>
      </div>
    </CBTStateContext.Provider>
  );
}

export default App;
