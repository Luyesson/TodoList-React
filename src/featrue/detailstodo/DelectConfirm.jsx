function DelectConfirm({ setShowDeleteConfirm, deleteTodo, todo }) {
  return (
    <div className="absolute right-0 top-10 z-10 w-64 rounded-2xl border border-error/20 bg-base-100 p-4 text-left shadow-xl">
      <p className="text-sm font-semibold text-error">Delete this todo?</p>
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
  );
}
export default DelectConfirm;
