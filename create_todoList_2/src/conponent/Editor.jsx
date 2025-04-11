import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef("");

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        onKeyDown={onKeydown}
        onChange={onChange}
        value={content}
        placeholder="새로운 Todo..."
        type="text"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
