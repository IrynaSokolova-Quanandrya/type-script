import React, {FC} from "react";
import { Todo } from "../types";

// створюємо інтерфейс TodoItemProps
// типізуємо компонент FC<>

interface TodoItemProps{
  todo: Todo,
  onDelete: (id: number)=>void
}

const TodoItem:FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
