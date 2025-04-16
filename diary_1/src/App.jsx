import { useState, createContext, useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";

const mokeData = [
  {
    id: 0,
    createdDate: "2025-04-15",
    content: "1번째 일기",
  },
  {
    id: 1,
    createdDate: "2025-04-18",
    content: "2번째 일기",
  },
  {
    id: 2,
    createdDate: "2025-03-12",
    content: "3번째 일기",
  },
];

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, setData] = useState(mokeData);
  return (
    <>
      <DiaryStateContext value={data}>
        <DiaryDispatchContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext>
      </DiaryStateContext>
    </>
  );
}

export default App;
