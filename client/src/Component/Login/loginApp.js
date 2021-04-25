// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import LoginForm from "./LoginForm";
// import { Welcome } from "../NewList/Welcome";

// function LoginApp(props) {
//   const history = useHistory();
//   const adminUser = {
//     email: "",
//     password: "",
//   };
//   const [error, setError] = useState("");

//   const Login = (details) => {
//     console.log(details);

//     if (
//       details.email === adminUser.email &&
//       details.password === adminUser.password
//     ) {
//       console.log("you have logged in");
//       props.setUser({
//         name: details.name,
//         email: details.email,
//       });
//       props.setUserLoggedIn(true);
//       window.localStorage.setItem("userLoggedin", true);
//       history.replace("/");
//     } else {
//       console.log("Details not match");
//       setError("Details not match");
//     }
//   };

//   return (
//     <div className="Login">
//       <LoginForm Login={Login} error={error} />
//     </div>
//   );
// }

// export default LoginApp;
