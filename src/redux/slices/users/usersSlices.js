import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//login action
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //make http call
      const { data } = await axios.post(
        " http://localhost:5000/api/users/login",
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.reaponse?.data);
    }
  }
);

//slice
const usersSlices = createSlice({
  name: "users",
  initialState: {},
  //handle pending state
  extraReducers: (builder) => {
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userLoading = true;
      //user error
      state.userAppErr = undefined;
      //system error
      state.userServerErr = undefined;
    });

    //handle success state
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.userLoading = false;
      state.userAppErr = undefined;
      state.userServerErr = undefined;
    });

    //handle rejected state
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.userAppErr = action?.payload?.message;
      state.userServerErr = action?.payload?.message;
    });
  },
});

export default usersSlices.reducer;

