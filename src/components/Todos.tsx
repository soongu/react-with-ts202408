import React from 'react';

type Props = {
  items: string[]
};

const Todos = (props: Props) => {
  return (
    <ul>
      {props.items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default Todos;
