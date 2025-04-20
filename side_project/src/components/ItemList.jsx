import "./ItemList.css";
import appstore from "./../assets/appstore_logo.png";

const ItemList = ({ isActive }) => {
  const style = {};
  if (isActive) {
    style.gap = "6px";
  }
  return (
    // 폴더 이름에 맞는 이미지들만 반복문 돌려서 표시하기
    <div className="ItemList" style={style}>
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
      <img className={isActive ? "touched" : ""} src={appstore} />
    </div>
  );
};

export default ItemList;
