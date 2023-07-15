function TaskCardEdit({ task }) {
  return (
    <div className="card pt-3" id={task.id + "-editable"}>
      <div className="change">
        <span className="material-symbols-outlined save-btn" id={task.id}>
          save
        </span>
        <span className="material-symbols-outlined cancel-btn" id={task.id}>
          cancel
        </span>
      </div>
      <div className="card-body">
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
  );
}

export default TaskCardEdit;
