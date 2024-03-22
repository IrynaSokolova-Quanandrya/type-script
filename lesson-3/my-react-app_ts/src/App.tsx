import React, { useState } from "react";
import TodoItem from "./Components/TodoItem";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { Todo } from "./types";

// Створюємо інтерфейс опису хука usestate Todo
// Типізуємо параметри в методах addTodo та deleteTodo

/**
 * 
 * 1. додаємо redux в проєкт
 * 2. створюємо слайс
 * 3. типізуємо стейт
 * 4. типізуємо action ActionPayload<type>
 * 5. створюємо store export type RootState = ReturnType<typeof store.getState>;
 * 6.Додаємо провайдер
 * 7.Діспачимо екшени та типізуємо стейт в селекторі
 */

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
    
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
