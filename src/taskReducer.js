export const taskReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return [
        ...state,
        { id: Date.now(), texto: action.payload, completado: false },
      ];

    case "ELIMINAR_TAREA":
      return state.filter((tarea) => tarea.id !== action.payload);

    case "TOGGLE_TAREA":
      return state.map((tarea) =>
        tarea.id === action.payload
          ? { ...tarea, completado: !tarea.completado }
          : tarea
      );

    default:
      return state;
  }
};
