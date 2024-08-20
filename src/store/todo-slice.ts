import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
}

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
    addTodo: (state: TodosState, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: new Date().toISOString(),
        text: action.payload,
      };
      state.items.push(newTodo);
    },
    removeTodo: (state: TodosState, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;