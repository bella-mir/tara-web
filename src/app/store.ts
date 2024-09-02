import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { ideasSlice } from "./slices/ideas";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [ideasSlice.name]: ideasSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
