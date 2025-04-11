import { useState } from 'react'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import './App.css'

function App() {

  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [oper, setOper] = useState('');

  const onClickBtn = (value) => {
    if (typeof value === 'number') {
      setNum((prev) => (prev === 0 ? value : prev + value).toString());
    } else if (value === 'C') {
      setNum(0);
    } else if (value === '+') {
      setPrevNum(num);
      setOper('+');
      setNum(0);
    } else if (value === '-') {
      setPrevNum(num);
      setOper('-');
      setNum(0);
    } else if (value === '*') {
      setPrevNum(num);
      setOper('*');
      setNum(0);
    } else if (value === '/') {
      setPrevNum(num);
      setOper('/');
      setNum(0);
    } else if (value === '=') {
      if (prevNum) {
        switch (oper) {
          case '+' : setNum(parseInt(prevNum) + parseInt(num)); break;
          case '-' : setNum(parseInt(prevNum) - parseInt(num)); break;
          case '*' : setNum(parseInt(prevNum) * parseInt(num)); break;
          case '/' : setNum(parseInt(prevNum) / parseInt(num)); break;
        }
        setOper('');
      }
    }
  }

  return (
    <>
      <div className='f1'>
        <Viewer num = {num}/>
        <Controller onClickBtn = {onClickBtn} />
      </div>
    </>
  )
}

export default App
