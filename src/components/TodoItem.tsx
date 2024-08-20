import React from 'react';
import styles from './TodoItem.module.css';

type Props = {
  id: string,
  text: string,
  onRemove: (id: string) => void
};

const TodoItem = ({ id, text, onRemove }: Props) => {

  const onRemoveTodo = () => {
    onRemove(id);
  };

  return <li className={styles.item} onClick={onRemoveTodo}>{text}</li>;
};

export default TodoItem;
