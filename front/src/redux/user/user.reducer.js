import userActionType from "./user.userActionType";
const INITIAL_STATE = {
  email: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.NEW_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
