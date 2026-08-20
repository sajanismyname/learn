import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  return (
    <div className="app">
      <nav style={{ display: "flex", gap: "12px", marginBottom: "1rem" }}>
            <Link to="/" >All</Link>
            <Link to="/AddTodo" >Add Todo</Link>
            <Link to="/Todo/active" >Active</Link>
            <Link to="/Todo/completed" >Completed</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList/>}></Route>
        <Route path="/AddTodo" element={<TodoForm/>}></Route>
        <Route path="/Todo/active" element={<TodoList filter="active"/>}></Route>
        <Route path="/Todo/completed" element={<TodoList filter="completed"/>}></Route>
      </Routes>


    </div>
  )
}

export default App
