import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {

  // const todos = [
  //   new Todo('Learning React'),
  //   new Todo('Learning Typescript'),
  //   new Todo('Learning Redux'),
  // ];

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter(item => item.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
}

export default App;
