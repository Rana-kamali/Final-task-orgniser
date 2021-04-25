import React, { useState } from "react";
import LoginApp from "../Login/loginApp";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Welcome } from "../NewList/Welcome";
import { userHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import LoginForm from "../Login/LoginForm"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));


const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("userLoggedin") ? true : false;
  const [userLoggedIn, setUserLoggedIn] = useState(loggedIn);
  const [user, setUser] = useState({ name: "", email: "" });

  const logout = () => {
    
    console.log("loggedOut");
    setUser({ name: "", email: "" });
    setUserLoggedIn(false);
    window.localStorage.setItem("userLoggedin", "");
    history.replace("/");
  };
  
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            {/* <Typography variant="h9" className={classes.title}>
              Welcome {user.name}
            </Typography> */}

            
            {userLoggedIn && (
              <Button onClick={logout} variant="contained" color="secondary">
                Log out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <div className="landingBG">
        <div className="landing">
          <Switch>
            <Route path="/login">
              <LoginForm
                setUserLoggedIn={setUserLoggedIn}
                setUser={setUser}
                user={user} />
            </Route>
            <Route path="/task/:id"></Route>
            <Route path="/"> {userLoggedIn && <Welcome />}</Route>
          
          </Switch>
        </div>
        <div>
          <h5>Stay organized. Get more done</h5>
         
        </div>
       
      </div>
      
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}> <p>
          BECOME YOUR BEST & MOST PRODUCTIVE SELF: 
          Perfect yourself and stay organized with 
          this dateless to-do list notepad! This 
          undated note pad hourly day planner will 
          help you organize your tasks, chores, 
          appointments, assignments, responsibilities, 
          fitness and health! Use it at work as a 
          professional, academic school or college, 
          family baby kids living well plans. Makes 
          the perfect desktop gratitude journal as well!
          </p></Paper>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.paper} src='https://thestaysanemom.com/assets/house-task-organizer-62245a0fd03694fcd47e355f5573663d62cad7ffae2e05b5ee44549e26d766a0.jpg'></img>
        </Grid>
      </Grid>
      {!userLoggedIn && (
              <Link to="/login">
                {" "}
                <Button variant="contained" color="secondary">
                  Get started
                </Button>
              </Link>
            )}
    </div>
    </Router>
  );
};
export default LandingPage;
