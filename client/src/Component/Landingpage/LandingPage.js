import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  
  Link,
  useHistory,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";

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
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const history = useHistory();


  return (
    <div>
 
      <div className="landingBG">
        <div className="landing">
         
        </div>
        <div>
          <h5>Stay organized. Get more done</h5>
        </div>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {" "}
              <p>
                BECOME YOUR BEST & MOST PRODUCTIVE SELF: Perfect yourself and
                stay organized with this dateless to-do list notepad! This
                undated note pad hourly day planner will help you organize your
                tasks, chores, appointments, assignments, responsibilities,
                fitness and health! Use it at work as a professional, academic
                school or college, family baby kids living well plans. Makes the
                perfect desktop gratitude journal as well!
              </p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <img
              className={classes.paper}
              src="https://thestaysanemom.com/assets/house-task-organizer-62245a0fd03694fcd47e355f5573663d62cad7ffae2e05b5ee44549e26d766a0.jpg"
              alt="altText"
            ></img>
          </Grid>
        </Grid>
        {!props.userLoggedIn && (
          <Link to="/login">
            {" "}
            <Button variant="contained" color="secondary">
              Get started
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default LandingPage;
