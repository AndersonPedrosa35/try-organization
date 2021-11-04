import React, { useContext } from 'react';
import { Context } from '../contexts/createContext'

export default function CreateTodo() {
  const { todo, setTodo, setObjTodo, objTodo } = useContext(Context);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="todo">
          <input
            id="todo"
            value={ todo }
            onChange={({ target }) => setTodo(target.value)}
          />
        </label>
        <button
          onClick={() => {
            setObjTodo([{ todo}, ...objTodo ]);
          }}
        >
          Criar
        </button>
      </form>
    </div>
  )
}
