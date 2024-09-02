import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth";
import { IAuthState } from "../types";
import { AUTH_STATE_KEY } from "../app-constants";

const initialState: IAuthState = {
  user: {},
  status: "",
};

export const authSlice = createSlice({
  name: AUTH_STATE_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.status = "success";
    });
    builder.addCase(loginUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.status = "error";
    });
  },
});
