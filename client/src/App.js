import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import {
  Route,
  Switch,
} from "react-router";

import { Welcome } from "./Component/NewList/Welcome";

import LandingPage from "./Component/Landingpage/LandingPage";
import LoginForm from "./Component/Login/LoginForm";

import Container from "@material-ui/core/Container";

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
      <Container maxWidth="lg">
      {userLoggedIn && (
              <Button onClick={logout} variant="contained" color="secondary">
                Log out
              </Button>
            )}
        <Switch>
          <Route path="/login">
            <LoginForm
              setUserLoggedIn={setUserLoggedIn}
              setUser={setUser}
              user={user}
            />
          </Route>
          <Route path="/task/:id"></Route>

          <Route exact path="/">
            {" "}
            {userLoggedIn && <Welcome />}
            {!userLoggedIn && 
              <LandingPage
              userLoggedIn={userLoggedIn}
              setUser={setUser}
              setUserLoggedIn={setUserLoggedIn}
            />  
            }
          </Route>
        </Switch>

        
      </Container>
    </Router>
  );
}

export default App;
