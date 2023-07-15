import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import Filter from "./components/Filter";
import Task from "./components/Task";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return tasks.map((task) => <Task task={task} />);
  };

  return (
    <div className="App">
      <Header />
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="user-form p-4 border rounded-2" id="create-form">
              <CreateTask
                onCreate={(newTask) => setTasks([...tasks, newTask])}
              />
            </div>
          </div>
          <div className="col-md-8 col-sm-6 col-12 layout">
            <Filter />
            <div className="row margin-top-5" id="taskCards">
              {getTasks()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
