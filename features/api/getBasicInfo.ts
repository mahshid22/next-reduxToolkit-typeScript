import { IcityRespone } from "@/types/Cities";
import { ILoaderCategorysRespone, ILoadersRespone } from "@/types/LoaderType";
import {
  GetAllCities,
  GetByTitleCities,
  GetAllLoader,
  LoaderCategory,
} from "@/types/Urls";
import { emptySplitApi } from "./apiSlice";

export const getBasicInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<IcityRespone, void>({
      query: () => GetAllCities,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "Cities" as const, id })),
              { type: "Cities", id: "LIST" },
            ]
          : [{ type: "Cities", id: "LIST" }],
      keepUnusedDataFor: 86400,
    }),
    getCitiesWithId: build.query<IcityRespone, string>({
      query: (value?: string) => `${GetByTitleCities}${value}`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "Cities" as const, id })),
              { type: "Cities", id: "LIST" },
            ]
          : [{ type: "Cities", id: "LIST" }],
    }),

    getLoaders: build.query<ILoadersRespone, void>({
      query: () => GetAllLoader,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Loaders" as const,
                id,
              })),
              { type: "Loaders", id: "LIST" },
            ]
          : [{ type: "Loaders", id: "LIST" }],
      keepUnusedDataFor: 86400,
    }),
    loaderCategory: build.query<ILoaderCategorysRespone, void>({
      query: () => LoaderCategory,
      keepUnusedDataFor: 86400,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCitiesQuery,
  useGetLoadersQuery,
  useGetCitiesWithIdQuery,
  useLoaderCategoryQuery,
} = getBasicInfo;
