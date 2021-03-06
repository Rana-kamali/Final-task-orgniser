import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { Route, Switch } from "react-router";

import { Welcome } from "./Component/NewList/Welcome";
import { AddTask } from "./Component/NewList/AddTask";
import ProjectList from "./Component/NewList/ProjectList";

import LandingPage from "./Component/Landingpage/LandingPage";
import LoginForm from "./Component/Login/LoginForm";

import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import IconButton from "@material-ui/core/IconButton";

function App() {
  const history = useHistory();
  const [user, setUser] = useState({ name: "", email: "" });
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const logout = () => {
    console.log("loggedOut");
    setUser({ name: "", email: "" });
    setUserLoggedIn(false);
    history.replace("/");
  };

  return (
    <Router>
      <AppBar position="static" text-align="right">
        <Toolbar>
          <IconButton
            edge="start"
            color="yellow"
            aria-label="menu"
          ></IconButton>
          {userLoggedIn && (
            <Button onClick={logout} variant="contained" color="secondary">
              Log out
            </Button>
          )}
          {userLoggedIn && (
            <Link to="/AddTask">
              <h5>Add A Task </h5>
            </Link>
          )}
          {userLoggedIn && (
            <Link to="/projectList">
              <h5>project list </h5>
            </Link>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Switch>
          <Route path="/login">
            <LoginForm
              setUserLoggedIn={setUserLoggedIn}
              setUser={setUser}
              user={user}
            />
          </Route>
          <Route path="/task/:id"></Route>
          <Route exact path="/AddTask">
            <AddTask />
          </Route>
          <Route exact path="/projectList">
            <ProjectList />
          </Route>
          <Route exact path="/">
            {" "}
            {userLoggedIn && <Welcome />}
            {!userLoggedIn && (
              <LandingPage
                userLoggedIn={userLoggedIn}
                setUser={setUser}
                setUserLoggedIn={setUserLoggedIn}
              />
            )}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
