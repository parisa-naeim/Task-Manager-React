function CreateTask(props) {
  const createTask = () => {
    props.onCreate({
      id: "1",
      name: "my task1",
      status: "in-progress",
      description: "task details",
      assignedTo: "Parisa",
      dueDate: "12/06/2023",
    });
  };

  return (
    <div>
      <label for="name" className="form-label">
        Name
      </label>
      <input type="text" className="form-control" id="name" name="name" />
      <p id="invalidName" className="error"></p>
      <br />
      <label for="description" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        id="description"
        name="description"
      ></textarea>
      <p id="invalidDescription" className="error"></p>
      <br />
      <label for="assigned-to" className="form-label">
        Assigned to
      </label>
      <input
        type="text"
        className="form-control"
        id="assigned-to"
        name="assigned-to"
      />
      <p id="invalidAssignedTo" className="error"></p>
      <br />
      <label for="due-Date" className="form-label">
        Due Date
      </label>
      <input
        type="date"
        className="form-control"
        id="due-Date"
        name="due-Date"
      />
      <br />
      <label for="status" className="form-label">
        Status
      </label>
      <select name="status" className="form-select" id="status">
        <option value="to-do">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="review">Review</option>
        <option value="done">Done</option>
      </select>
      <br />
      <button
        onClick={createTask}
        className="btn btn-primary"
        value="Create"
        id="create"
      >
        Create
      </button>
      <input
        type="reset"
        className="btn btn-secondary"
        value="Reset"
        id="reset"
      />
    </div>
  );
}

export default CreateTask;
