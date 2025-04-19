import "./ItemList.css";
import appstore from "./../assets/appstore_logo.png";

const ItemList = () => {
  return (
    // 폴더 이름에 맞는 이미지들만 반복문 돌려서 표시하기
    <div className="ItemList">
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
      <img src={appstore} />
    </div>
  );
};

export default ItemList;
