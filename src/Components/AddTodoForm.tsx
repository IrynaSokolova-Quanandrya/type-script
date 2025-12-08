import React, { useState } from "react";
// створюємо інтерфейс AddTodoFormProps
// типізуємо компонент FC<>
const AddTodoForm= ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddClick = () => {
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTodoForm;
