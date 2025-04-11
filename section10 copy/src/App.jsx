import { useRef, useState } from "react";
import "./App.css";
import Header from "./conponent/Header";
import Editor from "./conponent/Editor";
import List from "./conponent/List";

const dumbdata = [
  {
    id: 0,
    checked: false,
    content: "세번째로 도전",
    date: new Date().getTime(),
  },
  {
    id: 1,
    checked: false,
    content: "열심히 하자",
    date: new Date().getTime(),
  },
  {
    id: 2,
    checked: false,
    content: "파이팅",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(dumbdata);
  const idRef = useRef(3);

  const onClick = (text) => {
    const newTodo = {
      id: idRef.current++,
      checked: false,
      content: text,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Editor onClick={onClick} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
