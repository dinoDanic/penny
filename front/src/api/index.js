import axios from "axios";

const url = "http://localhost:5000";

export const newUser = (data) => axios.post(`${url}/users/new`, data);
export const loginUser = (data) => axios.post(`${url}/users/login`, data);
