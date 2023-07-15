import CardAvatar from "./CardAvatar";

function TaskCardView({ task, onDelete, onEdit }) {
  const deleteTask = () => {
    onDelete(task.id);
  };

  return (
    <div className="card">
      <CardAvatar assignedTo={task.assignedTo} />
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {task.status && task.status.toUpperCase()}
        </h6>
        <p className="card-text"> {task.description}</p>
        {/* <label>{task.assignedTo}</label>
      <br /> */}
        <label>{task.dueDate}</label>
        <br />
        <br />
        <span
          className="material-symbols-outlined delete-btn"
          id={task.id}
          onClick={deleteTask}
        >
          delete
        </span>
        <span
          className="material-symbols-outlined edit-btn"
          id={task.id}
          onClick={onEdit}
        >
          stylus
        </span>
        {/* <span style="display:${(task.status === "done") ? "none" : "inilne-block"}" className="material-symbols-outlined mark-as-done" title="Mark as done" id="${task.id}">done</span> */}
      </div>
    </div>
  );
}

export default TaskCardView;
