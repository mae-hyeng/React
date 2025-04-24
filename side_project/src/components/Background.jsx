import { useState, useRef } from "react";
import "./Background.css";
import FolderList from "./FolderList";
import { getImageListByType } from "../utils/getImageListByType";

const mokeFolderName = ["엔터테인먼트", "게임", "금융", "잡동사니", "여행"];

const Background = () => {
  const [activeId, setActiveId] = useState(null);
  const [folderPositions, setFolderPositions] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [FolderName, setFolderName] = useState(mokeFolderName);

  // Todo 길게 눌렀을 때 삭제 버튼 표시 및 삭제 기능 추가
  const onLongPressDelete = () => {
    setTimeout(() => {
      console.log("길게 누름");
    }, 600);
  };

  const onClickFolder = (e, id) => {
    if (
      e.target.classList.contains("single-icon") ||
      e.target.classList.contains("FolderList_names")
    ) {
      return;
    }
    if (activeId) return closeFolder();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setFolderPositions({ x, y });
    activeId === id ? closeFolder() : setActiveId(id);
  };

  const closeFolder = () => {
    setActiveId(null);
  };

  return (
    <div
      className="Background"
      onClick={closeFolder}
      // onMouseDown={onLongPressDelete}
      ref={containerRef}
    >
      <div className="Folder_wrapper">
        {FolderName.map((name, idx) => {
          const img = getImageListByType(name.toLowerCase());

          return (
            <FolderList
              key={idx}
              id={idx}
              onClick={onClickFolder}
              name={name}
              isActive={activeId === idx}
              origin={folderPositions}
              containerRef={containerRef}
              img={img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Background;
