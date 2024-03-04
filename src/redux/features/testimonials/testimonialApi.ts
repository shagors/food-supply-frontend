import { baseApi } from "@/redux/api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (buyer) => ({
        url: "/add-testimonial",
        method: "POST",
        body: buyer,
      }),
      invalidatesTags: ["testimonial"],
    }),

    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),

    deleteTestimonialsById: builder.mutation({
      query: (testimonialsId) => ({
        url: `/testimonials/${testimonialsId}`,
        method: "DELETE",
        body: testimonialsId,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const {
  useAddTestimonialMutation,
  useGetTestimonialsQuery,
  useDeleteTestimonialsByIdMutation,
} = testimonialsApi;
