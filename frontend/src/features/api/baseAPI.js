import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: (credentials) => ({
        url: "/auth/logout",
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/profile",
    }),
    getRoadmap: builder.query({
      query: () => "/roadmap",
    }),
    getRoadmapByID: builder.query({
      query: (id) => `/roadmap/${id}`,
    }),
    createComment: builder.mutation({
      query: (credentials) => ({
        url: "/comment/create",
        method: "POST",
        body: credentials,
      }),
    }),
    editComment: builder.mutation({
      query: (credentials) => ({
        url: "/comment/edit",
        method: "PUT",
        body: credentials,
      }),
    }),
    deleteComment: builder.mutation({
      query: (credentials) => ({
        url: "/comment/delete",
        method: "DELETE",
        body: credentials,
      }),
    }),
    replyComment: builder.mutation({
      query: (credentials) => ({
        url: "/comment/reply",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetRoadmapQuery,
  useGetRoadmapByIDQuery,
  useCreateCommentMutation,
  useEditCommentMutation,
  useDeleteCommentMutation,
  useReplyCommentMutation,
} = baseAPI;
