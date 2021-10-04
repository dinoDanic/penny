import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/user/user.actions";

const Login = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          name="email"
          placeholder="email"
          type="email"
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
