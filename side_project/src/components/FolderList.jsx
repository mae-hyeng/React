import "./FolderList.css";
import ItemList from "./ItemList";

const FolderList = () => {
  return (
    <div className="FolderList">
      <div className="FolderList_icons">
        <ItemList />
      </div>
      <div className="FolderList_names">이름</div>
    </div>
  );
};

export default FolderList;
