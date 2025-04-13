import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useRef, useContext, createContext } from "react";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

import Button from "./components/Button";
import Header from "./components/Header";

// import { getEmotionImage } from "./util/get-emotion-image";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-04-13").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2025-04-12").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2025-03-12").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav("/new");
  // };

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

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
