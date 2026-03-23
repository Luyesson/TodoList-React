import { useState } from "react";
import { useTodosContext } from "@/context/TodosContext";
function useDetails() {
  const { todos, setTodos } = useTodosContext();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editDetails, setEditDetails] = useState("");

  function toggleDetails(todoItem) {
    setSelectedTodo(todoItem);
    setEditTodo(todoItem.todo ?? "");
    setEditDetails(todoItem.details ?? "");
    setIsEditing(false);
    setShowDetails(true);
  }

  function backToMainMenu() {
    setShowDetails(false);
  }

  function handleToggleEdit() {
    if (!selectedTodo) return;
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    const todoText = editTodo.trim();
    if (!todoText) return;

    setTodos(
      todos.map((t) =>
        t.id === selectedTodo.id
          ? { ...t, todo: todoText, details: editDetails }
          : t,
      ),
    );
    setSelectedTodo({ ...selectedTodo, todo: todoText, details: editDetails });
    setIsEditing(false);
  }
  return {
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
  };
}
export default useDetails;
