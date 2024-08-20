import React, { useRef } from 'react';
import styles from './NewTodo.module.css';
import { useDispatch } from 'react-redux';
// import TodoContext from '../context/todo-context';
import { AppDispatch } from '../store';
import { addTodo } from '../store/todo-slice';


// type Props = {
//   onAddTodo: (todoText: string) => void
// };

const NewTodo = () => {

  // const { addTodo } = useContext(TodoContext);
  const dispatch: AppDispatch = useDispatch();

  const todoRef = useRef<HTMLInputElement>(null);

  // const submitHandler = (e: React.MouseEvent) => { // 에러
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // ! 는 절대로 이시점에서는 current가 null이 아님을 확인시켜줌
    const enteredText = todoRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    // addTodo(enteredText);
    dispatch(addTodo(enteredText));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input
        ref={todoRef}
        id="text"
        type="text"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
