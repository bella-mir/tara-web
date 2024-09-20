import { createSlice } from "@reduxjs/toolkit";

import { IDEAS_STATE_KEY } from "../app-constants";
import {
  confirmIdea,
  deleteLikeIdea,
  fetchIdeas,
  likeIdea,
  postIdea,
} from "../actions/ideas";
import { IIdeaState } from "../types";

const initialState: {
  ideas: IIdeaState[] | null;
  status: string;
  user?: string;
} = {
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
      state.user = action.payload.user;

      if (action.payload.user) {
        localStorage.setItem("user", action.payload.user);
      }

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
    builder.addCase(likeIdea.fulfilled, (state, action) => {
      if (state.ideas) {
        const cardId = action.meta.arg;
        const idea = state.ideas.find((idea) => idea._id === cardId);
        if (idea) {
          idea.likes = [...(idea.likes || []), state.user || ""]; // Add the user to the likes array
        }
      }
      state.status = "success";
    });
    builder.addCase(likeIdea.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(likeIdea.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(deleteLikeIdea.fulfilled, (state, action) => {
      if (state.ideas) {
        const cardId = action.meta.arg;
        const idea = state.ideas.find((idea) => idea._id === cardId);
        if (idea) {
          idea.likes = (idea.likes || []).filter((like) => like !== state.user); // Remove the user from the likes array
        }
      }
      state.status = "success";
    });
    builder.addCase(deleteLikeIdea.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(deleteLikeIdea.rejected, (state) => {
      state.status = "error";
    });
  },
});
