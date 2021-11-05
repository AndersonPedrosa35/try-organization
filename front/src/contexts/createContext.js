import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [todo, setTodo] = useState('');
  const [objTodo, setObjTodo] = useState([]);
  const [listRemove, setListRemove] = useState([]);

  const objectStates = {
    todo,
    setTodo,
    objTodo,
    setObjTodo,
    listRemove,
    setListRemove
  };

  return (
    <Context.Provider value={ objectStates }>
      { children }
    </Context.Provider>
  )
}