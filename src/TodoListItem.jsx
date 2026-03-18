import { useState } from "react";

function TodoListItem({ todo, todos, setTodos }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  function toggleTodo(id) {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t,
    );
    const sortedTodos = newTodos.sort((a, b) => a.done - b.done);
    setTodos(sortedTodos);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
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
        <button className="btn btn-outline btn-xs text-green-400 text-sm font-bold">
          details
        </button>
      </td>
      <th className="relative">
        <button
          className="btn btn-square size-8"
          type="button"
          onClick={() => setShowDeleteConfirm((prev) => !prev)}
        >
          ×
        </button>
        {showDeleteConfirm && (
          <div className="absolute right-0 top-10 z-10 w-64 rounded-2xl border border-error/20 bg-base-100 p-4 text-left shadow-xl">
            <p className="text-sm font-semibold text-error">
              Delete this todo?
            </p>
            <p className="mt-1 text-xs text-base-content/70">
              This action cannot be undone.
            </p>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-error btn-sm text-white"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </th>
    </tr>
  );
}

export default TodoListItem;
