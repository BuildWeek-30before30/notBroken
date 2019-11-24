import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const List = () => {
  return (
    <div>
      <TaskForm></TaskForm>
      <p>List</p>
      <Task></Task>
    </div>
  );
};

export default List;
