import { useRef, useState } from "react";
import "./App.css";

function App() {
  const state = useRef({
    order: false,
    brush: false,
    mop: false,
    clear: false,
  });

  const [text, setText] = useState("false");

  const clearWithBrush = () => {
    return new Promise((resolve) => {
      if (state.current.brush) return resolve();
      console.log("빗자루질 시작할게");
      setTimeout(() => {
        console.log("빗자루질 끝났어 반장");
        state.current.brush = true;
        resolve();
      }, 500);
    });
  };

  const clearWithMop = () => {
    return new Promise((resolve) => {
      if (state.current.mop) return resolve();
      console.log("걸레질 시작할게");
      setTimeout(() => {
        console.log("걸레질 끝났어 반장");
        state.current.mop = true;
        resolve();
      }, 1000);
    });
  };

  const onClickStart = () => {
    state.current.order = true;
    state.current.brush = false;
    state.current.mop = false;
    state.current.clear = false;
    setText(state.current.clear.toString());
    onClickBrushing();
    onClickMopping();
  };

  const onClickBrushing = () => {
    if (state.current.order) clearWithBrush();
    else console.log("그냥 빗자루질 중...");
  };

  const onClickMopping = () => {
    if (state.current.order) clearWithMop();
    else console.log("그냥 걸레질 중...");
  };

  const onClickEnd = () => {
    if (
      state.current.order &&
      state.current.brush &&
      state.current.mop &&
      !state.current.clear
    ) {
      state.current.order = false;
      state.current.brush = false;
      state.current.mop = false;
      state.current.clear = true;
      console.log("선생님 다했습니다.");
      setText(state.current.clear.toString());
    }
  };

  return (
    <div className="App">
      <input type={"button"} onClick={onClickStart} value={"청소 시작"} />
      <input type={"button"} onClick={onClickBrushing} value={"빗자루질"} />
      <input type={"button"} onClick={onClickMopping} value={"걸레질"} />
      <input type={"button"} onClick={onClickEnd} value={"다했습니다"} />
      <p>{`clear : ${text}`}</p>
    </div>
  );
}

export default App;
