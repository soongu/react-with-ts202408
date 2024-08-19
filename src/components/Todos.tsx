import React from 'react';
import Todo from '../models/todo';

type Props = {
  items: Todo[]
};

const Todos = (props: Props) => {
  return (
    <ul>
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
};

export default Todos;
