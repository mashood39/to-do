
function TodoList({ todos }) {
    
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <p>{todo.todo}</p>
                </div>

            ))}
        </div>
    )
}

export default TodoList