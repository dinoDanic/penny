import userActionType from "./user.userActionType";
import * as api from "../../api";

export const newUser = (userData) => async (dispatch) => {
  try {
    const response = await api.newUser(userData);
    console.log(response);
    dispatch({
      type: userActionType.NEW_USER,
      payload: response.data,
    });
  } catch (error) {}
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await api.loginUser(userData);
    if (response.data.message) {
      alert(response.data.message);
      console.log("not ok");
      return;
    }
    dispatch({
      type: userActionType.NEW_USER,
      payload: response.data,
    });
  } catch (err) {}
};
