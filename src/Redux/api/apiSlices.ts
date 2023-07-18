/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['review', 'book', 'user'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bookshelf-server.vercel.app/api/v1' ,
  prepareHeaders: (headers) => {
    return headers.set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI1NWJiN2Q5NWZkYTg5MWYwNGU3ZTkiLCJlbWFpbCI6InBoZXJvLm5leHRMZXZlbEBnbWFpbC5jb20iLCJpYXQiOjE2ODk2NzYyOTYsImV4cCI6MTY4OTc2MjY5Nn0.OCa4oEEdG_wCTR-79hMy0mBMcQGhy6CxpoE0FPdsbLw")
  }}),
  endpoints: () => ({}),
});