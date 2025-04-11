import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const onClickCheckbox = () => {
    onUpdate(todo.id);
  };

  const onClickDeleteTodo = () => {
    onDelete(todo.id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onClickCheckbox} type="checkbox" value={todo.checked} />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteTodo}>삭제</button>
    </div>
  );
};

// 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화나, momo같은 추가적인 기능을 덧붙여서 기능이 추가된 새로운 컴포넌트를 반환하는 것을
// memo와 같은 메서드를 고차 컴포넌트 (HOC)라고 한다
//
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // 콜백함수에서 true를 반환하게 되면 Props가 바뀌지 않았다고 판단 -> 리렌더링 X
//   // 콜백함수에서 false를 반환하게 되면 Props가 바뀌었다고 판단 -> 리렌더링 O

//   if (prevProps.todo.id !== nextProps.todo.id) return false;
//   if (prevProps.todo.checked !== nextProps.todo.checked) return false;
//   if (prevProps.todo.content !== nextProps.todo.content) return false;
//   if (prevProps.todo.date !== nextProps.todo.date) return false;

//   return true;
// });
export default memo(TodoItem);
