import React, { useContext } from 'react';
import { Context } from '../contexts/createContext';


export default function RenderTodo() {
  const { objTodo, listRemove, setListRemove } = useContext(Context);

  function lineThrought(target) {
    target.classList.toggle('riscado');
    setListRemove([target.innerText, ...listRemove]);
    if (!target.classList.contains('riscado')) {
      setListRemove(listRemove.filter((task) => task !== target.innerText));
    }
  }

  return (
    <ul>
      { objTodo && objTodo.map(({ todo }, index) => 
      <li key={ index } onClick={({ target }) => lineThrought(target)} className="todo">{ todo }</li> ) }
    </ul>
  )
}
