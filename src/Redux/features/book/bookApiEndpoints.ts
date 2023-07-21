import { TFilterData } from "../../../@types/AllTypes";
import { api } from "../../api/apiSlices";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTenBooks: builder.query({
      query: () => ({
        url: "/books/get-ten-books",
      }),
      providesTags: ["book"],
    }),
    getAllBooks: builder.query({
      query: ({ searchTerm, genre, publicationYear } : TFilterData) => ({
        url: `/books/get-all-books?searchTerm=${searchTerm}&genre=${genre}&publicationYear=${publicationYear}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      providesTags: ["book"],
    }),
    }),
    singleBook: builder.query({
      query: (id) => ({
        url: `/books/book/${id}`,
        headers: {
          "Content-type": "application/json",
        },
      }),
      providesTags: ["book"],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ( data) => ({
        url: `/books/update/${data.id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/delete/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    postReview: builder.mutation({
      query: ({ id, data}) => ({
        url: `/books/book-review/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
      }),
    }),
});

export const {
  useGetTenBooksQuery,
  useGetAllBooksQuery,
  useSingleBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostReviewMutation,
} = bookApi;