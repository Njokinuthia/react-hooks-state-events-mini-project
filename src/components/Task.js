import React from "react";

function Task({category,task,deleteTask}) { 
 
  function onClick(){        
    deleteTask(task); 
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={onClick}>X</button>
    </div>
  );
}

export default Task;
