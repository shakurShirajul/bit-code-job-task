import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "../features/api/baseAPI";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});
