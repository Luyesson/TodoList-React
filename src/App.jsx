import "@/main.css";
import Header from "@/ui/Header";
import TodoList from "@/featrue/todolist/TodoList";
import AddTodo from "@/featrue/addtodo/AddTodo";
import Footer from "@/ui/Footer";
import DetailsInfo from "@/featrue/detailstodo/DetailsInfo";
import useDetails from "@/hooks/useDetails";
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
        <TodoList toggleDetails={toggleDetails} />
      </main>
      {/* 底部-静态内容 */}
      <Footer />
    </div>
  );
}

export default App;
