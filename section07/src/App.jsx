import { useState, useEffect, useRef } from 'react';
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 컴포넌트의 라이프 사이클 제어하기
  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, [])
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  })
  // 3. 언마운트 : 죽음
  // 3가지 라이프 사이클 모두 useEffect로 제어할 수 있음



  const onClickBtn = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>

      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }}></input>
      </section>

      <section>
        <Viewer count={count}/>
        {count % 2 === 0? <Even /> : null}
      </section>

      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  )
}

export default App
