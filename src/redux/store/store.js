import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlices";
import expenses from "../slices/expenses/expenseSlices";
import income from "../slices/income/incomeSlices";
import statistics from "../slices/accountStats/accountStatsSlice"
import userStat from "../slices/userStats/userStats"
const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses,
    income,
    statistics,
    userStat
  },
});

export default store;
