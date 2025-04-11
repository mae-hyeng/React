import "./App.css";
import { useState, useRef, useReducer, useCallback } from "react";

import Editor from "./conponent/Editor";
import Header from "./conponent/Header";
import List from "./conponent/List";
// import Exam from "./components/Exam";

const mokData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mokData);
  const [todos, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
    // setTodos(todos.map((todo) => {
    //   if (todo.id === targetId) {
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone
    //     }
    //   }
    //   return todo;
    // }))
    // setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo))
  }, []);

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type : "DELETE",
  //     targetId : targetId,
  //   })
  //   // setTodos(todos.filter((todo) => todo.id !== targetId))
  // }

  // useCallback을 사용해서 마운트 되었을 때 한 번만 생성되고, 리렌더링이 돼도 재생성되지 않음
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
    // setTodos(todos.filter((todo) => todo.id !== targetId))
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
