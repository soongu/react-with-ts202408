import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../models/todo';

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = new Todo(action.payload);
      state.items.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;