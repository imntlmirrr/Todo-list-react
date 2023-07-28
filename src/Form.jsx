import React, { useState } from 'react'

function Form({data,setData}) {
    const[todos,setTodos] = useState("")

    const changeTodos = (e) => {
        setTodos(e.target.value)
    }
    console.log(todos);

    const addTodos = (e) => {
        e.preventDefault()
        if (todos !== "" ) {
        setData([...data,{text:todos , id:Date.now()}])
        }
        else alert("doldurun")
        setTodos("")
    }
    console.log(data);

  return (
    <>
    <div className='d-flex flex-column align-items-center mb-5 '>
        <h1>Todo List</h1>
        <form action='' className='d-flex gap-2 mt-2'>
            <input className='rounded-3 bg-transparent border-1 p-1  form-control' type="text" placeholder='Add todo...' value={todos} onChange={changeTodos} />
            <button className='rounded-3 border-1 bg-transparent' onClick={addTodos}>Add</button>
        </form>
    </div>
    </>

  )
}

export default Form