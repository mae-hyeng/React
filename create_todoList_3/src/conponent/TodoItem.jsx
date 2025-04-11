import "./TodoItem.css";

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

export default TodoItem;
