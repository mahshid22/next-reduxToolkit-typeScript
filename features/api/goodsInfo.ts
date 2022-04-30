import { IGoods } from "@/types/Goods";
import { emptySplitApi } from "./apiSlice";

export const getGoodsInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getGoods: build.query<IGoods, void>({
      query: () => "/api/v1/Goods/GetAll",
      keepUnusedDataFor: 6000000,
    }),
  }),

  overrideExisting: false,
});

export const { useGetGoodsQuery } = getGoodsInfo;
