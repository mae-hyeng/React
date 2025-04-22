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
    e.stopPropagation();
    onClick(e, id);
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
      {img.length === 1 ? (
        <img
          className={`single-icon ${isActive ? "touched" : ""}`}
          src={img[0]}
        />
      ) : (
        <div className="FolderList_icons">
          <ItemList isActive={isActive} img={img} />
        </div>
      )}
      {img.length === 1 ? (
        <div className={`FolderList_names`}>
          {decodeURIComponent(
            img[0]
              .split("/")
              .pop()
              .replace(/\.[^/.]+$/, "")
          )}
        </div>
      ) : (
        <div className={`FolderList_names`}>{name}</div>
      )}
    </div>
  );
};

export default FolderList;
