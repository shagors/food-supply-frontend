import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSupplies: builder.mutation({
      query: (supplies) => ({
        url: "/supply",
        method: "POST",
        body: supplies,
      }),
      invalidatesTags: ["supply"],
    }),

    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),

    getSuppliesById: builder.query({
      query: (supplyId) => ({
        url: `/supplies/${supplyId}`,
        method: "GET",
      }),
      providesTags: ["supply"],
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
      invalidatesTags: ["supply"],
    }),

    deleteSuppliesById: builder.mutation({
      query: (supplyId) => ({
        url: `/supplies/${supplyId}`,
        method: "DELETE",
        body: supplyId,
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  usePostSuppliesMutation,
  useGetSuppliesQuery,
  useGetSuppliesByIdQuery,
  useUpdateSuppliesMutation,
  useDeleteSuppliesByIdMutation,
} = supplyApi;
