import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
// import TodoContextProvider from "./context/TodoContextProvider";
import { Provider } from 'react-redux';
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <NewTodo />
      <Todos />
    </Provider>
  );
}

export default App;
