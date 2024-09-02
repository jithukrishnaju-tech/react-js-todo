import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/appSlice";

const Todo = ({ value, index }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="list-div">
      <div>{value}</div>
      <button className="list-btn" onClick={handleRemove}>
        🗑️
      </button>
    </div>
  );
};

export default Todo;
