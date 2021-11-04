import React, { useContext } from 'react';
import { Context } from '../contexts/createContext'

export default function CreateTodo() {
  const { todo, setTodo, setObjTodo, objTodo } = useContext(Context);
  return (
    <div className="containerTodo">
      <h3>Crie suas tarefas</h3>
      <form className="formTodo" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="todo">
          <input
            id="todo"
            value={ todo }
            onChange={({ target }) => setTodo(target.value)}
          />
        </label>
        <button
          onClick={() => {
            setObjTodo([{ todo }, ...objTodo ]);
            setTodo("");
          }}
        >
          Criar
        </button>
      </form>
    </div>
  )
}
