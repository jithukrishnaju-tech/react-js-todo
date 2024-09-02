import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoBox = () => {
  const todos = useSelector((state) => state.app.todos);

  return (
    <div className="todo-class">
      {todos.map((value, index) => (
        <Todo key={index} value={value} index={index} />
      ))}
    </div>
  );
};

export default TodoBox;
