import axios from "axios";

const url = "http://localhost:5000";

export const newUser = (userData) => axios.post(`${url}/users/new`, userData);
