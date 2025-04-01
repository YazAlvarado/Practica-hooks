import { TaskProvider } from "./TaskContext";
import Tareas from "./Tareas";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Lista de Tareas</h1>
        <Tareas />
      </div>
    </TaskProvider>
  );
}

export default App;
