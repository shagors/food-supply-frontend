import { baseApi } from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUserInfo) => ({
        url: "/register",
        method: "POST",
        body: newUserInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
