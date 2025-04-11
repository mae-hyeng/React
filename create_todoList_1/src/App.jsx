import { useState } from "react";
import Header from "./conponents/Header";
import Editor from "./conponents/Editor";
import List from "./conponents/List";
import "./App.css";

const mokData = [
  {
    id: 0,
    checked: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    checked: false,
    content: "혼자해보기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    checked: false,
    content: "첫 시도",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mokData);

  const onCreate = (content) => {
    const newTodo = {
      id: 0,
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
