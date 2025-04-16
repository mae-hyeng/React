import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/editor";
import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"text"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
