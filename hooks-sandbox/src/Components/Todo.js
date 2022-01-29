import React from 'react'
import ReactDOM from 'react-dom'


/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

export default function Todo () {
  const [toDo, setToDo] = React.useState([])
  const [formText, setFormText] = React.useState('')
  
  const handleClick = (index) => {
    setToDo((old) => old.filter((_, i) => i !== index))
  }
  const handleChange = (event) => {
    setFormText(event.target.value)
  }
  const addToDo = (event) => {
    event.preventDefault()
    if(formText) {
      setToDo((old) => [...old, formText])
      setFormText('')
      
  }
  }
  return (
    <div>
      <form onSubmit={addToDo}>
        <label htmlFor='add'> Add ToDo</label>
        <input type='text' id='add' 
        value ={formText}
        placeholder = 'ToDo Item'
        onChange={handleChange}/>
        <input type="submit" value="add to do"/>
      </form>
    {toDo && toDo.map((item,index) => (
      <button 
      onClick={() => handleClick(index)}
      id={item}>{item}</button>
    ))}      
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Todo />, rootElement)
