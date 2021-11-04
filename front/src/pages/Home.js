import React from 'react'
import Header from '../components/Header/Header'
import CreateTodo from '../components/CreateTodo'
import RenderTodo from '../components/RenderTodo'

export default function Home() {
  return (
    <div>
      <Header />
      <CreateTodo />
      <RenderTodo />
    </div>
  )
}
