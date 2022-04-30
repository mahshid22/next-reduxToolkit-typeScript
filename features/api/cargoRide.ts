import { IGetAllCargos } from '@/types/Cargo';
import {
  IAssignDriverToCargo,
  ICreatRequestOnCargos,
  IGetCargoTrips,
  IGetRequestOnCargos,
  IUpdateBillOfLading,
  IUpdateStatus
} from '@/types/cargoRide';
import { ICargoViews } from '@/types/cargoView';
import {
  GetRequestOnCargo,
  GetAdminCargoTrip,
  GetCargoView,
  CargoRideUpdateStatus,
  AssignDriverToCargo,
  UpdateBillOfLadingInfo
} from '@/types/Urls';
import { emptySplitApi } from './apiSlice';

export const getCargoInfo = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getRequestOnCargo: build.query<IGetRequestOnCargos, number>({
      query: (id) => `${GetRequestOnCargo}/${id}`
    }),
    getCargoTrip: build.query<IGetCargoTrips, number>({
      query: (id) => `${GetAdminCargoTrip}/${id}`,
      providesTags: ['CargoTrip']
    }),
    getCargoView: build.query<ICargoViews, number>({
      query: (id) => `${GetCargoView}/${id}`
    }),

    UpdateStatus: build.mutation<IGetAllCargos, IUpdateStatus>({
      query(values) {
        return {
          url: CargoRideUpdateStatus,
          method: 'put',
          body: values
        };
      }
    }),
    assignDriverToCargo: build.mutation<
      ICreatRequestOnCargos,
      IAssignDriverToCargo
    >({
      query(values) {
        return {
          url: AssignDriverToCargo,
          method: 'post',
          body: values
        };
      },
      invalidatesTags: ['CargoTrip']
    }),
    updateBillOfLadingInfo: build.mutation<
      ICreatRequestOnCargos,
      IUpdateBillOfLading
    >({
      query(values) {
        return {
          url: UpdateBillOfLadingInfo,
          method: 'post',
          body: values
        };
      },
      invalidatesTags: ['CargoTrip']
    })
  }),

  overrideExisting: false
});

export const {
  useGetRequestOnCargoQuery,
  useGetCargoTripQuery,
  useGetCargoViewQuery,
  useUpdateStatusMutation,
  useAssignDriverToCargoMutation,
  useUpdateBillOfLadingInfoMutation
} = getCargoInfo;
