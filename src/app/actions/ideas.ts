import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/app-utils";
import { API_URL, IDEAS_STATE_KEY } from "../app-constants";

export const fetchIdeas = createAsyncThunk(
  `${IDEAS_STATE_KEY}/getIdeas`,
  async () => {
    return request(`${API_URL}/ideas`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
);

export const postIdea = createAsyncThunk(
  `${IDEAS_STATE_KEY}/postIdea`,
  async (data: any) => {
    return request(`${API_URL}/ideas`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });
  }
);

export const confirmIdea = createAsyncThunk(
  `${IDEAS_STATE_KEY}/confirmIdea`,
  async (data: any) => {
    return request(`${API_URL}/ideas`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });
  }
);
