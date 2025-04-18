import "./Background.css";
import FolderList from "./FolderList";

const Background = () => {
  return (
    <div className="Background">
      <div className="Folder_wrapper">
        <FolderList />
        <FolderList />
        <FolderList />
        <FolderList />
        <FolderList />
      </div>
    </div>
  );
};

export default Background;
