/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["review", "book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookshelf-server.vercel.app/api/v1",
    prepareHeaders: (headers) => {
      return headers.set(
        "authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI2NzljNjYzNmMxODFkY2ExOTgyNGMiLCJlbWFpbCI6InRlc3QucGhlcm9AZ21haWwuY29tIiwiaWF0IjoxNjg5NjkyODE4LCJleHAiOjE2ODk3NzkyMTh9.IcHgzQpq8i8QMbV_En26qmGtaWHsaLmCQD7gxded4Mc"
      );
    },
  }),
  endpoints: () => ({}),
});
