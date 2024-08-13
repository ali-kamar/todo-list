import React, { useState } from "react";
import axios from "../../api/axios"

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo !== ""){
      const result = axios.post("todos", todo)
    }

  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
