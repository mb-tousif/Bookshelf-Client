/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['review', 'book'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bookshelf-server.vercel.app/api/v1' ,
  prepareHeaders: (headers, { getState }) => {
    const token = getState() || localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }}),
  endpoints: () => ({}),
});