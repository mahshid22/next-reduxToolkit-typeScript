import {
  ICreateCargoApi,
  IGetAllCargos,
  IGetCargoByIds,
  IGetCargoSearch,
  IGetDriverCargos,
  IUpdateCargoByAdmin,
  IUpdateCargoStatus
} from '@/types/Cargo';
import {
  GetAdminCargoById,
  UpdateStatus,
  GetDriverCargo,
  GetAdminCargos,
  cargoCreateByAdmin,
  UpdateByAdmin
} from '@/types/Urls';
import { IMutationResponce } from '@/types/types';
import { emptySplitApi } from './apiSlice';

export const getCargoInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getCargoById: build.query<IGetCargoByIds, number | number[]>({
      query: (id) => `${GetAdminCargoById}/${id}`,
      providesTags: ['CargobyId']
    }),
    updatecargoStatus: build.mutation<IGetAllCargos, IUpdateCargoStatus>({
      query(values) {
        return {
          url: UpdateStatus,
          method: 'put',
          body: values
        };
      }
    }),

    getTruckInfoByUserId: build.query<IGetDriverCargos, void>({
      query: () => GetDriverCargo
    }),

    getCargos: build.mutation<IGetAllCargos, IGetCargoSearch>({
      query(values) {
        return {
          url: GetAdminCargos,
          method: 'post',
          body: values
        };
      }
    }),

    createCargo: build.mutation<IMutationResponce, ICreateCargoApi>({
      query(values) {
        return {
          url: cargoCreateByAdmin,
          method: 'post',
          body: values
        };
      },
      invalidatesTags: ['CargobyId']
    }),
    cargoUpdateByAdmin: build.mutation<IMutationResponce, IUpdateCargoByAdmin>({
      query(values) {
        return {
          url: UpdateByAdmin,
          method: 'put',
          body: values
        };
      },
      invalidatesTags: ['CargobyId']
    })
  }),

  overrideExisting: false
});

export const {
  useGetCargosMutation,
  useGetTruckInfoByUserIdQuery,
  useGetCargoByIdQuery,
  useUpdatecargoStatusMutation,
  useCreateCargoMutation,
  useCargoUpdateByAdminMutation
} = getCargoInfo;
