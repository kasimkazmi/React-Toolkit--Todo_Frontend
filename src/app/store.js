import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "../features/todoSlice/todoSlice";

export const store = configureStore({
  reducer: TodoReducer,
});
