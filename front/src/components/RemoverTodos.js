import React, { useContext, useState } from 'react';
import { Context } from '../contexts/createContext';

function removeTarefas(target) {
  target.parentNode.removeChild(target);
}

export default function RemoverTodos() {
  const { objTodo } = useContext(Context);
  const [remove, setRemove] = useState(false);
  return (
    objTodo && objTodo.map(({ todo }, index) => (
      <label key={ index } htmlFor={ index }>
        { todo }
      <input 
      type="checkbox"
        id={ index } 
        onChange={({ target }) => removeTarefas(target)} 
      />
    </label>
    ))
  )
}
