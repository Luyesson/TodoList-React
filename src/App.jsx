import "./main.css";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "Todo 1", done: false },
    { id: 2, todo: "Todo 2", done: false },
    { id: 3, todo: "Todo 3", done: false },
  ]);
  function handleAddTodo() {
    if (todo.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        todo: todo,
        done: false,
      },
    ]);
    setTodo("");
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <hr className="text-gray-500" />
      <main className="flex-1 flex flex-col">
        <AddTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
