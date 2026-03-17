function TodoListItem() {
  return (
    <div className="flex justify-center">
      <table
        className="table table-fixed w-[94%] "
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
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>123243243243243</td>
            <td>
              {" "}
              <button className="btn btn-outline btn-xs text-green-400 text-sm font-bold">
                details
              </button>
            </td>
            <th>
              {" "}
              <input className="btn btn-square size-8" type="reset" value="×" />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TodoListItem;
