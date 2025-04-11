import { useRef, useState } from "react";
import Header from "./conponent/Header";
import Editor from "./conponent/Editor";
import List from "./conponent/List";
import "./App.css";

const mokdata = [
  {
    id: 0,
    checked: false,
    content: "두번째로",
    date: new Date().getTime(),
  },
  {
    id: 1,
    checked: false,
    content: "시작해보는",
    date: new Date().getTime(),
  },
  {
    id: 2,
    checked: false,
    content: "todoList 만들기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mokdata);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      checked: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
