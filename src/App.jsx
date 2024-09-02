import { useState } from "react";
import "./App.css";
import TodoBox from "./component/TodoBox";
import Header from "./component/Header";
function App() {
  return (
    <>
      <div className="todo-box">
        <Header />
        <TodoBox />
      </div>
    </>
  );
}
export default App;
