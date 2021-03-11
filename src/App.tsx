import React, { useState, useEffect } from 'react';
import './App.css';
import { InputText } from './components/InputText';
import { ITodo } from './components/interfaces';
import { Navbar } from './components/Navbar';
import { TodoList } from './components/TodoList';

declare var confirm: (question: string) => boolean

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    console.log('First effect')
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    console.log('Second effect')
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title: string) => {
    let newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const changeHandler = (id: number): void => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeTodo = (id: number): void => {
    const shouldRemove = confirm('Are you sure you want to delete?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    
  }

  return (
    <div className="App">
      <Navbar />

      <InputText onAdd={addTodo}/>
      <TodoList todos={todos} onChange={changeHandler} onRemove={removeTodo} />
    </div>
  )
}

export default App;
