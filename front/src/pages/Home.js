import React, { useState }  from 'react';
import Header from '../components/Header/Header';
import CreateTodo from '../components/CreateTodo';
import RenderTodo from '../components/RenderTodo';
import RemoverTodos from '../components/RemoverTodos';

export default function Home() {
  const [statusAdd, setStatusAdd] = useState(true);
  return (
    <div>
      <Header />
      { statusAdd ? <CreateTodo /> : <RemoverTodos /> }
      <button 
        onClick={() => {
          setStatusAdd(!statusAdd)
        }}
      >
        Remover tarefa
      </button>
      <RenderTodo />
    </div>
  )
}
