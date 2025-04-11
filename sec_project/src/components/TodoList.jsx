const TodoList = ({item, date, deleteTodo, searchTodo}) => {
    const searchChange = (e) => {
        searchTodo(e.target.value);
    }
    return (
        <div>
            <div>
                <input onChange={searchChange} placeholder="검색어를 입력하세요"></input>
            </div>
            <div>
                {item.map((todo, index) => {
                    return (
                        <div key={index}>
                            <div id={index}>
                                <input type="checkBox"/>
                                {todo}
                                {date}
                                <button onClick={() => {deleteTodo(todo)}}>삭제</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList;