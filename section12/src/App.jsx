import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  useReducer,
  useRef,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

import Button from "./components/Button";
import Header from "./components/Header";

// import { getEmotionImage } from "./util/get-emotion-image";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));

  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    setIsLoading(false);
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

{
  // return 문 안에 있던 내용 주석
  /* <div>
<img src={getEmotionImage(1)} />
<img src={getEmotionImage(2)} />
<img src={getEmotionImage(3)} />
<img src={getEmotionImage(4)} />
<img src={getEmotionImage(5)} />
</div>
<div>
<Link to={"/"}>Home</Link>
<Link to={"/new"}>New</Link>
<Link to={"/diary"}>Diary</Link>

{/* a 태그로 작성시 CSR 방식으로는 페이지 이동이 제공되지 않음 */
}
{
  /* a 태그로 페이지 이동시 깜빡거림... */
}
{
  /* 리액트 앱 내부에서 내부링크를 만들어야할 경우엔 Link 컴포넌트를 사용하는 것이 훨씬 좋다 */
}
{
  /* <a href="/">Home</a>
<a href="/new">New</a>
<a href="/diary">Diary</a> */
}
{
  /* <button onClick={onClickButton}>New 페이지로 이동</button> */
}
// </div> */}

{
  /* <Header
title={"Header"}
leftChild={<Button text={"Left"} />}
rightChild={<Button text={"Right"} />}
/>
<Button
text={"123"}
onClick={() => {
  console.log("123버튼 클릭!");
}}
/>

<Button
text={"123"}
type={"POSITIVE"}
onClick={() => {
  console.log("123버튼 클릭!");
}}
/>

<Button
text={"123"}
type={"NAGATIVE"}
onClick={() => {
  console.log("123버튼 클릭!");
}}
/> */
}
