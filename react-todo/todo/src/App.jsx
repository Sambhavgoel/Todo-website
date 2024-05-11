import "./App.css";
import { useState } from "react";
import Inputcontainers from "./components/Inputcontainers";
import Todocontainers from "./components/Todocontainers";

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos , setTodos] = useState([]);

  function writeTodo(e){
    setInputVal(e.target.value)
  }

  function addTodo(){
    if(inputVal!=0)
      {
        setTodos((prevTodos)=>[...prevTodos,inputVal])
        setInputVal('')
      }
  }
  console.log(todos)
  function delTodo(todoIndex)
  {
     setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex!=todoIndex
     }))
  }
  return (
    <main>
      <h1>To Do List</h1>
      <Inputcontainers inputVal = {inputVal} writeTodo = {writeTodo} addTodo={addTodo}/>
      <Todocontainers todos = {todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;
