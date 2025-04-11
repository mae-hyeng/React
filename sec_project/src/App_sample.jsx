import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

function App() {

  const [date, setDate] = useState('');
  const [wDate, setWDate] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [searchTodoList, setSearchTodoList] = useState([]);
  
  useEffect(() => {
    const day = new Date();
    const days = ['Sun', 'Mon', 'Tus', 'Wen', 'Tur', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formatted = `${days[day.getDay()]} ${months[day.getMonth()]} ${day.getDate()} ${day.getFullYear()}`;
    setDate(formatted);
  }, []);

  // todoList 추가
  const onClickTodo = (value) => {
    setTodoList([...todoList, value]);
    const writeDate = new Date();
    const writeDateFormat = `${writeDate.getFullYear()}.${writeDate.getMonth() + 1}.${writeDate.getDate()}`
    setWDate(writeDateFormat);
  }

  // todoList 삭제
  const deleteTodo = (item) => {
    const newTodoList = [...todoList];
    newTodoList.splice(newTodoList.indexOf(item), 1);
    setTodoList(newTodoList);

    // 여기에서 삭제 후 searchTodoList의 배열값이 정상적으로 초기화 되지 않음. 수정 필요
    // setSearchTodoList()
  }

  // todoList 검색
  const searchTodo = (search) => {
    const result = todoList.filter(todo => 
      todo.toLowerCase().includes(search.toLowerCase())
    )
    setSearchTodoList(result);
  }

  return (
    <>
      <div>
        오늘은
      </div>
      <div>
        <h1>{date}</h1>
      </div>
      <AddTodo onClickTodo = {onClickTodo} />
      <div>
        <h4>Todo List</h4>
      </div>
      <TodoList item={searchTodoList.length > 0 ? searchTodoList : todoList} date={wDate} deleteTodo={deleteTodo} searchTodo={searchTodo}/>
    </>
  )
}

export default App
