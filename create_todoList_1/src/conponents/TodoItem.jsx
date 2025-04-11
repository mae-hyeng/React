import "./TodoItem.css";

const TodoItem = ({ id, checked, content, date, onUpdate, onDelete }) => {
  const onClickDelete = () => {
    onDelete(id);
  };

  const onChangeUpdate = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeUpdate} checked={checked} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
