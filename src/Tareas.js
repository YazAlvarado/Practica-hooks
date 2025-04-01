import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Tareas() {
  const { tasks, dispatch } = useContext(TaskContext);
  const [tarea, setTarea] = useState("");

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    dispatch({ type: "AGREGAR_TAREA", payload: tarea });
    setTarea("");
  };
  return (
    <div>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{ textDecoration: t.completado ? "line-through" : "none" }}
          >
            {t.texto}
            <button
              onClick={() => dispatch({ type: "TOGGLE_TAREA", payload: t.id })}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <button
              onClick={() =>
                dispatch({ type: "ELIMINAR_TAREA", payload: t.id })
              }
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
