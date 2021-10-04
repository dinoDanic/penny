import { combineReducers } from "redux";
import expensesReducer from "./expenses/expenses.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  expenses: expensesReducer,
  user: userReducer,
});

export default rootReducer;
