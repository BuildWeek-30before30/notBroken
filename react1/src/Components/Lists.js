import React, { useState, useEffect } from "react";
import Task from "./ListCard";
import TaskForm from "./TaskForm";
import api from "../utils/axiosWithAuth";
import { Row } from "reactstrap";

const List = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    api
      .get("/lists")
      .then(response => {
        console.log(response.data);
        setLists(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="dummyList">
      <TaskForm></TaskForm>
      <h3>Everyone's Lists</h3>
      <Row>
        {lists.map(list => {
          return <Task list={list} key={list.id} />;
        })}
      </Row>
    </div>
  );
};

export default List;
