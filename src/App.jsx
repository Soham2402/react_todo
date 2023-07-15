import { useState } from 'react'

import './styles.css'

export default function App(){

  const [newItem, setNewItem] = useState("")
  const [todos, setTodo] = useState([])

  function addTodo(e){
    e.preventDefault()
    setTodo(currentItem => {
      return [...currentItem,{id:crypto.randomUUID(), task: newItem, completed: false}]
    })

    setNewItem("")  
  }

  function toggleChecked(id, completed){
    setTodo(currentItem => {
      return currentItem.map(todo =>{
        if(todo.id === id){
          return [...todo, completed ]
        }

        return todo
      })
    })
  }



  return (

    <>
      <form onSubmit={addTodo} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className='btn'>Add</button>
      </form>

      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.map(todo => {
          return(
          <li key={todo.id}>
            <label>
              <input type='checkbox' checked = {todo.completed} onChange={e => {toggleChecked(todo.id,e.target.checked)}} />
              {todo.task}
            </label>
            <button className = 'btn btn-danger'>Delete</button>
          </li>
          )
        })}



      </ul>
    </>

  )
}