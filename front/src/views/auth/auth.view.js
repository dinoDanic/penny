import React from "react";
import Login from "./login/login.component";
import Register from "./register/register.component";

const Auth = () => {
  return (
    <div>
      <h3>Register</h3>
      <Register />
      <h3>Login</h3>
      <Login />
    </div>
  );
};

export default Auth;
