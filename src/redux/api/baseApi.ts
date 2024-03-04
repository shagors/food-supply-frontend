import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["leaderboard", "supply", "testimonial", "volunteer", "community"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // baseUrl: "https://food-dist-supplies-management-backend.vercel.app/api/v1",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
