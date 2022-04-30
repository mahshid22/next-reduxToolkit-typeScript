import { IOTP } from "@/types/signUp";
import { OTP } from "@/types/Urls";
import { emptySplitApi } from "./apiSlice";

export const signUpInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getOTP: build.query<IOTP, string>({
      query: (number) => OTP + number,
      keepUnusedDataFor: 1
    }),
  }),

  overrideExisting: false,
});

export const { useGetOTPQuery } = signUpInfo;
