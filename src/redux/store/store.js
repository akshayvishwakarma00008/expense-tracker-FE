import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlices";
import expenses from "../slices/expenses/expenseSlices";
import income from "../slices/income/incomeSlices";
const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses,
    income,
  },
});

export default store;
