import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
