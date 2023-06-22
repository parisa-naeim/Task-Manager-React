function Filter() {
  return (
    <div className="row margin-top-5">
      <div className="col-md-4 col-12 text-center">
        <label className="filter-label">Filter</label>
      </div>
      <div className="col-md-4 col-6 text-center">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Assignee
          </button>
          <ul className="dropdown-menu assigned-to" id="assignee"></ul>
        </div>
      </div>
      <div className="col-md-4 col-6 text-center">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </button>
          <ul className="dropdown-menu filter-status">
            <li>
              <a className="dropdown-item" value="to-do" href="#">
                To Do
              </a>
            </li>
            <li>
              <a className="dropdown-item" value="in-progress" href="#">
                In Progress
              </a>
            </li>
            <li>
              <a className="dropdown-item" value="review" href="#">
                Review
              </a>
            </li>
            <li>
              <a className="dropdown-item" value="done" href="#">
                Done
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
