import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [addTodo, setAddTodo] = useState("");
  const contentRef = useRef("");

  const onChangeTodo = (e) => {
    setAddTodo(e.target.value);
  };

  const onSubmit = () => {
    if (addTodo === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(addTodo);
    setAddTodo("");
  };

  const onKeydown = (e) => {
    if (addTodo === "") return;
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        onChange={onChangeTodo}
        onKeyDown={onKeydown}
        value={addTodo}
        placeholder="새로운 Todo..."
        type="text"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
