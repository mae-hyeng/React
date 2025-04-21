import "./ItemList.css";

const ItemList = ({ isActive, img }) => {
  const style = {};
  if (isActive) {
    style.gap = "6px";
  }
  return (
    <div className="ItemList" style={style}>
      {img.map((image, idx) => {
        return (
          <img key={idx} className={isActive ? "touched" : ""} src={image} />
        );
      })}
    </div>
  );
};

export default ItemList;
