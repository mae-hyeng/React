import { useState, useRef } from "react";
import "./Background.css";
import FolderList from "./FolderList";

const Background = () => {
  const [activeId, setActiveId] = useState(null);
  const [folderPositions, setFolderPositions] = useState({});
  const containerRef = useRef(null);

  const onClickFolder = (e, id) => {
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
        {[1, 2, 3, 4, 5].map((id) => (
          <FolderList
            key={id}
            id={id}
            onClick={onClickFolder}
            isActive={activeId === id}
            origin={folderPositions}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
