import React from "react";
import TodoItem from "./Components/TodoItem";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { RootState } from "./store";
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
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={(id) => dispatch(deleteTodo(id))} />
        ))}
      </ul>
    </div>
  );
}

export default App;
