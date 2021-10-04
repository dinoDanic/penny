import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { newUser } from "../../../redux/user/user.actions";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
