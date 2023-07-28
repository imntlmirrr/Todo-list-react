import React from 'react'
import Input from './Input'

function ToDoList({data,setData}) {
  return (
    <div>
        {
            data.map(
                a=> <Input key={a.id} {...a} data = {data} setData= {setData} />
            )
        }
    </div>
  )
}

export default ToDoList