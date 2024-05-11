import React from "react";



function Inputcontainers({inputVal,writeTodo,addTodo}) {

    
    
  return (
    <div className="input-container">
      <input onChange={writeTodo} type="text" placeholder="Enter a Task" value={inputVal} />
      <button onClick = {addTodo}>+</button>
    </div>
  );
}

export default Inputcontainers;
