/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['review', 'book'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bookshelf-server.vercel.app/api/v1' ,
  prepareHeaders: (headers) => {
    return headers.set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGIwZjAxZTQ4Y2E0YWU0MTAyOTU1ZWIiLCJlbWFpbCI6InBoZXJvLm5leHRMZXZlbEBnbWFpbC5jb20iLCJpYXQiOjE2ODk1NjY1MTYsImV4cCI6MTY4OTY1MjkxNn0.83kCkDy05uP80q_G5rtM2SDDtYndIIbC5DN6CnV34MU")
  }}),
  endpoints: () => ({}),
});