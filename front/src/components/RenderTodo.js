import React, { useContext } from 'react';
import { Context } from '../contexts/createContext';

export default function RenderTodo() {
  const { objTodo } = useContext(Context);
  return (
    <ul>
      { objTodo && objTodo.map(({ todo }) => {
        <li>{ todo }</li>
      }) }
    </ul>
  )
}
