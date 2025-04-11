import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onClick }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onClickTodo = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onClick(content);
    setContent("");
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onClickTodo();
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        type="text"
        placeholder="새로운 Todo..."
      />
      <button onClick={onClickTodo}>추가</button>
    </div>
  );
};

export default Editor;
