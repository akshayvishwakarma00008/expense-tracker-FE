import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../../utils/baseURL";

//fetch monthly expenses
export const fetchMonthlyExpenses = createAsyncThunk(
    "userstats/fetchMonthlyExpenses",
    async (statsdata, { rejectWithValue, getState, dispatch }) => {
        //get token
        const user = getState()?.users;
        const { userAuth } = user;
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        //http call
        try {
            const { data } = await axios.get(
                `${baseURL}/userstats/expenses/${userAuth?._id}/monthly`,
                config,
            );

            return data;

        } catch (error) {
            if (!error.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }

    }
);

export const fetchMonthlyIncome = createAsyncThunk(
    "userstats/fetchMonthlyIncome",
    async (statsdata, { rejectWithValue, getState, dispatch }) => {
        //get token
        const user = getState()?.users;
        const { userAuth } = user;
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        //http call
        try {
            const { data } = await axios.get(
                `${baseURL}/userstats/income/${userAuth?._id}/monthly`,
                config,
            );

            return data;

        } catch (error) {
            if (!error.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }

    }
);



//slices
const userStat = createSlice({
    name: "userStat",
    initialState: {},
    extraReducers:builder =>{
        builder.addCase(fetchMonthlyExpenses.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchMonthlyExpenses.fulfilled, (state, action) => {
            state.loading = false;
            state.statExpData = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchMonthlyExpenses.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.payload?.message;
        });

        //income slice
        builder.addCase(fetchMonthlyIncome.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchMonthlyIncome.fulfilled, (state, action) => {
            state.loading = false;
            state.statIncData = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchMonthlyIncome.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.payload?.message;
        });
    }
});

export default userStat.reducer;