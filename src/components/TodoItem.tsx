import React, { useContext } from 'react';
import styles from './TodoItem.module.css';
import TodoContext from '../context/todo-context';

type Props = {
  id: string,
  text: string,
  // onRemove: (id: string) => void
};

const TodoItem = ({ id, text }: Props) => {

  const { removeTodo } = useContext(TodoContext);

  const onRemoveTodo = () => {
    removeTodo(id);
  };

  return <li className={styles.item} onClick={onRemoveTodo}>{text}</li>;
};

export default TodoItem;
