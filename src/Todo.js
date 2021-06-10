import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="checkbutton" onClick={completeHandler}>
        <FontAwesomeIcon className="check" icon={faCheck} />
      </button>
      <button className="trashbutton" onClick={deleteHandler}>
        <FontAwesomeIcon className="trash" icon={faTrash} />
      </button>
    </div>
  );
}

export default Todo;
