import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

type Props = {
  items: Todo[],
  onRemove: (id: string) => void
};

const Todos = (props: Props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  );
};

export default Todos;
