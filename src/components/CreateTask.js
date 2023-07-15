import { useState } from "react";

function CreateTask(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const createTask = () => {
    props.onCreate(inputs);
  };

  return (
    <div>
      <label htmlFor="name" className="form-label">
        Task Title
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        value={inputs.name || ""}
        onChange={handleChange}
      />
      <p id="invalidName" className="error"></p>
      <br />
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        id="description"
        name="description"
        value={inputs.description || ""}
        onChange={handleChange}
      ></textarea>
      <p id="invalidDescription" className="error"></p>
      <br />
      <label htmlFor="assigned-to" className="form-label">
        Assigned to
      </label>
      <input
        type="text"
        className="form-control"
        id="assigned-to"
        name="assignedTo"
        value={inputs.assignedTo || ""}
        onChange={handleChange}
      />
      <p id="invalidAssignedTo" className="error"></p>
      <br />
      <label htmlFor="due-Date" className="form-label">
        Due Date
      </label>
      <input
        type="date"
        className="form-control"
        id="due-Date"
        name="dueDate"
        value={inputs.dueDate || ""}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="status" className="form-label">
        Status
      </label>
      <select
        name="status"
        className="form-select"
        id="status"
        value={inputs.status || "to-do"}
        onChange={handleChange}
      >
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
