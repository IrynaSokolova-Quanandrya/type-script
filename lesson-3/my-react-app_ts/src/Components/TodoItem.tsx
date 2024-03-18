import React from "react";

// створюємо інтерфейс TodoItemProps
// типізуємо компонент FC<>


const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
