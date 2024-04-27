import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function App() {

  const [todos, setToDos] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    // const todo = {todo}
  
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos)
    }).then(() => {
      console.log("new todo added");
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setToDos(data)
      })
  }, [])

  

  return (
    <div className="App">

      <div>
        <h1 className="text-center font-black py-10" >Todo App using React js and Tailwind CSS</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          required
        />
        <button>Add</button>
      </form>

  

      {todos && <TodoList todos={todos} />}

    </div>
  );
}

export default App;
