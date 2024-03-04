import { baseApi } from "@/redux/api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (buyer) => ({
        url: "/add-volunteer",
        method: "POST",
        body: buyer,
      }),
      invalidatesTags: ["volunteer"],
    }),

    getVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),

    deleteVolunteerById: builder.mutation({
      query: (testimonialsId) => ({
        url: `/volunteers/${testimonialsId}`,
        method: "DELETE",
        body: testimonialsId,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const {
  useAddVolunteerMutation,
  useGetVolunteersQuery,
  useDeleteVolunteerByIdMutation,
} = testimonialsApi;
