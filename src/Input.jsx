import React, { useRef, useState } from 'react'
import "./Input.css"
function Input({id,text,data,setData}) {
    const [newTodos,setNewTodos] = useState(text)
    const [state,setState] = useState(true)
    const inputRef = useRef()

    const buttonEdit = () => {
      setState(!state)
      inputRef.current.focus()
      const findData = data.find((finds)=> finds.id == id)
      findData.text = inputRef.current.value
      setData(data)
  localStorage.setItem("data",JSON.stringify(data));
      navigator.vibrate([200,100,200]);
    }

  return (
    <div className='d-flex flex-row gap-1 justify-content-center'>
        <div className='d-flex gap-1 mt-2'>
            <input ref={inputRef} className={`rounded-3 border ${state?"bg-transparent border-light-1 ":"text-black border-light-1 outline-1 border-info "}`} readOnly={state} type="text" value={newTodos} onChange={(e)=> setNewTodos(e.target.value) } />
            <button
            className={`rounded-3 btn ${state?"btn-info text-white border-1 ":"btn-primary"}`}
            onClick={buttonEdit} >{state? <span>Edit</span> : <span>Save</span> }  </button>
            <button 
            className='bg-dark text-white border-1 p-1 rounded-2'
            onClick={()=>{
                const filters = data.filter(b => b.id !== id)
                setData(filters);
                console.log("a");
            }} >Delete</button>
        </div>
    </div>
  )
}

export default Input