import "./main.css";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import { useState } from "react";
import { useTodosContext } from "@/context/TodosContext";
import DetailsInfo from "./DetailsInfo";
import useDetails from "./hooks/useDetails";
function App() {
  const {
    showDetails,
    selectedTodo,
    isEditing,
    editTodo,
    editDetails,
    setEditTodo,
    setEditDetails,
    toggleDetails,
    backToMainMenu,
    handleToggleEdit,
  } = useDetails();

  return showDetails ? (
    <DetailsInfo
      editDetails={editDetails}
      isEditing={isEditing}
      setEditTodo={setEditTodo}
      setEditDetails={setEditDetails}
      handleToggleEdit={handleToggleEdit}
      backToMainMenu={backToMainMenu}
      selectedTodo={selectedTodo}
      editTodo={editTodo}
    />
  ) : (
    <div className="min-h-screen flex flex-col">
      {/* 头部-静态内容 */}
      <Header />

      <hr className="text-gray-500" />
      {/* 主体-动态内容 */}
      <main className="flex-1 flex flex-col">
        <AddTodo />
        <TodoList showDetails={showDetails} toggleDetails={toggleDetails} />
      </main>
      {/* 底部-静态内容 */}
      <Footer />
    </div>
  );
}

export default App;
