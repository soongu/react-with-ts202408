// import React, { useContext } from 'react';
import styles from './TodoItem.module.css';
// import TodoContext from '../context/todo-context';
import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../store/todo-slice';

type Props = {
  id: string,
  text: string,
  // onRemove: (id: string) => void
};

const TodoItem = ({ id, text }: Props) => {

  // const { removeTodo } = useContext(TodoContext);

  const dispatch: AppDispatch = useDispatch();

  const onRemoveTodo = () => {
    // removeTodo(id);
    dispatch(removeTodo(id));
  };

  return <li className={styles.item} onClick={onRemoveTodo}>{text}</li>;
};

export default TodoItem;
