import { useState, useMemo } from "react";
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

  // const getAnalyzedData = () => {
  //   console.log("getAnalayzedData 호출!");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.checked).length;

  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalayzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.checked).length;

    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 두번째 배열은 의존성배열, deps이다. useEffect 훅 강의 참고..

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
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
