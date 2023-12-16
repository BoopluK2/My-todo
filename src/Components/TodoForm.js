import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    
    const [value,setValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault(); 

        addTodo(value);

        setValue("")

    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' placeholder='Какая задача сегодня?' value={value} onChange={
                (e) => {setValue(e.target.value)}
            } />
            <button type='submit' className='todo-btn'>
            Добавить Задачу 
            </button>
        </form>
  )
}
