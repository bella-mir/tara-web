import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/app-utils";
import { ILoginProps } from "../types";
import { API_URL } from "../app-constants";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: ILoginProps) => {
    return request(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
);
