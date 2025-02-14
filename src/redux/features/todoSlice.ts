import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string; // Corrected spelling
  isCompleted?: boolean;
};

type TInitialiation = {
  todos: TTodo[];
};

const initialState: TInitialiation = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload /* isCompleted: false, */); // Assuming isCompleted is handled externally
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter((item) => item.id == action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
