import { useState } from "react";
import TaskCardEdit from "./TaskCardEdit";
import TaskCardView from "./TaskCardView";

function TaskCard({ task, onDelete }) {
  const [editable, setEditable] = useState(false);

  const editTask = () => {
    setEditable(true);
  };

  return (
    <div className="col-md-6 col-lg-4 col-12" id={task.id + "-original"}>
      {!editable && (
        <TaskCardView task={task} onDelete={onDelete} onEdit={editTask} />
      )}
      {editable && <TaskCardEdit task={task} />}
    </div>
  );
}

export default TaskCard;
