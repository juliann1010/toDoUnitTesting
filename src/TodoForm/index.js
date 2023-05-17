import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label data-cy="Header-Todo">Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        data-cy="Textarea-Todo"
        onChange={onChange}
        placeholder="Cortar cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer" data-cy="Button-Cancel">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          data-cy="Button-Submit"
          className="TodoForm-button TodoForm-button--add"
          onClick={onSubmit}
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
