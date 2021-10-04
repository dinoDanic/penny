import { combineReducers } from "redux";
import expensesReducer from "./expenses/expenses.reducer";

const rootReducer = combineReducers({
  expenses: expensesReducer,
});

export default rootReducer;
