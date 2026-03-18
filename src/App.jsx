import "./main.css";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <hr className="text-gray-500" />
      <main className="flex-1 flex flex-col">
        <AddTodo />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
