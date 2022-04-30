import { ILoader } from "@/types/Truck";
import { GetTruckInfoByUserId } from "@/types/Urls";
import { emptySplitApi } from "./apiSlice";

export const getTruckInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getTruckInfoByUserId: build.query<ILoader, void>({
      query: () => GetTruckInfoByUserId,
      providesTags: ["TruckInfoByUserId"],
      keepUnusedDataFor: 6000000,
    }),
  }),

  overrideExisting: false,
});

export const { useGetTruckInfoByUserIdQuery } = getTruckInfo;
