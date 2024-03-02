import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSupplies: builder.mutation({
      query: (supplies) => ({
        url: "/supply",
        method: "POST",
        body: supplies,
      }),
    }),

    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),

    getSuppliesById: builder.query({
      query: (supplyId) => ({
        url: `/supplies/${supplyId}`,
        method: "GET",
      }),
    }),

    updateSupplies: builder.mutation({
      query: ({ supplyId, data }) => ({
        url: `/supplies/${supplyId}`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    deleteSuppliesById: builder.mutation({
      query: (supplyId) => ({
        url: `/supplies/${supplyId}`,
        method: "DELETE",
        body: supplyId,
      }),
    }),
  }),
});

export const {
  usePostSuppliesMutation,
  useGetSuppliesQuery,
  useGetSuppliesByIdQuery,
  useUpdateSuppliesMutation,
  useDeleteSuppliesByIdMutation,
} = authApi;
