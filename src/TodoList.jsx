import TodoListItem from "./TodoListItem";
import { useTodosContext } from "./context/TodosContext";

function TodoList() {
  const { todos } = useTodosContext();
  return (
    <div
      className="flex flex-1 min-h-0 w-[95%] self-center rounded-2xl 
          border-3 border-dashed border-green-300"
    >
      <table
        className="table table-fixed w-full h-full"
        style={{ margin: "0", padding: "5px" }}
      >
        <thead>
          <tr>
            <th className="w-[15%]" style={{ margin: "0", padding: "5px" }}>
              Status
            </th>
            <th className="text-center" style={{ margin: "0", padding: "5px" }}>
              Doing Todo
            </th>
            <th
              className="w-[25%] text-center"
              style={{ margin: "0", padding: "5px" }}
            >
              Details
            </th>
            <th className="w-[15%] " style={{ margin: "0", padding: "5px" }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TodoList;
