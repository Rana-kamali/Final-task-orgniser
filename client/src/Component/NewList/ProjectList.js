import React, { useEffect, useState } from "react";
import TaskTable from "./TaskTable";

const ProjectList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleClick = (e) => {
    console.log("project id", e.target.value);
    fetch(`/api/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((tasks) => {
        console.log("Project data: ", tasks);
        setTasks(tasks);
      });
  };
  useEffect(() => {
    fetch("/api/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Task respond: ", response);
        return response.json();
      })
      .then((dropdown, i) => {
        setProjects(dropdown);
      });
  }, []);

  return (
    <div>
      <select onChange={handleClick}>
        {projects.map((el) => {
          return <option value={el._id}>{el.projectName}</option>;
        })}
        ;
      </select>
      <TaskTable tasks={tasks} />
    </div>
  );
};

export default ProjectList;
