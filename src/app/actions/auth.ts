// src/app/actions/auth.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../app-constants";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      const { token } = response.data;

      localStorage.setItem("token", token);

      return token; // You can also return user info if needed
    } catch (error: any) {
      return rejectWithValue(error.response?.data.message || "Login failed");
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { request } from "../../utils/app-utils";
// import { ILoginProps } from "../types";
// import { API_URL } from "../app-constants";
// import axios from "axios";

// export const loginUser2 = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }: ILoginProps) => {
//     return request(`${API_URL}/auth/signin`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (
//     credentials: { email: string; password: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axios.post("${API_URL}/auth/login", credentials);
//       const { token } = response.data;

//       localStorage.setItem("token", token);

//       return token;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data.message || "Login failed");
//     }
//   }
// );
