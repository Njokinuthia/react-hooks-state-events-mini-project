import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory , setSelectedCategory] = useState("All")

  function deleteTask(toDeleteTask) {
    // console.log(`deleting ${toDeleteTask}`)
    const newTaskList = tasks.filter((task) => task.text !== toDeleteTask)
    return setTasks(newTaskList)
  }

  function addTaskSubmit(newTask){
    console.log(newTask)
    setTasks([...tasks,newTask])
  }

  const tasksToDisplay = tasks.filter((task)=> selectedCategory === "All" || task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} />
      <NewTaskForm  categories={categories.filter((singleCat)=>singleCat !== "All")} addTaskSubmit={addTaskSubmit}/>
      <TaskList tasks={tasksToDisplay} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
