import { useTodosContext } from "./context/TodosContext";

function AddTodo() {
  const { todo, setTodo, handleAddTodo } = useTodosContext();
  return (
    <div style={{ margin: "15px 0 10px 0" }}>
      <fieldset className="fieldset flex justify-center">
        <legend className="fieldset-legend text-center">
          Write down your todo:
        </legend>
        <input
          type="text"
          className="input input-success w-[55%] h-[35px]"
          style={{ marginRight: "20px" }}
          placeholder="Type here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="btn btn-dash btn-success w-[20%] h-[35px]"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </fieldset>
    </div>
  );
}
export default AddTodo;
