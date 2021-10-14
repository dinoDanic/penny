import userActionType from "./user.userActionType";
const INITIAL_STATE = {
  email: "dino.danic@gmail.com",
  _id: "615ad4489cc2e448abab5467",
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
