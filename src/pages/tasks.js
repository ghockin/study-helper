import React from "react";
import Task from '../components/task/Task';
import './tasksPageStyle.css';

function Tasks() {
  return (
    <div className="TaskContainer">
      <h1>Tasks</h1>
      <Task />
    </div>
  )
}

export default Tasks