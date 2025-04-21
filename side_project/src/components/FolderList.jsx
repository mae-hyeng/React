import "./FolderList.css";
import ItemList from "./ItemList";

const FolderList = ({
  id,
  onClick,
  isActive,
  name,
  origin,
  containerRef,
  img,
}) => {
  const folderClick = (e) => {
    e.stopPropagation(); // 부모 클릭 막기
    changeDiv(e);
    onClick(e, id);
  };

  const changeDiv = (e) => {
    const nameDiv = e.target;
    console.log(nameDiv);
  };

  const style = {};
  if (isActive && origin && containerRef.current) {
    const container = containerRef.current.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;

    const offsetX = centerX - origin.x;
    const offsetY = centerY - origin.y;

    style.transform = `translate(${offsetX}px, ${offsetY}px) scale(4.5)`;
    style.zIndex = 1000;
  }

  return (
    <div
      className={`FolderList ${isActive ? "active" : ""}`}
      onClick={folderClick}
      style={style}
    >
      <div className="FolderList_icons">
        <ItemList isActive={isActive} img={img} />
      </div>
      <div className={`FolderList_names`}>{name}</div>
    </div>
  );
};

export default FolderList;
