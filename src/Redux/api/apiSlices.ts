import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import getAccessToken from "../../Hooks/getAccessToken";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["review", "book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookshelf-server.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const accessToken = getAccessToken(state);
      if (accessToken) {
        headers.set('Authorization', `${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
