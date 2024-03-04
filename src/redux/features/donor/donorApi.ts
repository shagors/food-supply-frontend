import { baseApi } from "@/redux/api/baseApi";

const leaderboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBuyer: builder.mutation({
      query: (buyer) => ({
        url: "/add-buyer",
        method: "POST",
        body: buyer,
      }),
      invalidatesTags: ["leaderboard"],
    }),

    getLeaderboard: builder.query({
      query: () => ({
        url: "/leaderboard",
        method: "GET",
      }),
      providesTags: ["leaderboard"],
    }),

    deleteLeaderboardById: builder.mutation({
      query: (buyerId) => ({
        url: `/leaderboard/${buyerId}`,
        method: "DELETE",
        body: buyerId,
      }),
      invalidatesTags: ["leaderboard"],
    }),
  }),
});

export const {
  useAddBuyerMutation,
  useGetLeaderboardQuery,
  useDeleteLeaderboardByIdMutation,
} = leaderboardApi;
