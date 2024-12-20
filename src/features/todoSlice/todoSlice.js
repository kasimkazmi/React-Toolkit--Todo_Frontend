import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
}; // initial state

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    // addTodo reducer function

    addTodo: (state, action) => {
      // addTodo reducer
      const todo = {
        id: nanoid(),
        Text: action.payload,
        Status: false,
      };
      state.todos.push(todo);

      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    // deleteTodo reducer function

    deleteTodo: (state, action) => {
      // deleteTodo reducer
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos))

    },
    // updateTodo reducer function
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, Text: action.payload.Text } : todo,

      );
      localStorage.setItem("todos", JSON.stringify(state.todos))

    },
    // toggleTodo reducer function

    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, Status: !todo.Status } : todo,

      );
      localStorage.setItem("todos", JSON.stringify(state.todos))

    },
  },
});

export const { toggleTodo, updateTodo, addTodo, deleteTodo } =
  todoSlice.actions;

  export default todoSlice.reducer;
