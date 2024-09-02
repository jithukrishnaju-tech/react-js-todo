import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
  text: "",
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    clearText: (state) => {
      state.text = "";
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    clearTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, setText, clearText, removeTodo, clearTodos } =
  appSlice.actions;
export default appSlice.reducer;
