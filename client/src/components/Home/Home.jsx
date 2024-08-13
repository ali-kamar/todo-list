import React, { useEffect, useState } from "react";
import AddTodo from "../Add-Todo/AddTodo";
import axios from "../../api/axios";
import Todo from "../Todo/Todo";
const Home = () => {
  const [todos, setTodos] = useState([])
useEffect(() => {
  const fetchTodos = async () => {
    try {
      const result = await axios.get("todos");
      setTodos(result.data); // Assuming result.data contains the todos
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  fetchTodos();
}, []); 
  return (
    <div className="container w-full flex justify-center items-center h-screen">
      <div className="card h-auto w-96 text-center bg-indigo-950 rounded-lg">
        <h1 className="text-2xl font-bold">Get Things Done!</h1>
        <AddTodo />
        <div className="todos">
          {todos.map((todo) => (
            <Todo 
            key={todo.id}
            todo={todo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
