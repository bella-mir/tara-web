import { createSelector } from "@reduxjs/toolkit";
import { IDEAS_STATE_KEY } from "../app-constants";
import { RootState } from "../store";
import { IIdeaState } from "../types";

const getIdeasState = (state: RootState) => state[IDEAS_STATE_KEY];

export const getLoadStatus = createSelector(
  getIdeasState,
  (state) => state.status
);

export const getAllIdeas = createSelector(getIdeasState, (state) =>
  state.ideas?.slice().reverse()
);

export const getConfirmedIdeas = createSelector(getAllIdeas, (ideas) =>
  ideas?.filter((idea: IIdeaState) => idea.confirmed)
);

export const getSelectedPoints = createSelector(getConfirmedIdeas, (ideas) =>
  ideas?.map((idea) => ({
    type: "Feature",
    properties: {
      cluster: false,
      ideaName: idea.ideaName,
      idea: idea.idea,
      category: idea.category,
      lat: idea.coordinates.lat,
      lng: idea.coordinates.lng,
    },
    geometry: {
      type: "Point",
      coordinates: [idea.coordinates.lng, idea.coordinates.lat],
    },
  }))
);

export const getIdeaById = createSelector(
  //@ts-ignore
  [getAllIdeas, (state: RootState, id: string) => id],
  (ideas, id) => {
    return ideas?.find((idea: IIdeaState) => idea._id === id);
  }
);

export const getIsSelectedById = createSelector(
  //@ts-ignore
  [getAllIdeas, (state: RootState, id: string) => id],
  (ideas, id) => {
    const user = localStorage.getItem("user");
    const idea = ideas?.find((idea: IIdeaState) => idea._id === id);
    return user && idea?.likes?.includes(user);
  }
);

export const getCardLikes = createSelector(
  //@ts-ignore
  [getAllIdeas, (state: RootState, id: string) => id],
  (ideas, id) => {
    const idea = ideas?.find((idea: IIdeaState) => idea._id === id);
    return idea?.likes?.length || 0;
  }
);
