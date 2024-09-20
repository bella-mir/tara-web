import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth";
import { AUTH_STATE_KEY } from "../app-constants";

interface AuthState {
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: AUTH_STATE_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

// import { createSlice } from "@reduxjs/toolkit";
// import { loginUser } from "../actions/auth";
// import { IAuthState } from "../types";
// import { AUTH_STATE_KEY } from "../app-constants";

// const initialState: IAuthState = {
//   user: {},
//   status: "",
// };

// export const authSlice = createSlice({
//   name: AUTH_STATE_KEY,
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.fulfilled, (state, action) => {
//       state.user = action.payload.data;
//       state.status = "success";
//     });
//     builder.addCase(loginUser.pending, (state) => {
//       state.status = "pending";
//     });
//     builder.addCase(loginUser.rejected, (state) => {
//       state.status = "error";
//     });
//   },
// });
