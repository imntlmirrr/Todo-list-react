import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App() {
  const localData = JSON.parse(localStorage.getItem("data"))
  const [data,setData] = useState(localData||[])

  localStorage.setItem("data",JSON.stringify(data));
  return (
    <div className="App">
      <Form data={data} setData={setData}/>
      <ToDoList data={data} setData={setData}/>
    </div>
  );
}

export default App;
