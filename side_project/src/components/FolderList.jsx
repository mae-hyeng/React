import "./FolderList.css";
import ItemList from "./ItemList";

const FolderList = ({ id, onClick, isActive, origin, containerRef }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // 부모 클릭 막기
    onClick(e, id);
  };

  const style = {};
  if (isActive && origin && containerRef.current) {
    const container = containerRef.current.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;

    const offsetX = centerX - origin.x;
    const offsetY = centerY - origin.y;

    style.transform = `translate(${offsetX}px, ${offsetY}px) scale(2)`;
    style.zIndex = 1000;
  }

  return (
    <div
      className={`FolderList ${isActive ? "active" : ""}`}
      onClick={handleClick}
      style={style}
    >
      <div className="FolderList_icons">
        <ItemList />
      </div>
      <div className="FolderList_names">이름</div>
    </div>
  );
};

export default FolderList;
