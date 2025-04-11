import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.includes(search));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        onChange={onChangeSearch}
        value={search}
        placeholder="검색어를 입력하세요"
        type="text"
      />
      {filteredTodos.map((todo) => {
        return (
          // 리액트에서 내부적으로 리스트 형태로 렌더링 된 컴포넌트들나 요소들을 구분할 때 각각의 요소를 key라는 prop으로 구분하게 된다
          // 현재 리스트로 컴포넌트를 렌더링 하고 있을 땐 모든 item에 key라는 prop을 요소로 전달해야 됨
          // 그래서 key={todo.id} 로 전달해주는 것
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default List;
