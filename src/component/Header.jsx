import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setText, clearText, clearTodos } from "../redux/appSlice";

const Header = () => {
  // const todos = useSelector((state) => state.app.todos);
  const text = useSelector((state) => state.app.text);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text === "") {
      alert("Enter todo");
      return;
    }
    dispatch(addTodo(text));
    dispatch(clearText());
  };

  const handleClearAll = () => {
    dispatch(clearTodos());
    dispatch(clearText());
  };

  return (
    <header>
      <div className="header">
        <h1 className="header-name">Todo List</h1>
      </div>
      <div className="todo-content">
        <input
          className="input-box"
          value={text}
          type="text"
          placeholder="Enter new todos here"
          onChange={(e) => dispatch(setText(e.target.value))}
        />
        <button className="btn" onClick={handleAddTodo}>
          Add todo
        </button>
        <button className="btn" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </header>
  );
};

export default Header;
