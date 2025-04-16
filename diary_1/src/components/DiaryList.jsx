import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const [sorted, setSorted] = useState("latest");
  const nav = useNavigate();

  const onChangeSorted = (e) => {
    setSorted(e.target.value);
  };

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sorted === "latest") {
        return a.createdDate - b.createdDate;
      } else {
        return b.createdDate - a.createdDate;
      }
    });
  };

  const getSortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSorted}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="DiaryItem_wrapper">
        {getSortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
