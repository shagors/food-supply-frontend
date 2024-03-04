import { baseApi } from "@/redux/api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (buyer) => ({
        url: "/community",
        method: "POST",
        body: buyer,
      }),
      invalidatesTags: ["community"],
    }),

    getComments: builder.query({
      query: () => ({
        url: "/community",
        method: "GET",
      }),
      providesTags: ["community"],
    }),
  }),
});

export const { useAddCommentMutation, useGetCommentsQuery } = communityApi;
