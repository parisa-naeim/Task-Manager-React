import CardAvatar from "./CardAvatar";

function Task({ task }) {
  return (
    <div class="col-md-6 col-lg-4 col-12" id={task.id + "-original"}>
      <div class="card">
        <CardAvatar assignedTo={task.assignedTo} />
        <div class="card-body">
          <h5 class="card-title">{task.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            {task.status && task.status.toUpperCase()}
          </h6>
          <p class="card-text"> {task.description}</p>
          {/* <label>{task.assignedTo}</label>
          <br /> */}
          <label>{task.dueDate}</label>
          <br />
          <br />
          <span class="material-symbols-outlined delete-btn" id={task.id}>
            delete
          </span>
          <span class="material-symbols-outlined edit-btn" id={task.id}>
            stylus
          </span>
          {/* <span style="display:${(task.status === "done") ? "none" : "inilne-block"}" class="material-symbols-outlined mark-as-done" title="Mark as done" id="${task.id}">done</span> */}
        </div>
      </div>

      <div
        class="col-md-6 col-lg-4 col-12"
        id={task.id + "-editable"}
        style={{ display: "none" }}
      >
        <div class="card pt-3">
          <div class="change">
            <span class="material-symbols-outlined save-btn" id={task.id}>
              save
            </span>
            <span class="material-symbols-outlined cancel-btn" id={task.id}>
              cancel
            </span>
          </div>
          <div class="card-body">
            <input id={task.id + "-name"} value={task.name} type="text" />
            <input id={task.id + "-status"} value={task.status} />
            <input
              id={task.id + "-description"}
              type="text"
              value={task.description}
            />
            <input
              id={task.id + "-assignedTo"}
              type="text"
              value={task.assignedTo}
            />
            <input id={task.id + "-dueDate"} type="text" value={task.dueDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
