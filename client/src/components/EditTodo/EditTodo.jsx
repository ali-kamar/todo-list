import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getTodo = async () => {
      try {
        const result = await axios.get(`todos/${id}`);
        setTodo(result.data.description);
      } catch (error) {}
    };
    getTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.patch(`todos/${id}`, { description: todo });
      if (result.data) navigate("/");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  return (
    <div className="container w-full flex justify-center items-center h-screen">
      <div className="card ">
        <h1 className="text-2xl font-bold my-5">Edit Task!</h1>
        <form
          className="input flex justify-center mb-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Edit Your Task"
            className="border-2 border-purple-700 bg-transparent p-1 w-64"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
          <button type="submit" className="bg-purple-700 p-1">
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
