import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Edit = () => {
  const param = useParams();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Edit;
