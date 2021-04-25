import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddTask } from "./AddTask";
import ProjectList from "./ProjectList";

const Welcome = () => {
  return (
    <Router>
      <Link to="/AddTask">
        <h5>Add A Task </h5>
      </Link>
      <Link to="/projectList">
        <h5>project list </h5>
      </Link>

      <Switch>
        <Route path="/AddTask">
          <AddTask />
        </Route>
        <Route path="/projectList">
          <ProjectList />
        </Route>
      </Switch>
    </Router>
  );
};

export { Welcome };
