import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World", isEdit: false }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        isEdit: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    toggleEdit: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.id === action.payload ? { ...todo, isEdit: true } : todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleEdit } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
