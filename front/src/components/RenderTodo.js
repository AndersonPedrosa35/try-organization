import React, { useContext } from 'react';
import { Context } from '../contexts/createContext';

function lineThrought(target) {
  target.classList.toggle('riscado');
}

export default function RenderTodo() {
  const { objTodo } = useContext(Context);
  return (
    <ul>
      { objTodo && objTodo.map(({ todo }, index) => 
      <li key={ index } onClick={({ target }) => lineThrought(target)} className="todo">{ todo }</li> ) }
    </ul>
  )
}
