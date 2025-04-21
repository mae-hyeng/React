import { useState, useRef } from "react";
import "./Background.css";
import FolderList from "./FolderList";
import { getImageListByType } from "../utils/getImageListByType";

const FolderName = ["엔터테이먼트", "게임", "금융", "잡동사니", "여행"];

const Background = () => {
  const [activeId, setActiveId] = useState(null);
  const [folderPositions, setFolderPositions] = useState({});
  const containerRef = useRef(null);

  const onClickFolder = (e, id) => {
    if (activeId) {
      return closeFolder();
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setFolderPositions({ x, y });
    activeId === id ? closeFolder() : setActiveId(id);
  };

  const closeFolder = () => setActiveId(null);

  return (
    <div className="Background" onClick={closeFolder} ref={containerRef}>
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
