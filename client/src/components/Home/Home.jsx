import React, { useEffect, useState } from "react";
import AddTodo from "../Add-Todo/AddTodo";
import axios from "../../api/axios";
import Todo from "../Todo/Todo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await axios.get("todos");
        setTodos(result.data); // Assuming result.data contains the todos
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addNewTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.todo_id === updatedTodo.todo_id ? updatedTodo : todo
      )
    );
  };

  return (
    <div className="container w-full flex justify-center items-center h-screen">
      <div className="card ">
        <h1 className="text-2xl font-bold my-5">Get Things Done!</h1>
        <AddTodo onAddTodo={addNewTodo} />
        <div className="todos mb-8">
          {todos.map((todo) => (
            <Todo
              key={todo.todo_id}
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
