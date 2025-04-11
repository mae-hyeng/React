import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // if (search === "") return todos;
    return todos.filter((todo) => todo.content.includes(search));
  };

  const filteredTodo = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        onChange={onChangeSearch}
        value={search}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
