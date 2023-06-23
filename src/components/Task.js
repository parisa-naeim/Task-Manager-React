function Task(props) {
  return (
    <div class="col-md-6 col-lg-4 col-12" id={props.id + "-original"}>
      <div class="card">
        <div class="change">
          <span
            class="material-symbols-outlined avatar"
            title={props.assignedTo}
          >
            person
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            {props.status && props.status.toUpperCase()}
          </h6>
          <p class="card-text"> {props.description}</p>
          <label>{props.assignedTo}</label>
          <br />
          <label>{props.dueDate}</label>
          <br />
          <br />
          <span class="material-symbols-outlined delete-btn" id={props.id}>
            delete
          </span>
          <span class="material-symbols-outlined edit-btn" id={props.id}>
            stylus
          </span>
          {/* <span style="display:${(props.status === "done") ? "none" : "inilne-block"}" class="material-symbols-outlined mark-as-done" title="Mark as done" id="${props.id}">done</span> */}
        </div>
      </div>

      <div
        class="col-md-6 col-lg-4 col-12"
        id={props.id + "-editable"}
        style={{ display: "none" }}
      >
        <div class="card pt-3">
          <div class="change">
            <span class="material-symbols-outlined save-btn" id={props.id}>
              save
            </span>
            <span class="material-symbols-outlined cancel-btn" id={props.id}>
              cancel
            </span>
          </div>
          <div class="card-body">
            <input id={props.id + "-name"} value={props.name} type="text" />
            <input id={props.id + "-status"} value={props.status} />
            <input
              id={props.id + "-description"}
              type="text"
              value={props.description}
            />
            <input
              id={props.id + "-assignedTo"}
              type="text"
              value={props.assignedTo}
            />
            <input
              id={props.id + "-dueDate"}
              type="text"
              value={props.dueDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
