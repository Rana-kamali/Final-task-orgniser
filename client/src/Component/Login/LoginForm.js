import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import withRoot from "../../WithRoot"
import { TextField } from "@material-ui/core";

function LoginForm(props) {
  const history = useHistory();
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");



  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit handler", e)
    fetch('/api/auth/login',{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(details)
    }).then(response => {
      if (response.status !== 200) { 
      console.log("Details not match");
      setError("Details not match");
        return;
      }
          props.setUser({
        name: details.name,
        email: details.email,
      });
      props.setUserLoggedIn(true);      
      history.replace("/");
      return response.json();
    })
    .then(data => {
      console.log("data", data)
      if (data && data.token) { 
        window.localStorage.setItem('token', data.token);
      }
    })
  };

  return (
    <Container maxWidth="lg">
      <div className="login">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            
            
            <h2>LET'S MAKE THE WORLD MORE PRODUCTIVE, TOGETHER.</h2>
            <h2>Login</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
         
              <TextField
                type="text"
                name="name"
                id="name"
                label="Name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
             
              <TextField
                type="email"
                name="email"
                id="email"
                label="Email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <TextField
                type="password"
                name="password"
                id="password"
                label="Password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              ></TextField>
           
            <div className="loginbtn">
              <Button
                type="submit"
                value="LOGIN"
                variant="contained"
                color="secondary"
              >
                LOGIN
              </Button>
              
            </div>
            <div></div>
            
          </div>
        </form>
        
      </div>
      
    </Container>
    
  );
}

export default withRoot(LoginForm);
