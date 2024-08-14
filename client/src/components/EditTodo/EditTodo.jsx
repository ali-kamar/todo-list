import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

const EditTodo = ({id}) => {
  const [todo, setTodo] = useState("");
  useEffect(() => {
    const getTodo = async () => {
      try {
        const result = axios.get(`todos/${id}`);
        setTodo(result.data.description);
      } catch (error) {}
    };
    getTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.patch("todos", { description: todo });
      console.log(result);
      setTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  return (
    <form className="input flex justify-center mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="border-2 border-purple-700 bg-transparent p-1 w-64"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button type="submit" className="bg-purple-700 p-1">
        Add Task
      </button>
    </form>
  );
};

export default EditTodo;
