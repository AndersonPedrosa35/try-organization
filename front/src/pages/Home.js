import React, { useContext }  from 'react';
import Header from '../components/Header/Header';
import CreateTodo from '../components/CreateTodo';
import RenderTodo from '../components/RenderTodo';
import { Context } from '../contexts/createContext';

export default function Home() {
  const { objTodo, setObjTodo, listRemove, setListRemove } = useContext(Context);

  function removeTarefas() {
    let item = [];
    listRemove.forEach((remove) => {
      item = objTodo.filter(({ todo }) => todo !== remove)
    })
    if (listRemove.length > 0) {
      setObjTodo(item);
      setListRemove([]);
    }
  }

  return (
    <div>
      <Header />
      <CreateTodo />
      <button
        type="button"
        onClick={ removeTarefas }
      >
        Remover tarefa
      </button>
      <RenderTodo />
    </div>
  )
}
