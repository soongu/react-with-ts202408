// import React, { useContext } from 'react';
// import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';
// import TodoContext from '../context/todo-context';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// type Props = {
//   items: Todo[],
//   onRemove: (id: string) => void
// };

const Todos = () => {

  // const { items } = useContext(TodoContext);

  const items = useSelector((state: RootState) => state.todos.items);

  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
