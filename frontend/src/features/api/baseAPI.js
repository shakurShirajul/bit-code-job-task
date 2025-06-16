import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
});
