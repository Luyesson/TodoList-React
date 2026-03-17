import "./main.css";
import Header from "./Header";
import TodoListItem from "./TodoListItem";
import AddTodo from "./AddTodo";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <h1
          style={{ display: "inline-block" }}
          className="text-2xl font-bold text-green-600"
        >
          Todo List
        </h1>
      </Header>
      <hr className="text-gray-500" />
      <main className="flex-1">
        <AddTodo />
        <TodoListItem />
      </main>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Written by luyus</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
