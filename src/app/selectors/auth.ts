import { AUTH_STATE_KEY } from "../app-constants";
import { RootState } from "../store";

export const getAuthState = (state: RootState) => state[AUTH_STATE_KEY];
