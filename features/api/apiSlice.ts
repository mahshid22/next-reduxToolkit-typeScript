import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apilitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Credentials", "true");
      return headers;
    },
  }),
  tagTypes: [
    "Cities",
    "Loaders",
    "UserProfile",
    "TruckInfoByUserId",
    "Cargos",
    "CargoTrip",
    "User",
    "CargobyId",
  ],
  endpoints: () => ({}),
});
