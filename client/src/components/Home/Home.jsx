import React from "react";
import AddTodo from "../Add-Todo/AddTodo";

const Home = () => {
  return (
    <div className="container w-full flex justify-center items-center h-screen">
      <div className="card h-80 w-80 text-center">
        <h1 className="text-2xl font-bold">Get Things Done!</h1>
        <AddTodo />
        <div className="todos"></div>
      </div>
    </div>
  );
};

export default Home;
