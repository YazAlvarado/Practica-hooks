import { createContext, useReducer, useEffect } from "react";
import { taskReducer } from "./taskReducer";
import useLocalStorage from "./useLocalStorage";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [state, dispatch] = useReducer(taskReducer, tasks);
  useEffect(() => {
    setTasks(state);
  }, [state, setTasks]);

  return (
    <TaskContext.Provider value={{ tasks: state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
