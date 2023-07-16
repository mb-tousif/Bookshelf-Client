/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlices";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
      getTenBooks: builder.query({
        query: () => ({
          url:'/books/get-ten-books',
        }),
      }),
      getAllBooks: builder.query({
        query: () => (
            {url: '/books/get-all-books',
            headers: {
                'Content-type': 'application/json',
            }} 
        )
      }),
      singleBook: builder.query({
        query: (id) =>(
            {
                url: `/books/book/${id}`,
                headers: {
                    'Content-type': 'application/json',
                }
            }
        ),
      }),
      createBook: builder.mutation({
        query: (data) => ({
          url: `/books/create-book`,
          headers: {
            'Content-type': 'application/json',
            },
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['review'],
      }),
      deleteBook: builder.mutation({
        query: (id) => ({
          url: `/books/delete/${id}`,
          headers: {
            'Content-type': 'application/json',
            },
          method: 'DELETE',
        }),
        invalidatesTags: ['review'],
      }),
    }),
  });
  
  export const {
    useGetTenBooksQuery,
    useGetAllBooksQuery,
    useSingleBookQuery,
    useCreateBookMutation,
    useDeleteBookMutation,
  } = bookApi;