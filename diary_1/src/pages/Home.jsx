import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={`${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월`}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList data={data} />
    </div>
  );
};

export default Home;
