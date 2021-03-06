import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://fakeapi.jsonparseronline.com/",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Credentials", "true");
      return headers;
    },
  }),
  tagTypes: ["Posts", "Categories", "comments", "counter"],
  endpoints: () => ({}),
});
