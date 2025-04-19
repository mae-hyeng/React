import { useRef, useState } from "react";
import "./App.css";

function App() {
  const finished = useRef(0);
  const [msg, setMsg] = useState("아직");

  const makeAll = async () => {
    const alba = [];

    for (let i = 1; i <= 100; i++) {
      alba.push(makePizza());
    }

    await Promise.all(alba);
    setMsg("완료");
  };

  const makePizza = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/", {
        method: "POST",
      });
      if (res.ok) {
        finished.current++;
      } else {
        return makePizza();
      }
    } catch (e) {
      return;
      // return makePizza();
    }
  };

  return (
    <div>
      <button onClick={makeAll}>피자만들기</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
