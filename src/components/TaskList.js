import React from "react";
import Task from "./Task"

function TaskList({tasks,deleteTask}) {
  const singleTask = tasks.map(task=>
    <Task key={task.text} 
    category={task.category} 
    task={task.text} 
    deleteTask={deleteTask}/>)

  return (
    <div className="tasks">{singleTask}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
