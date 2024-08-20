import React from "react";
import Todo from "../models/todo";

export type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export default TodoContext;