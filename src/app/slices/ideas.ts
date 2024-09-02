import { createSlice } from "@reduxjs/toolkit";

import { IDEAS_STATE_KEY } from "../app-constants";
import { confirmIdea, fetchIdeas, postIdea } from "../actions/ideas";
import { IIdeaState } from "../types";

const initialState: { ideas: IIdeaState[] | null; status: string } = {
  ideas: null,
  status: "",
};

export const ideasSlice = createSlice({
  name: IDEAS_STATE_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIdeas.fulfilled, (state, action) => {
      state.ideas = action.payload.data;
      state.status = "success";
    });
    builder.addCase(fetchIdeas.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchIdeas.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(postIdea.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(postIdea.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(postIdea.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(confirmIdea.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(confirmIdea.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(confirmIdea.rejected, (state) => {
      state.status = "error";
    });
  },
});
