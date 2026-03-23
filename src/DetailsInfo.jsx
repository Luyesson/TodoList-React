function DetailsInfo({
  isEditing,
  setEditTodo,
  setEditDetails,
  handleToggleEdit,
  backToMainMenu,
  editDetails,
  selectedTodo,
  editTodo,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold text-green-600 text-center mb-8 mt-8">
        Details
      </h1>
      <div className="card w-96 bg-base-100 card-xl shadow-sm self-center w-[90%]">
        <div className="card-body p-8">
          {isEditing ? (
            <>
              <input
                type="text"
                className="input input-bordered w-full"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered mt-3 w-full min-h-28"
                value={editDetails}
                onChange={(e) => setEditDetails(e.target.value)}
              />
            </>
          ) : (
            <>
              <h2 className="card-title">{selectedTodo?.todo}</h2>
              <p className="text-base">{selectedTodo?.details}</p>
            </>
          )}
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="btn btn-success rounded-md"
              onClick={handleToggleEdit}
            >
              {isEditing ? "保存" : "修改"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-success fixed bottom-6 right-6 rounded-full shadow-lg mb-8 mr-2"
          onClick={backToMainMenu}
        >
          主菜单
        </button>
      </div>
    </div>
  );
}
export default DetailsInfo;
