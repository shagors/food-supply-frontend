import { baseApi } from "@/redux/api/baseApi";

const leaderboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBuyer: builder.mutation({
      query: (buyer) => ({
        url: "/add-buyer",
        method: "POST",
        body: buyer,
      }),
    }),

    getLeaderboard: builder.query({
      query: () => ({
        url: "/leaderboard",
        method: "GET",
      }),
    }),

    deleteLeaderboardById: builder.mutation({
      query: (buyerId) => ({
        url: `/leaderboard/${buyerId}`,
        method: "DELETE",
        body: buyerId,
      }),
    }),
  }),
});

export const {
  useAddBuyerMutation,
  useGetLeaderboardQuery,
  useDeleteLeaderboardByIdMutation,
} = leaderboardApi;
