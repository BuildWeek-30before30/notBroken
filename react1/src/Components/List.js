import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const List = () => {
  const [list] = useState([
    "Go to Paris",
    "Make a Million Dollars",
    "Own a House"
  ]);
  return (
    <div className="dummyList">
      <TaskForm></TaskForm>
      <h3>My bucketlist</h3>
      {list.map((task, index) => {
        return <Task key={index} task={task} />;
      })}
    </div>
  );
};

export default List;
