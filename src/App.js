import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="user-form p-4 border rounded-2" id="create-form">
              <CreateTask />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
