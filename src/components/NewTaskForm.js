import React, { useState } from "react";

function NewTaskForm({ categories , addTaskSubmit }) {
  const [toAddTask, setToAddTask] = useState("...")
  const [category, setCategory] = useState("code")

  function changeCategory(event) {
    setCategory(event.target.value)
  }
  function handleToAddTask(event) {
    console.log(event.target.value)
    setToAddTask(event.target.value)
  }
  function addTask(event) {
    event.preventDefault()   
    addTaskSubmit({toAddTask,category})
    setToAddTask("")
    setCategory("code")
  }

  const optionElements = categories.map(category => <option key={category}>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text" value={toAddTask} onChange={handleToAddTask} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={changeCategory}>
          {optionElements}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
