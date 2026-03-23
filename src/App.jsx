import "./main.css";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 头部-静态内容 */}
      <Header />

      <hr className="text-gray-500" />
      {/* 主体-动态内容 */}
      <main className="flex-1 flex flex-col">
        <AddTodo />
        <TodoList />
      </main>
      {/* 底部-静态内容 */}
      <Footer />
    </div>
  );
}

export default App;
