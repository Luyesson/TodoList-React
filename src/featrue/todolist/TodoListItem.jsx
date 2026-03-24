import { useState } from "react";
import { useTodosContext } from "@/context/TodosContext";
import DelectConfirm from "@/featrue/detailstodo/DelectConfirm";
function TodoListItem({ todo, toggleDetails }) {
  const { todos, setTodos } = useTodosContext();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  function toggleTodo(id) {
    setTodos((prev) =>
      prev
        .map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        .sort((a, b) => a.done - b.done),
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setShowDeleteConfirm(false);
  }

  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
        </label>
      </th>
      <td
        className="text-center"
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >
        {todo.todo}
      </td>
      <td>
        <button
          className="btn btn-outline btn-xs text-green-400 text-sm font-bold"
          onClick={() => toggleDetails(todo)}
        >
          details
        </button>
      </td>
      <td className="relative">
        <button
          className="btn btn-square size-8"
          type="button"
          onClick={() => setShowDeleteConfirm((prev) => !prev)}
        >
          ×
        </button>
        {showDeleteConfirm && (
          <DelectConfirm
            setShowDeleteConfirm={setShowDeleteConfirm}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        )}
      </td>
    </tr>
  );
}

export default TodoListItem;
