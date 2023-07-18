/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
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
      query: ({searchText,filterOptions}) => ({
        url: "/books/get-all-books/?",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        params: {
          search: searchText,
          filters: filterOptions,
        },
      }),
      providesTags: ["book"],
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
  }),
});

export const {
  useGetTenBooksQuery,
  useGetAllBooksQuery,
  useSingleBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi;