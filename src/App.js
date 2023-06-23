import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import Filter from "./components/Filter";
import TasksView from "./components/TasksView";
import Task from "./components/Task";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    <Task
      name="Task1"
      id="1"
      status="in-progress"
      description="task details"
      assignedTo="Parisa"
      dueDate="12/06/2023"
    />,
  ]);

  return (
    <div className="App">
      <Header />
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="user-form p-4 border rounded-2" id="create-form">
              <CreateTask tasks={tasks} />
            </div>
          </div>
          <div className="col-md-8 col-sm-6 col-12 layout">
            <Filter />
            <div class="row margin-top-5" id="taskCards">
              {tasks}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
