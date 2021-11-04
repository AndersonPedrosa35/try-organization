import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [todo, setTodo] = useState('');
  const [objTodo, setObjTodo] = useState([]);

  const objectStates = {
    todo,
    setTodo,
    objTodo,
    setObjTodo,
  };

  return (
    <Context.Provider value={ objectStates }>
      { children }
    </Context.Provider>
  )
}