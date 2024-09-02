import { createSelector } from "@reduxjs/toolkit";
import { AUTH_STATE_KEY } from "../app-constants";
import { RootState } from "../store";

const getAuthState = (state: RootState) => state[AUTH_STATE_KEY];

export const getUserInfo = createSelector(getAuthState, (state) => state.user);
